'use client'

import clsx from 'clsx'
import React from 'react'
import { useRouter } from 'next/navigation'
import { getAuthToken } from '@/app/actions'
import { Article } from '@/app/types'
import { Button } from '@/app/ui'
import { API } from '@/app/utils'

const Page = ({ params }: { params: { id: number } }) => {
  const router = useRouter()
  const [article, setArticle] = React.useState<Article>()

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
  }, [params.id])

  const handleDelete = async () => {
    const cookie = await getAuthToken()

    if (article) {
      await API.articles.delete(
        cookie,
        article.id,
        () => router.push(`/articles`),
        (error) => console.error(error),
      )
      router.push(`/articles`)
    }
  }

  return article !== undefined ? (
    <>
      <article className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="relative">
            <div
              className={clsx(
                'absolute left-8 top-4 -z-20 h-96 w-96 rounded-full bg-gradient-to-l blur-3xl filter',
                {
                  'from-sky-400 to-blue-600': article.id % 2 === 0,
                  'from-cyan-400 to-purple-500': article.id % 2 !== 0,
                },
              )}
            ></div>
            <div
              className={clsx(
                'absolute bottom-4 right-8 -z-20 h-56 w-80 rounded-3xl bg-gradient-to-tr blur-3xl filter',
                {
                  'from-sky-500 to-fuchsia-600': article.id % 2 === 0,
                  'from-sky-400 to-emerald-400': article.id % 2 !== 0,
                },
              )}
            ></div>

            <div className="mx-auto max-w-2xl lg:max-w-none">
              <header className="mx-auto flex max-w-5xl flex-col space-y-6">
                <div className="max-w-3xl">
                  <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                    Delete article{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-extrabold tracking-widest text-transparent">
                      {article.title}
                    </span>
                  </h1>

                  <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                    <p>Are you sure that you want to delete this article?</p>
                  </div>
                </div>

                <div className="mt-10">
                  <Button
                    variant="danger"
                    onClick={async () => await handleDelete()}
                  >
                    Delete
                  </Button>
                </div>
              </header>
            </div>
          </div>
        </div>
      </article>
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
