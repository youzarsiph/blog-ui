'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { getAuthToken } from '@/app/actions'
import { Tag } from '@/app/types'
import { API } from '@/app/utils'
import { Button } from '@/app/ui'

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

  const handleDelete = async () => {
    const cookie = await getAuthToken()

    if (tag) {
      await API.tags.delete(
        cookie,
        tag.id,
        () => router.push('/tags'),
        (error) => console.error(error),
      )

      router.push('/tags')
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
                Delete tag{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-extrabold tracking-widest text-transparent">
                  {tag.name}
                </span>
              </h1>

              <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                <p>Are you sure you want to delete this tag?</p>
              </div>
            </div>

            <Button variant="danger" onClick={async () => await handleDelete()}>
              Delete
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
