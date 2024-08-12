import React from 'react'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <>
    <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div>
          <h1>
            <span className="block font-display text-base font-semibold text-neutral-950">
              Join us
            </span>
            <span className="sr-only"> - </span>
            <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              Login or Sign up to see the newest articles
            </span>
          </h1>
          <div className="mt-6 max-w-3xl text-xl text-neutral-600">
            <p>We can not wait to see from you.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
      <div className="absolute inset-0 -z-10 -mx-40 -mb-80 -mt-20 backdrop-blur-3xl backdrop-filter lg:-mt-40"></div>

      <div className="absolute bottom-8 left-8 -z-20 h-96 w-96 rotate-45 rounded-3xl bg-gradient-to-tr from-red-300 to-orange-500"></div>
      <div className="absolute right-8 top-8 -z-20 h-64 w-64 rotate-45 bg-gradient-to-bl from-violet-400 to-indigo-500"></div>

      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="flex items-center justify-center gap-x-8 gap-y-24">
          <div className="lg:order-last">{children}</div>
        </div>
      </div>
    </div>
  </>
)

export default Layout
