'use client'

import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import React from 'react'
import { API } from '@/app/utils'
import { getAuthToken } from '@/app/actions'
import { Article, Button } from '@/app/ui/components'
import { Response, Article as TArticle } from '@/app/types'

const Page = () => {
  const router = useRouter()
  const [url, setUrl] = React.useState<
    'explore' | 'feed' | 'recent' | 'starred'
  >('recent')
  const [articles, setArticles] = React.useState<TArticle[]>()

  React.useEffect(() => {
    ;(async () => {
      const cookie = await getAuthToken()

      switch (url) {
        case 'feed':
          await API.articles.feed(
            cookie,
            (data: Response<TArticle>) => setArticles(data.results),
            (error) => console.log(error),
          )
          break

        case 'starred':
          await API.articles.starred(
            cookie,
            (data: Response<TArticle>) => setArticles(data.results),
            (error) => console.log(error),
          )
          break

        default:
          await API.articles.list(
            cookie,
            (data: Response<TArticle>) => setArticles(data.results),
            (error) => console.log(error),
          )
          break
      }
    })()
  }, [url])

  return (
    <>
      <div className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
        <div className="absolute right-8 top-8 -z-20 h-96 w-96 rotate-45 rounded-3xl bg-gradient-to-tr from-red-300 to-rose-500 blur-3xl filter"></div>
        <div className="absolute bottom-8 left-8 -z-20 h-64 w-64 rotate-45 bg-gradient-to-bl from-sky-400 to-lime-500 blur-3xl filter"></div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <h1>
              <span className="block font-display text-base font-semibold text-neutral-950">
                Blog
              </span>
              <span className="sr-only"> - </span>
              <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                The latest articles and news
              </span>
            </h1>
            <div className="mt-6 max-w-3xl text-xl text-neutral-600">
              <p>
                Discover a world of insightful articles, engaging stories, and
                thought-provoking content. Our platform is a space where ideas
                come to life, and we invite you to explore, learn, and share
                your thoughts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="flex flex-wrap items-center gap-4 lg:gap-8">
            <Button
              variant={url === 'explore' ? 'primary' : 'secondary'}
              onClick={() => setUrl('explore')}
              disabled={url === 'explore'}
            >
              Explore
            </Button>
            <Button
              variant={url === 'feed' ? 'primary' : 'secondary'}
              onClick={() => setUrl('feed')}
              disabled={url === 'feed'}
            >
              Feed
            </Button>
            <Button
              variant={url === 'recent' ? 'primary' : 'secondary'}
              onClick={() => setUrl('recent')}
              disabled={url === 'recent'}
            >
              Recent
            </Button>
            <Button
              variant={url === 'starred' ? 'primary' : 'secondary'}
              onClick={() => setUrl('starred')}
              disabled={url === 'starred'}
            >
              Starred
            </Button>

            <Button
              variant="secondary"
              onClick={() => router.push('/articles/search')}
            >
              <MagnifyingGlassIcon className="size-6 fill-neutral-950" />
              Search
            </Button>

            <Button
              variant="primary"
              onClick={() => router.push('/articles/new')}
            >
              <PlusIcon className="size-6 fill-neutral-50" />
              New
            </Button>
          </div>

          <div className="mt-6 space-y-24 lg:space-y-32">
            {articles ? (
              articles.length !== 0 ? (
                articles.map((article) => (
                  <Article key={article.id} {...article} />
                ))
              ) : (
                <p>No article found!</p>
              )
            ) : (
              <div className="relative flex flex-col items-center justify-center gap-16 py-16">
                <h1 className="text-3xl">Loading...</h1>

                <div className="flex items-center gap-8">
                  <div className="flex h-12 w-12 animate-ping items-center justify-center rounded-full border-2 border-neutral-800"></div>
                  <div className="flex h-12 w-12 animate-ping items-center justify-center rounded-full border-2 border-neutral-800"></div>
                  <div className="flex h-12 w-12 animate-ping items-center justify-center rounded-full border-2 border-neutral-800"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
