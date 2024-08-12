'use client'

import React from 'react'
import Link from 'next/link'
import { getAuthToken } from '@/app/actions'
import { User } from '@/app/types'
import { API } from '@/app/utils'

const Page = () => {
  const [user, setUser] = React.useState<User>()

  // Fetch related data
  React.useEffect(() => {
    ;(async () => {
      const cookie = await getAuthToken()

      await API.users.me(
        cookie,
        (data: User) =>
          API.users.get(
            cookie,
            data.id,
            (data: User) => setUser(data),
            (error) => console.error(error),
          ),
        (error) => console.error(error),
      )
    })()
  }, [])

  return user !== undefined ? (
    <>
      <div className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 md:mt-56 lg:px-8">
        <div className="absolute inset-0 -z-10 -mx-40 -mb-80 -mt-20 backdrop-blur-3xl backdrop-filter lg:-mt-60"></div>

        <div className="absolute right-8 top-8 -z-20 h-96 w-96 rotate-45 rounded-3xl bg-gradient-to-tr from-orange-400 to-rose-700"></div>
        <div className="absolute bottom-8 left-8 -z-20 h-64 w-64 rotate-45 bg-gradient-to-bl from-lime-400 to-lime-700"></div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              {user.first_name} {user.last_name}
            </h1>

            <p className="mt-6 text-xl text-neutral-600">{user?.bio}</p>

            <Link href={`/users/${user.id}`}>View public profile</Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center gap-16">
      <h1 className="text-3xl">Loading...</h1>

      <div className="flex items-center gap-8">
        <div className="flex h-12 w-12 animate-ping items-center justify-center rounded-full border-2 border-neutral-800"></div>
        <div className="flex h-12 w-12 animate-ping items-center justify-center rounded-full border-2 border-neutral-800"></div>
        <div className="flex h-12 w-12 animate-ping items-center justify-center rounded-full border-2 border-neutral-800"></div>
      </div>
    </div>
  )
}

export default Page
