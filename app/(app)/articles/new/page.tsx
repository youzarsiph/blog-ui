'use client'

import React from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import { getAuthToken } from '@/app/actions'
import { ArticleRequiredFields, Response, Tag } from '@/app/types'
import { Button, Combobox, Editor, Input, Switch } from '@/app/ui/components'
import { API } from '@/app/utils'

const Page = () => {
  const router = useRouter()
  const [tags, setTags] = React.useState<Tag[]>([])
  const [query, setQuery] = React.useState<string>('')
  const [article, setArticle] = React.useState<ArticleRequiredFields>({
    title: '',
    headline: '',
    content: '',
    is_pinned: false,
    photo: undefined,
    tags: [],
  })

  // Fetch tags
  React.useEffect(() => {
    ;(async () => {
      const cookie = await getAuthToken()

      await API.tags.list(
        cookie,
        (data: Response<Tag>) => setTags(data.results),
        (error) => console.log(error),
      )
    })()
  }, [])

  const handleCreate = async () => {
    const cookie = await getAuthToken()

    await API.articles.create(
      cookie,
      article,
      (data) => router.push(`${data.id}`),
      (error) => console.error(error),
    )
  }

  return (
    <article className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
      <div className="absolute inset-0 -z-10 -mx-40 -mb-96 -mt-20 backdrop-blur-3xl backdrop-filter lg:-mt-40"></div>

      <div className="absolute right-8 top-8 -z-20 h-96 w-96 rotate-45 rounded-3xl bg-gradient-to-tr from-amber-500 to-rose-500"></div>
      <div className="absolute left-1/2 top-1/2 -z-20 h-[30rem] w-[30rem] rotate-45 rounded-full bg-gradient-to-t from-green-400 to-fuchsia-400"></div>
      <div className="absolute bottom-8 left-8 -z-20 h-64 w-64 rotate-45 bg-gradient-to-bl from-teal-400 to-sky-500"></div>

      <div className="mx-auto max-w-2xl lg:max-w-none">
        <header className="mx-auto flex max-w-5xl flex-col space-y-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Create new{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-extrabold tracking-widest text-transparent">
                Article
              </span>
            </h1>

            <div className="mt-6 max-w-3xl text-xl text-neutral-600">
              <p>
                Share Your Knowledge and Insights. Here, you can share your
                expertise, experiences, and ideas with the community.{' '}
              </p>
            </div>
          </div>

          <Input
            label="Article title"
            value={article.title}
            className="font-display"
            description="Enter a compelling title for your article."
            onChange={(event) =>
              setArticle({ ...article, title: event.target.value })
            }
          />

          <Input
            label="Article headline"
            value={article.headline}
            className="font-display"
            description="Enter a compelling headline for your article."
            onChange={(event) =>
              setArticle({ ...article, headline: event.target.value })
            }
          />

          <Switch
            label="Pin the article"
            checked={article.is_pinned}
            description="Designates if the article is pinned."
            onChange={() =>
              setArticle({ ...article, is_pinned: !article.is_pinned })
            }
          />

          <div className="grid gap-4">
            <Combobox
              label="Tags"
              description="Add relevant tags to your article to help others find it."
              query={query}
              onChangeQuery={(q) => setQuery(q)}
              disabled={!tags || tags.length === 0}
              onChange={(value) =>
                setArticle({
                  ...article,
                  tags: [...article.tags, parseInt(`${value}`)] as number[],
                })
              }
              options={
                tags
                  ? tags.length !== 0
                    ? [
                        ...tags.map((t) => ({
                          key: t.name,
                          value: t.id,
                        })),
                      ]
                    : [{ key: 'No tags selected', value: 0 }]
                  : [{ key: 'No tags found', value: 0 }]
              }
            />

            <div className="flex items-center gap-4">
              {article.tags.map((tag) => (
                <div
                  key={tag as number}
                  className="flex items-center gap-4 rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-neutral-50 transition hover:bg-neutral-800"
                >
                  <Link href={`/tags/${tag}`}>
                    <span>{tags.filter((t) => t.id == tag)[0]?.name}</span>
                  </Link>

                  <button
                    onClick={() =>
                      setArticle({
                        ...article,
                        tags: [
                          ...article.tags.filter((t) => t !== tag),
                        ] as number[],
                      })
                    }
                    className="flex items-center justify-center rounded-full bg-white text-neutral-950 transition hover:bg-neutral-100"
                  >
                    <XMarkIcon className="size-6 fill-neutral-950" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-24 space-y-8 sm:mt-32 lg:mt-40 [&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0">
          <Editor
            content={article.content}
            onUpdate={({ editor }) =>
              setArticle({ ...article, content: editor.getHTML() })
            }
          />
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Button variant="primary" onClick={async () => await handleCreate()}>
            Publish
          </Button>
        </div>
      </div>
    </article>
  )
}

export default Page
