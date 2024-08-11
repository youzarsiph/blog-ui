'use client'

import React from 'react'
import { Response, User } from '@/app/types'
import { API } from '@/app/utils'
import { getAuthToken } from '@/app/actions'

const Page = () => {
  const [users, setUsers] = React.useState<User[]>()

  // Fetch related data
  React.useEffect(() => {
    ;(async () => {
      const cookie = await getAuthToken()

      await API.users.list(
        cookie,
        (data: Response<User>) => setUsers(data.results),
        (error) => console.error(error),
      )
    })()
  }, [])

  return (
    <>
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 md:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Users
            </h1>

            <p className="mt-6 text-xl text-neutral-600">
              We are a development studio working at the intersection of design
              and technology. It’s a really busy intersection though — a lot of
              our staff have been involved in hit and runs.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
