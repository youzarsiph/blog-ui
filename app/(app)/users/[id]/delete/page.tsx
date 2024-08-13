'use client'

import React from 'react'
import { getAuthToken } from '@/app/actions'
import { User } from '@/app/types'
import { API } from '@/app/utils'
import { Button } from '@/app/ui'
import { useRouter } from 'next/navigation'

const Page = ({ params }: { params: { id: number } }) => {
  const router = useRouter()
  const [user, setUser] = React.useState<User>()

  // Fetch user data
  React.useEffect(() => {
    ;(async () => {
      const cookie = await getAuthToken()

      await API.users.delete(
        cookie,
        params.id,
        (data) => setUser(data),
        (error) => console.error(error),
      )
    })()
  }, [params.id])

  const handleDelete = async () => {
    const cookie = await getAuthToken()

    if (user) {
      await API.users.delete(
        cookie,
        user.id,
        () => router.push(`/`),
        (error) => console.error(error),
      )
      router.push(`/`)
    }
  }

  return user !== undefined ? (
    <>
      <div className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 md:mt-56 lg:px-8">
        <div className="absolute right-8 top-8 -z-20 h-96 w-96 rotate-45 rounded-3xl bg-gradient-to-tr from-violet-500 to-rose-700 blur-3xl filter"></div>
        <div className="absolute bottom-8 left-8 -z-20 h-64 w-64 rotate-45 bg-gradient-to-bl from-cyan-400 to-amber-400 blur-3xl filter"></div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h1 className="mb-10 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Delete your account{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-extrabold tracking-widest text-transparent">
              {user.username}
            </span>
          </h1>

          <div className="mt-6 max-w-3xl text-xl text-neutral-600">
            <p>Are you sure you want to delete your account?</p>
          </div>

          <Button variant="danger" className="mt-6" onClick={handleDelete}>
            Delete
          </Button>
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
