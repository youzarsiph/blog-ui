'use client'

import React from 'react'
import { User } from '@/app/types'
import { API } from '@/app/utils'
import Link from 'next/link'

const Page = ({ params }: { params: { id: number } }) => {
  const [user, setUser] = React.useState<User>()

  // Fetch user data
  React.useEffect(() => {
    ;(async () => {
      await API.users.get(
        params.id,
        (data) => setUser(data),
        (error) => console.error(error),
      )
    })()
  }, [params.id])

  return (
    <>
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 md:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              {user?.first_name} {user?.last_name}
            </h1>

            <p className="mt-6 text-xl text-neutral-600">
              {user?.article_count}
            </p>
          </div>
        </div>
      </div>

      {user?.articles !== undefined ? (
        user.articles.length !== 0 ? (
          <>
            <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="max-w-2xl transform-none">
                  <h2>
                    <span className="block font-display text-2xl font-semibold tracking-tight text-neutral-950 [text-wrap:balance]">
                      Articles
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                  {user.articles.map((art) => {
                    const dateCreated = new Date(art.created_at).toDateString()

                    return (
                      <div key={art.id}>
                        <article>
                          <div className="relative flex flex-col items-start pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-neutral-950 after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-neutral-950/10">
                            <h3 className="mt-6 text-base font-semibold text-neutral-950">
                              {art.title}
                            </h3>
                            <time
                              dateTime={dateCreated}
                              className="order-first text-sm text-neutral-600"
                            >
                              {dateCreated}
                            </time>
                            <p className="mt-2.5 text-base text-neutral-600">
                              {art.headline}
                            </p>
                            <Link
                              className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                              aria-label="Read more: 3 Lessons We Learned Going Back to the Office"
                              href={`/articles/${art.id}`}
                            >
                              Read more
                              <svg
                                viewBox="0 0 24 6"
                                aria-hidden="true"
                                className="w-6 flex-none fill-current"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M24 3 18 .5v2H0v1h18v2L24 3Z"
                                ></path>
                              </svg>
                              <span className="absolute inset-0"></span>
                            </Link>
                          </div>
                        </article>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </>
        ) : undefined
      ) : undefined}
    </>
  )
}

export default Page
