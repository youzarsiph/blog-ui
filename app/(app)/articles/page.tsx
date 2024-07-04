'use client'

import { Response, Article as TArticle } from '@/app/types'
import { Article, Button } from '@/app/ui/components'
import { API } from '@/app/utils'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router = useRouter()
  const [url, setUrl] = React.useState<
    'explore' | 'feed' | 'recent' | 'starred'
  >('recent')
  const [articles, setArticles] = React.useState<TArticle[]>()

  React.useEffect(() => {
    ;(async () => {
      switch (url) {
        case 'feed':
          await API.articles.feed(
            (data: Response<TArticle>) => setArticles(data.results),
            (error) => console.log(error),
          )
          break

        case 'starred':
          await API.articles.starred(
            (data: Response<TArticle>) => setArticles(data.results),
            (error) => console.log(error),
          )
          break

        default:
          await API.articles.list(
            (data: Response<TArticle>) => setArticles(data.results),
            (error) => console.log(error),
          )
          break
      }
    })()
  }, [url])

  return (
    <>
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
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
                Stay up-to-date with the latest industry news as our marketing
                teams finds new ways to re-purpose old CSS tricks articles.
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
            {articles?.map((article) => (
              <Article key={article.id} {...article} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
