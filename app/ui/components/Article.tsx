'use client'

import { Article as TArticle, User } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { ChevronDoubleRightIcon, StarIcon } from '@heroicons/react/24/solid'
import { API } from '@/app/utils'

const Article = (props: TArticle) => {
  const dateCreated = new Date(props.created_at).toDateString()

  return (
    <article>
      <div className="relative pt-16 before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-neutral-950 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-neutral-950/10">
        <div className="relative lg:-mx-4 lg:flex lg:justify-end">
          <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              <Link href={`/articles/${props.id}`}>{props.title}</Link>
            </h2>

            <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
              <dt className="sr-only">Published</dt>
              <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                <time dateTime={dateCreated}>{dateCreated}</time>
              </dd>
              <dt className="sr-only">Author</dt>
              <dd className="mt-6 flex gap-x-4">
                <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                  <div className="h-16 w-16 object-cover"></div>
                  {/* <Image
                      alt=""
                      loading="lazy"
                      width="1800"
                      height="1800"
                      decoding="async"
                      data-nimg="1"
                      className="h-12 w-12 object-cover grayscale"
                      src={props.photo}
                      style={{ color: 'transparent' }}
                    /> */}
                </div>
                <div className="grid gap-2 py-2 text-sm text-neutral-950">
                  <div className="font-semibold">
                    {props.user.first_name} {props.user.last_name}
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span>{props.user.article_count} articles</span>
                    <span>{props.user.follower_count} followers</span>
                  </div>
                </div>
              </dd>
            </dl>

            <p className="mt-6 max-w-2xl text-base text-neutral-600">
              {props.headline}
            </p>

            <div className="mt-6 flex items-center gap-4 text-sm">
              <span>{props.reaction_count} reactions</span>
              <span>{props.comment_count} comments</span>
              <span>{props.tag_count} tags</span>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Button variant="primary">
                <Link
                  href={`/articles/${props.id}`}
                  className="flex items-center gap-4"
                  aria-label={'Read more: ' + props.title}
                >
                  <span className="relative top-px">Read more</span>
                  <ChevronDoubleRightIcon className="size-6 fill-neutral-50" />
                </Link>
              </Button>

              <Button
                variant="secondary"
                aria-label="Mark starred"
                onClick={() =>
                  API.articles.star(
                    props.id,
                    (data) => console.log(data),
                    (error) => console.error(error),
                  )
                }
              >
                <StarIcon className="size-6 fill-neutral-950" />
                <span>{props.stars} stars</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Article
