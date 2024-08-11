/**
 * Authentication server actions
 */

'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { API } from '@/app/utils'

/**
 * Redirect the use to login page
 * @returns never
 */
const redirectToLogin = () => redirect('/login')

/**
 * Returns the session cookie if set
 * @returns string
 */
const getCookie = async () => cookies().get('session')?.value

/**
 * Returns the session cookie if set, else redirects to login page.
 * @returns string
 */
const getAuthToken = async () => {
  const session = await getCookie()

  return session ? session : redirectToLogin()
}

/**
 * Logs a user in
 * @param data FormData
 */
const login = async (data: FormData) => {
  let reDir = false

  const username = data.get('username')
  const password = data.get('password')

  await API.users.login(
    `${username?.toString()}`,
    `${password?.toString()}`,
    (data) => {
      cookies().set('session', data.auth_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
      })

      reDir = true
    },
    (error) => console.error(error),
  )

  if (reDir) {
    return redirect('/')
  }
}

/**
 * Logs a user out
 * @param data FormData
 */
const logout = async () => {
  let reDir = false
  const cookie = await getCookie()

  // Delete the cookie
  cookies().delete('session')

  await API.users.logout(
    `${cookie}`,
    () => (reDir = true),
    (error) => console.error(error),
  )

  if (reDir) {
    return redirect('/login')
  }
}

/**
 * Create a new user account
 * @param data FormData
 */
const signUp = async (data: FormData) => {
  let reDir = false
  const username = data.get('username')
  const email = data.get('email')
  const password = data.get('password')

  await API.users.create(
    {
      username: `${username?.toString()}`,
      email: `${email?.toString()}`,
      password: `${password?.toString()}`,
    },
    () => (reDir = true),
    (error) => console.error(error),
  )

  if (reDir) {
    return redirect('/login')
  }
}

export { getAuthToken, getCookie, login, logout, redirectToLogin, signUp }
