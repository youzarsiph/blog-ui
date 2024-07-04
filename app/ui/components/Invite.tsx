import Link from 'next/link'
import React from 'react'

const Info = () => (
  <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div
        className="-mx-6 rounded-[2.5rem] bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12"
        style={{
          transform: 'translateY(24px) translateZ(0px)',
        }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-neutral-50 [text-wrap:balance] sm:text-4xl">
              Join us to begin your exploration.
            </h2>
            <div className="mt-6 flex">
              <Link
                className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                href="/contact"
              >
                <span className="relative top-px">Say Hello</span>
              </Link>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-neutral-50">
                Platform
              </h3>
              <ul
                role="list"
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              >
                <li>
                  <Link
                    className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                    href="/login"
                  >
                    <span className="relative top-px">Login</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                    href="/signup"
                  >
                    <span className="relative top-px">Sign up</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Info
