'use client'

import React from 'react'
import { ArticleRequiredFields, Response, Tag } from '@/app/types'
import { Combobox, Editor, Input, Switch } from '@/app/ui/components'
import { API } from '@/app/utils'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const [tags, setTags] = React.useState<Tag[]>([])
  const [query, setQuery] = React.useState<string>('')
  const [article, setArticle] = React.useState<ArticleRequiredFields>({
    title: 'Article title',
    headline: 'Article headline',
    content: 'Article content',
    is_pinned: false,
    photo: undefined,
    tags: [],
  })

  // Fetch tags
  React.useEffect(() => {
    ;(async () =>
      await API.tags.list(
        (data: Response<Tag>) => setTags(data.results),
        (error) => console.log(error),
      ))()
  }, [])

  return (
    <>
      <article className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <header className="mx-auto flex max-w-5xl flex-col space-y-6">
              <Input
                className="font-display"
                label="Article title"
                description="Article title input description"
                value={article.title}
                onChange={(event) =>
                  setArticle({ ...article, title: event.target.value })
                }
              />

              <Input
                className="font-display"
                label="Article headline"
                description="Article headline description"
                value={article.headline}
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
                  description="Add tags to your article"
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
                        : [{ key: 'No tags found', value: 0 }]
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
          </div>

          <div>
            <div className="mt-24 space-y-8 sm:mt-32 lg:mt-40 [&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0">
              <Editor
                content={article.content}
                onChange={(content) =>
                  setArticle({ ...article, content: content })
                }
              />

              <button
                onClick={async () =>
                  await API.articles.create(
                    article,
                    (data) => router.push(`${data.id}`),
                    (error) => console.error(error),
                  )
                }
                className="mt-10 flex rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-neutral-50 transition hover:bg-neutral-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Page
