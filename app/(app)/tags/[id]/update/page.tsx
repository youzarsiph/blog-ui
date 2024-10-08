'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { getAuthToken } from '@/app/actions'
import { Tag } from '@/app/types'
import { API } from '@/app/utils'
import { Button, Input } from '@/app/ui'

const Page = ({ params }: { params: { id: number } }) => {
  const router = useRouter()
  const [tag, setTag] = React.useState<Tag>()

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

  const handleUpdate = async () => {
    const cookie = await getAuthToken()

    if (tag) {
      await API.tags.update(
        cookie,
        tag.id,
        tag,
        (data) => router.push(`/tags/${data.id}`),
        (error) => console.error(error),
      )
    }
  }

  return tag !== undefined ? (
    <>
      <article className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
        <div className="absolute right-8 top-8 -z-20 h-96 w-96 rotate-45 rounded-3xl bg-gradient-to-tr from-amber-500 to-rose-500 blur-3xl filter"></div>
        <div className="absolute bottom-8 left-8 -z-20 h-64 w-64 rotate-45 bg-gradient-to-bl from-teal-400 to-sky-500 blur-3xl filter"></div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <header className="mx-auto flex max-w-5xl flex-col space-y-6">
            <div className="max-w-3xl">
              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                Update tag{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-extrabold tracking-widest text-transparent">
                  {tag.name}
                </span>
              </h1>

              <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                <p>
                  Organize and Discover Content with Tags. Tags help categorize
                  and organize content on our platform, making it easier for
                  users to find articles and discussions related to specific
                  topics. Follow the steps below to create a new tag.
                </p>
              </div>
            </div>

            <Input
              type="text"
              label="Tag name"
              value={tag.name}
              className="font-display"
              description="Enter a unique and descriptive name for your tag."
              onChange={(event) => setTag({ ...tag, name: event.target.value })}
            />

            <Input
              type="color"
              label="Tag color"
              value={tag.color}
              description="Enter a unique color for your tag (hexadecimal)."
              onChange={(event) =>
                setTag({ ...tag, color: event.target.value })
              }
            />

            <Input
              type="text"
              label="Tag description"
              value={tag.description}
              description="Provide a brief description of the tag. This will help users understand the purpose and relevance of the tag."
              onChange={(event) =>
                setTag({ ...tag, description: event.target.value })
              }
            />

            <Button
              variant="primary"
              onClick={async () => await handleUpdate()}
            >
              Save
            </Button>
          </header>
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
