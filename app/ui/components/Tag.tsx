import { Tag as TTag } from '@/app/types'
import Link from 'next/link'

const Tag = (props: TTag) => {
  const dateCreated = new Date(props.created_at).toDateString()

  return (
    <div className="flex">
      <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
        <h3>
          <Link href={`/tags/${props.id}`}>
            <span className="absolute inset-0 rounded-3xl"></span>
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-neutral-950">
              <span className="font-display text-3xl text-neutral-50">
                # {props.id}
              </span>
            </div>
          </Link>
        </h3>
        <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
          <time dateTime={dateCreated} className="font-semibold">
            {dateCreated}
          </time>
          <span className="text-neutral-300" aria-hidden="true">
            /
          </span>
          <span>{props.article_count} articles</span>
        </p>
        <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
          {props.name}
        </p>
        <p className="mt-4 text-base text-neutral-600">{props.description}</p>
      </article>
    </div>
  )
}

export default Tag
