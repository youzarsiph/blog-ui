'use client'

import clsx from 'clsx'
import React from 'react'
import { useRouter } from 'next/navigation'
import { getAuthToken } from '@/app/actions'
import { Article, Response, Tag } from '@/app/types'
import { Button, Combobox, Editor, Input, Switch } from '@/app/ui'
import { API } from '@/app/utils'
import { XMarkIcon } from '@heroicons/react/24/solid'

const Page = ({ params }: { params: { id: number } }) => {
  const router = useRouter()
  const [tags, setTags] = React.useState<Tag[]>([])
  const [query, setQuery] = React.useState<string>('')
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

  const handleUpdate = async () => {
    const cookie = await getAuthToken()

    if (article) {
      await API.articles.update(
        cookie,
        article.id,
        article,
        (data) => router.push(`/articles/${data.id}`),
        (error) => console.error(error),
      )
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
                    Update article{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-extrabold tracking-widest text-transparent">
                      {article.title}
                    </span>
                  </h1>

                  <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                    <p>
                      Share Your Knowledge and Insights. Here, you can share
                      your expertise, experiences, and ideas with the community.
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
                        tags: [
                          ...article.tags,
                          parseInt(`${value}`),
                        ] as number[],
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
                        <span>{tags.filter((t) => t.id == tag)[0]?.name}</span>

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
                <Button
                  variant="primary"
                  onClick={async () => await handleUpdate()}
                >
                  Save changes
                </Button>
              </div>
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
