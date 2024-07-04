'use client'

import React from 'react'
import { Invite } from '@/app/ui/components'

const Page = () => (
  <>
    <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div>
          <h1>
            <span className="block font-display text-base font-semibold text-neutral-950">
              About us
            </span>
            <span className="sr-only"> - </span>
            <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              Our strength is collaboration
            </span>
          </h1>
          <div className="mt-6 max-w-3xl text-xl text-neutral-600">
            <p>
              We believe that our strength lies in our collaborative approach,
              which puts our clients at the center of everything we do.
            </p>
            <div className="mt-10 max-w-2xl space-y-6 text-base">
              <p>
                Studio was started by three friends who noticed that developer
                studios were charging clients double what an in-house team would
                cost. Since the beginning, we have been committed to doing
                things differently by charging triple instead.
              </p>
              <p>
                At Studio, we’re more than just colleagues — we’re a family.
                This means we pay very little and expect people to work late. We
                want our employees to bring their whole selves to work. In
                return, we just ask that they keep themselves there until at
                least 6:30pm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div>
          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
            <div className="relative flex flex-col-reverse pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-neutral-950 after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-neutral-950/10">
              <dt className="mt-2 text-base text-neutral-600">
                Underpaid employees
              </dt>
              <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
                35
              </dd>
            </div>
            <div className="relative flex flex-col-reverse pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-neutral-950 after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-neutral-950/10">
              <dt className="mt-2 text-base text-neutral-600">
                Placated clients
              </dt>
              <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
                52
              </dd>
            </div>
            <div className="relative flex flex-col-reverse pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-neutral-950 after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-neutral-950/10">
              <dt className="mt-2 text-base text-neutral-600">
                Invoices billed
              </dt>
              <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
                $25M
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div className="mt-24 rounded-[2.5rem] bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl">
            <h2>
              <span className="mb-6 block font-display text-base font-semibold text-neutral-50">
                Our culture
              </span>
              <span className="sr-only"> - </span>
              <span className="block font-display text-4xl font-medium tracking-tight text-neutral-50 [text-wrap:balance] sm:text-5xl">
                Balance your passion with your passion for life.
              </span>
            </h2>
            <div className="mt-6 text-xl text-neutral-300">
              <p>
                We are a group of like-minded people who share the same core
                values.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <ul
              role="list"
              className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                <div>
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-white after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-white/10">
                    <strong className="font-semibold text-neutral-50">
                      Loyalty.
                    </strong>{' '}
                    Our team has been with us since the beginning because none
                    of them are allowed to have LinkedIn profiles.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                <div>
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-white after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-white/10">
                    <strong className="font-semibold text-neutral-50">
                      Trust.
                    </strong>{' '}
                    We don’t care when our team works just as long as they are
                    working every waking second.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                <div>
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-white after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-white/10">
                    <strong className="font-semibold text-neutral-50">
                      Compassion.
                    </strong>
                    You never know what someone is going through at home and we
                    make sure to never find out.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="space-y-24">
          <div>
            <div className="relative before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-neutral-950 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-neutral-950/10"></div>
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Leadership
                </h2>
              </div>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  <li>
                    <div>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          srcSet="
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpg&amp;w=1920&amp;q=75 1x,
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpg&amp;w=3840&amp;q=75 2x
                        "
                          src="./About Us - Studio_files/leslie-alexander.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Leslie Alexander
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            Co-Founder / CEO
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          srcSet="
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmichael-foster.00319162.jpg&amp;w=1920&amp;q=75 1x,
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmichael-foster.00319162.jpg&amp;w=3840&amp;q=75 2x
                        "
                          src="./About Us - Studio_files/michael-foster.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Michael Foster
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            Co-Founder / CTO
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          srcSet="
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdries-vincent.5cac3ed5.jpg&amp;w=1920&amp;q=75 1x,
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdries-vincent.5cac3ed5.jpg&amp;w=3840&amp;q=75 2x
                        "
                          src="./About Us - Studio_files/dries-vincent.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Dries Vincent
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            Partner &amp; Business Relations
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="relative before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-neutral-950 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-neutral-950/10"></div>
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Team
                </h2>
              </div>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  <li>
                    <div>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          srcSet="
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchelsea-hagon.073aa8f2.jpg&amp;w=1920&amp;q=75 1x,
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchelsea-hagon.073aa8f2.jpg&amp;w=3840&amp;q=75 2x
                        "
                          src="./About Us - Studio_files/chelsea-hagon.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Chelsea Hagon
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            Senior Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          srcSet="
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femma-dorsey.4fab86fa.jpg&amp;w=1920&amp;q=75 1x,
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femma-dorsey.4fab86fa.jpg&amp;w=3840&amp;q=75 2x
                        "
                          src="./About Us - Studio_files/emma-dorsey.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Emma Dorsey
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            Senior Designer
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          srcSet="
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleonard-krasner.5a4a4614.jpg&amp;w=1920&amp;q=75 1x,
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleonard-krasner.5a4a4614.jpg&amp;w=3840&amp;q=75 2x
                        "
                          src="./About Us - Studio_files/leonard-krasner.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Leonard Krasner
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            VP, User Experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          srcSet="
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblake-reid.bcc5ac4f.jpg&amp;w=1920&amp;q=75 1x,
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblake-reid.bcc5ac4f.jpg&amp;w=3840&amp;q=75 2x
                        "
                          src="./About Us - Studio_files/blake-reid.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Blake Reid
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            Junior Copywriter
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          srcSet="
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkathryn-murphy.550962fd.jpg&amp;w=1920&amp;q=75 1x,
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkathryn-murphy.550962fd.jpg&amp;w=3840&amp;q=75 2x
                        "
                          src="./About Us - Studio_files/kathryn-murphy.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Kathryn Murphy
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            VP, Human Resources
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          srcSet="
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhitney-francis.ced7480b.jpg&amp;w=1920&amp;q=75 1x,
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhitney-francis.ced7480b.jpg&amp;w=3840&amp;q=75 2x
                        "
                          src="./About Us - Studio_files/whitney-francis.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Whitney Francis
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            Content Specialist
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          srcSet="
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjeffrey-webb.a90fe9d1.jpg&amp;w=1920&amp;q=75 1x,
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjeffrey-webb.a90fe9d1.jpg&amp;w=3840&amp;q=75 2x
                        "
                          src="./About Us - Studio_files/jeffrey-webb.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Jeffrey Webb
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            Account Coordinator
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          srcSet="
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenjamin-russel.da51eb4b.jpg&amp;w=1920&amp;q=75 1x,
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenjamin-russel.da51eb4b.jpg&amp;w=3840&amp;q=75 2x
                        "
                          src="./About Us - Studio_files/benjamin-russel.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Benjamin Russel
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            Senior Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          srcSet="
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fangela-fisher.f2122cd4.jpg&amp;w=1920&amp;q=75 1x,
                          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fangela-fisher.f2122cd4.jpg&amp;w=3840&amp;q=75 2x
                        "
                          src="./About Us - Studio_files/angela-fisher.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Angela Fisher
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            Front-end Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="rounded-t-4xl absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden bg-gradient-to-b from-neutral-50">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
        >
          <rect
            width="100%"
            height="100%"
            fill="url(#:r2k:)"
            strokeWidth="0"
          ></rect>
          <svg x="50%" y="-270" strokeWidth="0" className="overflow-visible">
            <path
              transform="translate(64 160)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            ></path>
            <path
              transform="translate(128 320)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            ></path>
            <path
              transform="translate(288 480)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            ></path>
            <path
              transform="translate(512 320)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            ></path>
            <path
              transform="translate(544 640)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            ></path>
            <path
              transform="translate(320 800)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            ></path>
          </svg>
          <defs>
            <pattern
              id=":r2k:"
              width="96"
              height="480"
              x="50%"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(0 -270)"
              fill="none"
            >
              <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
            </pattern>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl">
            <h2>
              <span className="block font-display text-2xl font-semibold tracking-tight text-neutral-950 [text-wrap:balance]">
                From the blog
              </span>
            </h2>
            <div className="mt-6 text-xl text-neutral-600">
              <p>
                Our team of experienced designers and developers has just one
                thing on their mind; working on your ideas to draw a smile on
                the face of your users worldwide. From conducting Brand Sprints
                to UX Design.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <article>
                <div className="relative flex flex-col items-start pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-neutral-950 after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-neutral-950/10">
                  <h3 className="mt-6 text-base font-semibold text-neutral-950">
                    The Future of Web Development: Our Predictions for 2023
                  </h3>
                  <time
                    dateTime="2023-04-06"
                    className="order-first text-sm text-neutral-600"
                  >
                    April 6, 2023
                  </time>
                  <p className="mt-2.5 text-base text-neutral-600">
                    Let’s explore the latest trends in web development, and
                    regurgitate some predictions we read on X for how they will
                    shape the industry in the coming year.
                  </p>
                  <a
                    className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                    aria-label="Read more: The Future of Web Development: Our Predictions for 2023"
                    href="https://studio.tailwindui.com/blog/future-of-web-development"
                  >
                    Read more
                    <svg
                      viewBox="0 0 24 6"
                      aria-hidden="true"
                      className="w-6 flex-none fill-current"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
                      ></path>
                    </svg>
                    <span className="absolute inset-0"></span>
                  </a>
                </div>
              </article>
            </div>
            <div>
              <article>
                <div className="relative flex flex-col items-start pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-neutral-950 after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-neutral-950/10">
                  <h3 className="mt-6 text-base font-semibold text-neutral-950">
                    3 Lessons We Learned Going Back to the Office
                  </h3>
                  <time
                    dateTime="2023-02-18"
                    className="order-first text-sm text-neutral-600"
                  >
                    February 18, 2023
                  </time>
                  <p className="mt-2.5 text-base text-neutral-600">
                    Earlier this year we made the bold decision to make everyone
                    come back to the office full-time after two years working
                    from a dressing table in the corner of their bedroom.
                  </p>
                  <a
                    className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                    aria-label="Read more: 3 Lessons We Learned Going Back to the Office"
                    href="https://studio.tailwindui.com/blog/3-lessons-we-learned-going-back-to-the-office"
                  >
                    Read more
                    <svg
                      viewBox="0 0 24 6"
                      aria-hidden="true"
                      className="w-6 flex-none fill-current"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
                      ></path>
                    </svg>
                    <span className="absolute inset-0"></span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Invite />
  </>
)

export default Page
