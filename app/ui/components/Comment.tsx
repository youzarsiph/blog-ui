import { Comment as TComment } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Comment = (props: TComment) => {
  const dateCreated = new Date(props.created_at).toDateString()

  return (
    <div className="flex">
      <article className="relative flex w-full flex-col rounded-3xl bg-white/50 p-6 ring-1 ring-neutral-950/5 transition sm:p-8">
        <header>
          <Link
            href={`/users/${props.user.id}`}
            className="flex items-center gap-4"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-neutral-200">
              {/* <Image /> */}
            </div>

            <div className="grid gap-2">
              <h3 className="font-display font-semibold text-neutral-950">
                {props.user.first_name} {props.user.last_name}
              </h3>

              <p className="flex flex-wrap items-center gap-2 text-xs">
                <span>{props.user.article_count} articles</span>
                <span>{props.user.follower_count} followers</span>
              </p>
            </div>
          </Link>
        </header>

        <p className="mt-6 flex gap-x-2 text-xs text-neutral-950">
          <time dateTime={dateCreated} className="font-semibold">
            {dateCreated}
          </time>
          <span className="text-neutral-300" aria-hidden="true">
            /
          </span>
          <span>{props.replies.length} replies</span>
        </p>

        <main
          className="prose prose-neutral mx-auto mt-6 w-full md:prose-lg lg:prose-xl xl:prose-xl 2xl:prose-2xl"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </article>
    </div>
  )
}

export default Comment
