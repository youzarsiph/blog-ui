'use client'

import React from 'react'
import { Tag } from '@/app/types'
import { API } from '@/app/utils'
import Link from 'next/link'
import { getAuthToken } from '@/app/actions'

const Page = ({ params }: { params: { id: number } }) => {
  const [tag, setTag] = React.useState<Tag>()
  const dateCreated = new Date(tag?.created_at || '').toDateString()

  // Fetch tag data
  React.useEffect(() => {
    ;(async () => {
      const cookie = await getAuthToken()

      await API.tags.get(
        cookie,
        params.id,
        (data) => setTag(data),
        (error) => console.error(error),
      )
    })()
  }, [params.id])

  return (
    <>
      <article className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <header className="mx-auto flex max-w-5xl flex-col text-center">
              <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                {tag?.name}
              </h1>
              <time
                dateTime={dateCreated}
                className="order-first text-sm text-neutral-950"
              >
                {dateCreated}
              </time>

              <p className="mt-6 text-sm font-semibold text-neutral-950">
                {tag?.description}
              </p>
            </header>
          </div>
        </div>
      </article>

      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
        <div className="rounded-t-4xl absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden bg-gradient-to-b from-neutral-50">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          >
            <rect
              width="100%"
              height="100%"
              fill="url(#:r1r:)"
              strokeWidth="0"
            ></rect>
            <svg x="50%" y="-270" strokeWidth="0" className="overflow-visible">
              <path
                transform="translate(64 160)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(128 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(288 480)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(512 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(544 640)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(320 800)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
            </svg>
            <defs>
              <pattern
                id=":r1r:"
                width="96"
                height="480"
                x="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(0 -270)"
                fill="none"
              >
                <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
              </pattern>
            </defs>
          </svg>
        </div>

        {tag?.articles !== undefined ? (
          tag.articles.length !== 0 ? (
            <>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                    {tag.articles.map((art) => {
                      const dateCreated = new Date(
                        art.created_at,
                      ).toDateString()

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
      </div>
    </>
  )
}

export default Page
