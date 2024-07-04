'use client'

import React from 'react'
import { Article, Response, Comment as TComment, Tag } from '@/app/types'
import { API } from '@/app/utils'
import Link from 'next/link'
import Image from 'next/image'
import { Comment } from '@/app/ui/components'

const Page = ({ params }: { params: { id: number } }) => {
  const [article, setArticle] = React.useState<Article>()
  const [comment, setComment] = React.useState<string>('')
  const [comments, setComments] = React.useState<TComment[]>()

  const dateCreated = new Date(article?.created_at || '').toDateString()

  // Fetch article data
  React.useEffect(() => {
    ;(async () => {
      await API.articles.get(
        params.id,
        (data) => setArticle(data),
        (error) => console.error(error),
      )
    })()
  }, [params.id])

  // Fetch related data
  React.useEffect(() => {
    ;(async () => {
      if (article) {
        await API.articles.comments(
          article.id,
          (data: Response<TComment>) => setComments(data.results),
          (error) => console.error(error),
        )
      }
    })()
  }, [article])

  return (
    <>
      <article className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <header className="mx-auto flex max-w-5xl flex-col text-center">
              <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                {article?.title}
              </h1>
              <time
                dateTime={dateCreated}
                className="order-first text-sm text-neutral-950"
              >
                {dateCreated}
              </time>

              <p className="mt-6 text-sm font-semibold text-neutral-950">
                by {article?.user.first_name} {article?.user.last_name}
              </p>

              <div className="mt-6 flex items-center justify-center gap-4">
                {article?.tags.map((tag) => (
                  <Link
                    key={(tag as Tag).id}
                    href={`/tags/${(tag as Tag).id}`}
                    className="flex items-center gap-4 rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-neutral-50 transition hover:bg-neutral-800"
                  >
                    <span>{(tag as Tag).name}</span>
                  </Link>
                ))}
              </div>
            </header>
          </div>

          <div>
            <div className="mt-24 sm:mt-32 lg:mt-40 [&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0">
              <p className="text-center text-xl font-extralight text-neutral-950">
                {article?.headline}
              </p>

              <div className="prose prose-neutral mt-6 md:prose-lg lg:prose-xl xl:prose-xl 2xl:prose-2xl">
                <div className="group isolate my-10 mb-6 overflow-hidden rounded-[2.5rem] bg-neutral-100 max-sm:-mx-6">
                  <div className="group relative">
                    <div className="aspect-[16/10] h-[1600] w-[2400] max-w-full bg-neutral-200 object-cover"></div>
                    {/* <Image
                      alt=""
                      loading="lazy"
                      width="2400"
                      height="1600"
                      decoding="async"
                      data-nimg="1"
                      className="aspect-[16/10] w-full object-cover"
                      sizes="(min-width: 768px) 42rem, 100vw"
                      src="./The Future of Web Development_ Our Predictions for 2023 - Studio_files/server.jpg"
                      style={{ color: 'transparent', filter: 'grayscale(1)' }}
                    /> */}
                    <div
                      className="pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      {/* <Image
                        alt=""
                        loading="lazy"
                        width="2400"
                        height="1600"
                        decoding="async"
                        data-nimg="1"
                        className="aspect-[16/10] w-full object-cover"
                        sizes="(min-width: 768px) 42rem, 100vw"
                        src="./The Future of Web Development_ Our Predictions for 2023 - Studio_files/server.jpg"
                        style={{ color: 'transparent' }}
                      /> */}
                    </div>
                  </div>
                </div>

                {article ? (
                  <div dangerouslySetInnerHTML={{ __html: article?.content }} />
                ) : undefined}
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="relative grid w-full grid-cols-1 gap-4 rounded-3xl p-6 ring-1 ring-neutral-950/5 transition sm:p-8 lg:grid-cols-2">
            <div className="flex justify-center">
              <div className="w-56 flex-none lg:w-96">
                <div className="relative flex aspect-[719/680] w-full justify-center">
                  <svg viewBox="0 0 655 680" fill="none" className="h-full">
                    <g clipPath="url(#:S1:-clip)" className="group">
                      <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                        <foreignObject width="100%" height="100%">
                          <div className="h-full w-full rounded-xl">
                            <Image
                              alt=""
                              loading="lazy"
                              width="224"
                              height="384"
                              decoding="async"
                              className="aspect-[16/10] h-full w-full object-contain"
                              src="/vercel.svg"
                            />
                          </div>
                        </foreignObject>
                      </g>
                      <use
                        href="#:S1:-shape"
                        strokeWidth="2"
                        className="stroke-neutral-950/10"
                      ></use>
                    </g>
                    <defs>
                      <clipPath id=":S1:-clip">
                        <path
                          id=":S1:-shape"
                          d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-center gap-6 rounded-3xl px-6 hover:bg-neutral-50">
              <Link
                href={`/users/${article?.user.id}`}
                className="absolute inset-0 z-10"
              ></Link>

              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                {article?.user.first_name} {article?.user.last_name}
              </h1>

              <div className="flex items-center gap-4 font-light">
                <span>{article?.user.article_count} articles</span>
                <span>{article?.user.follower_count} followers</span>
              </div>

              <p className="text-xl font-extralight">{article?.user.bio}</p>
            </div>
          </div>
        </div>
      </div>

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

        {comments !== undefined ? (
          <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="max-w-2xl transform-none">
                  <h2>
                    <span className="block font-display text-2xl font-semibold tracking-tight text-neutral-950 [text-wrap:balance]">
                      Comments
                    </span>
                  </h2>
                </div>

                <div className="relative mt-6">
                  <textarea
                    value={comment}
                    rows={1}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment..."
                    aria-label="Write a comment..."
                    className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                  />
                  <div className="absolute inset-y-1 right-1 flex justify-end">
                    <button
                      type="submit"
                      aria-label="Submit"
                      onClick={() =>
                        article
                          ? API.comments.create(
                              article.id,
                              { content: comment },
                              () => {
                                API.articles.comments(
                                  article.id,
                                  (data: Response<TComment>) =>
                                    setComments(data.results),
                                  (error) => console.error(error),
                                )

                                // Reset input
                                setComment('')
                              },
                              (error) => console.error(error),
                            )
                          : {}
                      }
                      className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-neutral-50 transition hover:bg-neutral-800"
                    >
                      <svg
                        viewBox="0 0 16 6"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                {comments.length !== 0 ? (
                  <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                    {comments.map((comment) => (
                      <Comment key={comment.id} {...comment} />
                    ))}
                  </div>
                ) : (
                  <p>Be first to comment!</p>
                )}
              </div>
            </div>
          </>
        ) : undefined}

        {article?.recommendations !== undefined ? (
          article?.recommendations.length !== 0 ? (
            <>
              <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div className="max-w-2xl transform-none">
                    <h2>
                      <span className="block font-display text-2xl font-semibold tracking-tight text-neutral-950 [text-wrap:balance]">
                        Related articles
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    {article?.recommendations?.map((art) => {
                      const dateCreated = new Date(
                        (art as Article).created_at,
                      ).toDateString()

                      return (
                        <div key={(art as Article).id}>
                          <article>
                            <div className="relative flex flex-col items-start pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-neutral-950 after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-neutral-950/10">
                              <h3 className="mt-6 text-base font-semibold text-neutral-950">
                                {(art as Article).title}
                              </h3>
                              <time
                                dateTime={dateCreated}
                                className="order-first text-sm text-neutral-600"
                              >
                                {dateCreated}
                              </time>
                              <p className="mt-2.5 text-base text-neutral-600">
                                {(art as Article).headline}
                              </p>
                              <Link
                                className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                                aria-label="Read more: 3 Lessons We Learned Going Back to the Office"
                                href={`/articles/${(art as Article).id}`}
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
