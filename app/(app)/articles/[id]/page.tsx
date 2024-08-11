'use client'

import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { getAuthToken } from '@/app/actions'
import { Article, Response, Comment as TComment, Tag } from '@/app/types'
import { Button, Comment, Editor, Message } from '@/app/ui'
import { API } from '@/app/utils'

const Page = ({ params }: { params: { id: number } }) => {
  const [article, setArticle] = React.useState<Article>()
  const [comment, setComment] = React.useState<string>('Write a comment...')
  const [comments, setComments] = React.useState<TComment[]>()
  const [message, setMessage] = React.useState<{
    content: string
    display: boolean
    variant: 'error' | 'info' | 'success' | 'primary'
  }>({
    content: '',
    display: false,
    variant: 'primary',
  })

  const dateCreated = new Date(article?.created_at || Date()).toDateString()

  // Fetch article data
  React.useEffect(() => {
    ;(async () => {
      const cookie = await getAuthToken()

      await API.articles.get(
        cookie,
        params.id,
        (data) => setArticle(data),
        (error) => console.error(error),
      )
    })()

    // Highlight the code
    setTimeout(() => {
      hljs.highlightAll()
    }, 500)
  }, [params.id])

  // Fetch related data
  React.useEffect(() => {
    ;(async () => {
      if (article) {
        const cookie = await getAuthToken()

        await API.articles.comments(
          cookie,
          article.id,
          (data: Response<TComment>) => setComments(data.results),
          (error) => console.error(error),
        )
      }
    })()
  }, [article])

  return article !== undefined ? (
    <>
      {message.display ? (
        <Message
          variant={message.variant}
          onClose={() => setMessage({ ...message, display: false })}
        >
          <p className="font-medium">{message.content}</p>
        </Message>
      ) : undefined}

      <article className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="relative">
            <div className="absolute inset-0 -z-10 -mx-40 -mb-80 -mt-20 backdrop-blur-3xl backdrop-filter lg:-mt-32"></div>

            <div
              className={clsx(
                'absolute left-8 top-4 -z-20 h-96 w-96 rounded-full bg-gradient-to-l',
                {
                  'from-sky-400 to-blue-600': article.id % 2 === 0,
                  'from-cyan-400 to-purple-500': article.id % 2 !== 0,
                },
              )}
            ></div>
            <div
              className={clsx(
                'absolute bottom-4 right-8 -z-20 h-56 w-80 rounded-3xl bg-gradient-to-tr',
                {
                  'from-sky-500 to-fuchsia-600': article.id % 2 === 0,
                  'from-sky-400 to-emerald-400': article.id % 2 !== 0,
                },
              )}
            ></div>

            <header className="mx-auto flex max-w-5xl flex-col text-center">
              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                {article.title}
              </h1>

              <time
                dateTime={dateCreated}
                className="order-first text-sm text-neutral-950"
              >
                {dateCreated}
              </time>

              <p className="mt-6 text-center text-xl font-extralight text-neutral-950">
                {article.headline}
              </p>

              <p className="mt-6 text-sm font-semibold text-neutral-950">
                by {article.user.first_name} {article.user.last_name}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                {article.tags.map((tag) => (
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
              <div className="prose prose-neutral mt-6 md:prose-lg lg:prose-xl xl:prose-xl 2xl:prose-2xl prose-code:p-0 prose-code:font-code">
                {article.photo ? (
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
                    </div>
                  </div>
                ) : undefined}

                <main
                  id="content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>
          </div>
        </div>

        <footer>
          {/* Author card */}
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
                    href={`/users/${article.user.id}`}
                    className="absolute inset-0 z-10"
                  ></Link>

                  <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                    {article.user.first_name} {article.user.last_name}
                  </h1>

                  <div className="flex items-center gap-4 font-light">
                    <span>{article.user.article_count} articles</span>
                    <span>{article.user.follower_count} followers</span>
                  </div>

                  <p className="text-xl font-extralight">{article.user.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </article>

      <section
        id="details"
        className="relative mt-24 overflow-hidden rounded-t-[2.5rem] py-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40"
      >
        <div className="absolute inset-0 -z-10 -mx-40 -mb-80 -mt-20 backdrop-blur-3xl backdrop-filter lg:-mt-32"></div>

        <div className="absolute right-24 top-20 -z-20 h-[30rem] w-[30rem] rotate-45 rounded-3xl bg-gradient-to-t from-cyan-400 to-green-500"></div>
        <div className="absolute bottom-10 left-24 -z-20 h-96 w-96 bg-gradient-to-bl from-orange-400 to-purple-500"></div>

        <div className="absolute left-40 top-8 -z-20 h-80 w-80 -rotate-45 bg-gradient-to-bl from-blue-700 to-violet-500"></div>
        <div className="absolute bottom-40 right-24 -z-20 h-96 w-96 rotate-45 bg-gradient-to-bl from-lime-400 to-green-700"></div>

        {/* Comments */}
        <section id="comments">
          <div className="mx-auto mt-6 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl transform-none">
                <h2>
                  <span className="block font-display text-4xl font-semibold tracking-tight text-neutral-950 [text-wrap:balance]">
                    Comments ({comments?.length})
                  </span>
                </h2>
              </div>

              <div className="relative mt-6 grid gap-4 lg:flex-row">
                <Editor
                  content={comment}
                  onUpdate={({ editor }) => setComment(editor.getHTML())}
                />

                <Button
                  variant="primary"
                  aria-label="Comment"
                  onClick={async () => {
                    const cookie = await getAuthToken()

                    await API.comments.create(
                      cookie,
                      article.id,
                      { content: comment },
                      () => {
                        API.articles.comments(
                          cookie,
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
                  }}
                >
                  <span>Comment</span>
                  <ArrowRightIcon className="size-6 fill-neutral-50" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-16">
                {comments !== undefined && comments.length !== 0 ? (
                  comments.map((comment) => (
                    <Comment key={comment.id} {...comment} />
                  ))
                ) : (
                  <p>Be first to comment!</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section id="related-articles">
          <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl transform-none">
                <h2>
                  <span className="block font-display text-4xl font-semibold tracking-tight text-neutral-950 [text-wrap:balance]">
                    Related articles ({article.recommendations.length})
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              {article.recommendations !== undefined &&
              article.recommendations.length !== 0 ? (
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                  {article.recommendations.map((art) => {
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
              ) : (
                <p>No related articles found!</p>
              )}
            </div>
          </div>
        </section>
      </section>
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
