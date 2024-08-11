'use client'

import React from 'react'

const Page = () => (
  <>
    <div className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 md:mt-56 lg:px-8">
      <div className="absolute inset-0 -z-10 -mx-40 -mb-80 -mt-20 backdrop-blur-3xl backdrop-filter lg:-mt-60"></div>

      <div className="absolute right-8 top-8 -z-20 h-96 w-96 rotate-45 rounded-3xl bg-gradient-to-tr from-cyan-400 to-purple-500"></div>
      <div className="absolute bottom-8 left-8 -z-20 h-64 w-64 rotate-45 bg-gradient-to-bl from-sky-400 to-fuchsia-500"></div>

      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-extrabold tracking-widest text-transparent">
              CodeConnect
            </span>{' '}
            Empowering Developers to Learn, Share, and Grow Together with{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-extrabold tracking-widest text-transparent">
              AI
            </span>
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At CodeConnect, we believe in the power of community-driven
            learning, enhanced by cutting-edge AI technology. Whether you are a
            seasoned developer or just starting your coding journey our platform
            is designed to help you.
          </p>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="max-w-2xl">
          <h2>
            <span className="block font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
              Join CodeConnect
            </span>
          </h2>
          <div className="mt-6 text-xl text-neutral-600">
            <p>
              Join CodeConnect today and be part of a vibrant community where
              learning never stops, powered by the latest in AI technology!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3>
                <a href="/work/family-fund">
                  <span className="absolute inset-0 rounded-3xl"></span>
                  <div className="h-20 w-20 rounded-xl bg-neutral-950"></div>
                </a>
              </h3>
              <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                <time dateTime="2023" className="font-semibold">
                  2023
                </time>
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
                <span>Case study</span>
              </p>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Skip the bank, borrow from those you trust
              </p>
              <p className="mt-4 text-base text-neutral-600">
                FamilyFund is a crowdfunding platform for friends and family.
                Allowing users to take personal loans from their network without
                a traditional financial institution.
              </p>
            </article>
          </div>
          <div className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3>
                <a href="/work/unseal">
                  <span className="absolute inset-0 rounded-3xl"></span>
                  <div className="h-20 w-20 rounded-xl bg-neutral-950"></div>
                </a>
              </h3>
              <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                <time dateTime="2022" className="font-semibold">
                  2022
                </time>
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
                <span>Case study</span>
              </p>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Get a hodl of your health
              </p>
              <p className="mt-4 text-base text-neutral-600">
                Unseal is the first NFT platform where users can mint and trade
                NFTs of their own personal health records, allowing them to take
                control of their data.
              </p>
            </article>
          </div>
          <div className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3>
                <a href="/work/phobia">
                  <span className="absolute inset-0 rounded-3xl"></span>
                  <div className="h-20 w-20 rounded-xl bg-neutral-950"></div>
                </a>
              </h3>
              <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                <time dateTime="2022" className="font-semibold">
                  2022
                </time>
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
                <span>Case study</span>
              </p>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Overcome your fears, find your match
              </p>
              <p className="mt-4 text-base text-neutral-600">
                Find love in the face of fear — Phobia is a dating app that
                matches users based on their mutual phobias so they can be
                scared together.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="max-w-2xl">
          <h2>
            <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
              Services
            </span>
            <span className="sr-only"> - </span>
            <span className="block font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
              We help you identify, explore and respond to new opportunities.
            </span>
          </h2>
          <div className="mt-6 text-xl text-neutral-600">
            <p>
              As long as those opportunities involve giving us money to
              re-purpose old projects — we can come up with an endless number of
              those.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <div className="w-[33.75rem] flex-none lg:w-[45rem]">
              <div className="relative flex aspect-[719/680] w-full justify-center grayscale lg:justify-end">
                <svg viewBox="0 0 655 680" fill="none" className="h-full">
                  <g clipPath="url(#:S1:-clip)" className="group">
                    <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                      <foreignObject width="655" height="680">
                        <div className="h-20 w-20 rounded-xl bg-neutral-950"></div>
                      </foreignObject>
                    </g>
                    <use
                      href="#:S1:-shape"
                      strokeWidth="2"
                      className="stroke-neutral-950/10"
                    ></use>
                  </g>
                  <defs>
                    <clipPath id=":S1:-clip">
                      <path
                        id=":S1:-shape"
                        d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <ul
              role="list"
              className="mt-16 text-base text-neutral-600 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4"
            >
              <li className="group mt-10 first:mt-0">
                <div>
                  <div className="relative pt-10 before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-neutral-950 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-neutral-950/10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
                    <strong className="font-semibold text-neutral-950">
                      Ask Questions.{' '}
                    </strong>
                    Stuck on a problem? Post your questions and get answers from
                    experienced developers around the world, with AI-powered
                    suggestions to help you find solutions faster.
                  </div>
                </div>
              </li>
              <li className="group mt-10 first:mt-0">
                <div>
                  <div className="relative pt-10 before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-neutral-950 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-neutral-950/10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
                    <strong className="font-semibold text-neutral-950">
                      Share Knowledge.{' '}
                    </strong>
                    Contribute to the community by sharing your expertise and
                    helping others solve their coding challenges, with AI tools
                    that enhance your contributions.
                  </div>
                </div>
              </li>
              <li className="group mt-10 first:mt-0">
                <div>
                  <div className="relative pt-10 before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-neutral-950 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-neutral-950/10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
                    <strong className="font-semibold text-neutral-950">
                      Collaborate.{' '}
                    </strong>
                    Work together on projects, share code snippets, and
                    collaborate on solutions in real-time, with AI-assisted code
                    reviews and recommendations.
                  </div>
                </div>
              </li>
              <li className="group mt-10 first:mt-0">
                <div>
                  <div className="relative pt-10 before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-neutral-950 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-neutral-950/10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
                    <strong className="font-semibold text-neutral-950">
                      Learn.{' '}
                    </strong>
                    Access a vast library of tutorials, articles, and resources
                    to enhance your skills and stay updated with the latest in
                    technology, with personalized AI-driven learning paths.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Page
