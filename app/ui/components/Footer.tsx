'use client'

import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

const Footer = () => (
  <footer className="mx-auto mt-24 w-full max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="translate-y-6" style={{ transform: 'translateZ(0px)' }}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <nav>
            <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <li>
                <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                  Quick Links
                </div>
                <ul role="list" className="mt-4 text-sm text-neutral-700">
                  <li className="mt-4">
                    <Link
                      className="transition hover:text-neutral-950"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="mt-4">
                    <Link
                      className="transition hover:text-neutral-950"
                      href="/articles"
                    >
                      Articles
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      className="transition hover:text-neutral-950"
                      href="/tags"
                    >
                      Tags
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      className="transition hover:text-neutral-950"
                      href="/profile"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                  Company
                </div>
                <ul role="list" className="mt-4 text-sm text-neutral-700">
                  <li className="mt-4">
                    <Link
                      className="transition hover:text-neutral-950"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      className="transition hover:text-neutral-950"
                      href="/articles?user=1"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      className="transition hover:text-neutral-950"
                      href="/contact"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                  Connect
                </div>
                <ul role="list" className="mt-4 text-sm text-neutral-700">
                  <li className="mt-4">
                    <a
                      className="transition hover:text-neutral-950"
                      href="https://hugginface.co/youzarsiph"
                    >
                      HuggingFace
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      className="transition hover:text-neutral-950"
                      href="https://linkedin.com/in/youzarsiph"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      className="transition hover:text-neutral-950"
                      href="https://github.com/youzarsiph"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="flex lg:justify-end">
            <form className="max-w-sm">
              <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                Sign up for our newsletter
              </h2>
              <p className="mt-4 text-sm text-neutral-700">
                Subscribe to get the latest news, articles, resources and
                inspiration.
              </p>
              <div className="relative mt-6">
                <input
                  placeholder="Email address"
                  autoComplete="email"
                  aria-label="Email address"
                  className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                  type="email"
                />
                <div className="absolute inset-y-1 right-1 flex justify-end">
                  <button
                    type="submit"
                    aria-label="Submit"
                    className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-neutral-50 transition hover:bg-neutral-800"
                  >
                    <ArrowLongRightIcon className="size-6 fill-neutral-50" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link
            aria-label="Home"
            className="font-display text-xl font-bold"
            href="/"
          >
            CodeConnect
          </Link>

          <p className="text-sm text-neutral-700">© CodeConnect. 2024</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
