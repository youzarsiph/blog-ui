'use client'

import React from 'react'

const Page = () => (
  <>
    <div className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 md:mt-56 lg:px-8">
      <div className="absolute right-8 top-8 -z-20 h-96 w-96 rotate-45 rounded-3xl bg-gradient-to-tr from-cyan-400 to-purple-500 blur-3xl filter"></div>
      <div className="absolute bottom-8 left-8 -z-20 h-64 w-64 rotate-45 bg-gradient-to-bl from-sky-400 to-fuchsia-500 blur-3xl filter"></div>

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

    <div className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
      <div className="absolute bottom-8 left-8 -z-20 h-96 w-96 rotate-45 rounded-3xl bg-gradient-to-tr from-fuchsia-500 to-purple-500 blur-3xl filter"></div>
      <div className="absolute right-8 top-8 -z-20 h-64 w-64 rotate-45 bg-gradient-to-bl from-sky-400 to-green-500 blur-3xl filter"></div>

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
        </div>
      </div>
    </div>

    <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="lg:flex lg:items-center lg:justify-end">
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
