'use client'

import React from 'react'
import { getAuthToken } from '@/app/actions'
import { User } from '@/app/types'
import { API } from '@/app/utils'
import { Button, Input, Textarea } from '@/app/ui'
import { useRouter } from 'next/navigation'

const Page = ({ params }: { params: { id: number } }) => {
  const router = useRouter()
  const [user, setUser] = React.useState<User>()

  // Fetch user data
  React.useEffect(() => {
    ;(async () => {
      const cookie = await getAuthToken()

      await API.users.get(
        cookie,
        params.id,
        (data) => setUser(data),
        (error) => console.error(error),
      )
    })()
  }, [params.id])

  const handleUpdate = async () => {
    const cookie = await getAuthToken()

    if (user) {
      await API.users.update(
        cookie,
        user.id,
        user,
        (data) => router.push(`/users/${data.id}`),
        (error) => console.error(error),
      )
    }
  }

  return user !== undefined ? (
    <>
      <div className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 md:mt-56 lg:px-8">
        <div className="absolute inset-0 -z-10 -mx-40 -mb-80 -mt-20 backdrop-blur-3xl backdrop-filter lg:-mt-60"></div>

        <div className="absolute right-8 top-8 -z-20 h-96 w-96 rotate-45 rounded-3xl bg-gradient-to-tr from-violet-500 to-rose-700"></div>
        <div className="absolute bottom-8 left-8 -z-20 h-64 w-64 rotate-45 bg-gradient-to-bl from-cyan-400 to-amber-400"></div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h1 className="mb-10 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Update your account{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-extrabold tracking-widest text-transparent">
              {user.username}
            </span>
          </h1>

          <Input
            label="First name"
            value={user.first_name}
            description="Enter your first name."
            onChange={(event) =>
              setUser({ ...user, first_name: event.target.value })
            }
          />

          <Input
            label="Last name"
            value={user.last_name}
            description="Enter your last name."
            onChange={(event) =>
              setUser({ ...user, last_name: event.target.value })
            }
          />

          <Input
            label="Email"
            value={user.email}
            description="Enter your email."
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
          />

          <Textarea
            label="Bio"
            value={user.bio}
            description="Enter your bio."
            onChange={(event) => setUser({ ...user, bio: event.target.value })}
          />

          <Button variant="primary" className="mt-6" onClick={handleUpdate}>
            Save changes
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
