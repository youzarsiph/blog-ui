'use client'

import React from 'react'
import { Tag } from '@/app/types'
import { API } from '@/app/utils'
import Link from 'next/link'
import { getAuthToken } from '@/app/actions'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

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

  return tag !== undefined ? (
    <>
      <article className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
        <div className="absolute right-8 top-8 -z-20 h-64 w-64 rotate-45 rounded-3xl bg-gradient-to-tr from-red-300 to-red-700 blur-3xl filter"></div>
        <div className="absolute bottom-8 left-8 -z-20 h-48 w-48 rotate-45 bg-gradient-to-bl from-sky-200 to-lime-500 blur-3xl filter"></div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <header className="mx-auto flex max-w-5xl flex-col text-center">
              <h1 className="mt-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-display text-5xl font-medium tracking-tight text-transparent [text-wrap:balance] sm:text-6xl">
                {tag.name}
              </h1>

              <time
                dateTime={dateCreated}
                className="order-first text-sm text-neutral-950"
              >
                {dateCreated}
              </time>

              <p className="mt-6 text-sm font-semibold text-neutral-950">
                {tag.description}
              </p>
            </header>
          </div>
        </div>
      </article>

      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
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
            {tag?.articles !== undefined && tag.articles.length !== 0 ? (
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                {tag.articles.map((art) => {
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
                            className="mt-6 flex items-center gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                            href={`/articles/${art.id}`}
                          >
                            Read more
                            <ArrowLongRightIcon className="size-6 fill-neutral-950" />
                            <span className="absolute inset-0"></span>
                          </Link>
                        </div>
                      </article>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p>No articles found!</p>
            )}
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
