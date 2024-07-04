'use client'

import React from 'react'

const Page = () => (
  <form>
    <h2 className="font-display text-base font-semibold text-neutral-950">
      Sign up
    </h2>
    <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
          id=":S1:"
          autoComplete="name"
          placeholder=" "
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
          type="text"
          name="name"
        />
        <label
          htmlFor=":S1:"
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          Name
        </label>
      </div>
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
          id=":S2:"
          autoComplete="email"
          placeholder=" "
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
          type="email"
          name="email"
        />
        <label
          htmlFor=":S2:"
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          Email
        </label>
      </div>
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
          id=":S3:"
          autoComplete="organization"
          placeholder=" "
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
          type="text"
          name="company"
        />
        <label
          htmlFor=":S3:"
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          Company
        </label>
      </div>
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
          id=":S4:"
          autoComplete="tel"
          placeholder=" "
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
          type="tel"
          name="phone"
        />
        <label
          htmlFor=":S4:"
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          Phone
        </label>
      </div>
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
          id=":S5:"
          placeholder=" "
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
          type="text"
          name="message"
        />
        <label
          htmlFor=":S5:"
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          Message
        </label>
      </div>
      <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
        <fieldset>
          <legend className="text-base/6 text-neutral-500">Budget</legend>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <label className="flex gap-x-3">
              <input
                className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                type="radio"
                value="25"
                name="budget"
              />
              <span className="text-base/6 text-neutral-950">$25K – $50K</span>
            </label>
            <label className="flex gap-x-3">
              <input
                className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                type="radio"
                value="50"
                name="budget"
              />
              <span className="text-base/6 text-neutral-950">$50K – $100K</span>
            </label>
            <label className="flex gap-x-3">
              <input
                className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                type="radio"
                value="100"
                name="budget"
              />
              <span className="text-base/6 text-neutral-950">
                $100K – $150K
              </span>
            </label>
            <label className="flex gap-x-3">
              <input
                className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                type="radio"
                value="150"
                name="budget"
              />
              <span className="text-base/6 text-neutral-950">
                More than $150K
              </span>
            </label>
          </div>
        </fieldset>
      </div>
    </div>
    <button
      className="mt-10 inline-flex rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-neutral-50 transition hover:bg-neutral-800"
      type="submit"
    >
      <span className="relative top-px">Let’s work together</span>
    </button>
  </form>
)

export default Page
