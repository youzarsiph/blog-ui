'use client'

import React from 'react'
import Image from 'next/image'

const Page = () => (
  <>
    <div className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
      <div className="absolute inset-0 -z-10 -mx-40 -mb-80 -mt-20 backdrop-blur-3xl backdrop-filter lg:-mt-40"></div>

      <div className="absolute right-8 top-8 -z-20 h-96 w-96 rotate-45 rounded-3xl bg-gradient-to-tr from-blue-300 to-blue-500"></div>
      <div className="absolute bottom-8 left-8 -z-20 h-64 w-64 rotate-45 bg-gradient-to-bl from-green-400 to-sky-500"></div>

      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div>
          <h1>
            <span className="block font-display text-base font-semibold text-neutral-950">
              About CodeConnect
            </span>
            <span className="sr-only"> - </span>
            <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              Our Mission
            </span>
          </h1>
          <div className="mt-6 max-w-3xl text-xl text-neutral-600">
            <p>
              At CodeConnect, our mission is to empower developers of all levels
              to learn, share, and grow together. We believe that by fostering a
              collaborative and supportive community, we can help individuals
              achieve their full potential and drive innovation in the tech
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-24 rounded-[2.5rem] bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl">
            <h2>
              <span className="mb-6 block font-display text-base font-semibold text-neutral-50">
                What We Offer
              </span>
            </h2>
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
                      Community-Driven Learning.
                    </strong>{' '}
                    Our platform is built on the foundation of community-driven
                    learning. Users can ask questions, share knowledge, and
                    collaborate on projects, creating a rich and dynamic
                    learning environment.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                <div>
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-white after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-white/10">
                    <strong className="font-semibold text-neutral-50">
                      AI Integration.
                    </strong>{' '}
                    Leveraging the latest in AI technology, CodeConnect offers
                    AI-powered suggestions, personalized learning paths, and
                    AI-assisted code reviews to enhance the learning experience
                    and make problem-solving more efficient.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                <div>
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-white after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-white/10">
                    <strong className="font-semibold text-neutral-50">
                      Extensive Resources.
                    </strong>
                    Access a vast library of tutorials, articles, and resources
                    curated by experts in the field. Stay updated with the
                    latest trends and technologies to keep your skills sharp.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                <div>
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-6 before:w-px before:bg-white after:absolute after:bottom-0 after:left-0 after:top-8 after:w-px after:bg-white/10">
                    <strong className="font-semibold text-neutral-50">
                      Networking Opportunities.
                    </strong>
                    Connect with like-minded individuals, follow your favorite
                    contributors, and build your professional profile. Our
                    AI-powered networking suggestions help you find and connect
                    with peers and mentors who can support your growth.
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
        <div>
          <h2 className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            Our Vision
          </h2>
          <div className="mt-6 max-w-3xl text-xl text-neutral-600">
            <p>
              We envision a world where developers from all backgrounds can come
              together to learn, share, and innovate. By providing a platform
              that combines the power of community with advanced AI technology,
              we aim to create an inclusive and supportive environment where
              everyone can thrive.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="relative mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
      <div className="absolute inset-0 -z-10 -mx-40 -mb-80 -mt-20 backdrop-blur-3xl backdrop-filter lg:-mt-40"></div>

      <div className="absolute bottom-8 left-8 -z-20 h-96 w-96 rotate-45 rounded-3xl bg-gradient-to-tr from-yellow-300 to-orange-500"></div>
      <div className="absolute right-8 top-8 -z-20 h-64 w-64 rotate-45 bg-gradient-to-bl from-purple-400 to-sky-500"></div>

      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="space-y-24">
          <div>
            <div className="relative before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-neutral-950 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-neutral-950/10"></div>
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Meet us
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
                        <Image
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src="/About Us - Studio_files/leslie-alexander.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Yousuf Abu Shanab
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
                        <Image
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src="/About Us - Studio_files/michael-foster.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Yamen Allaf
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
                        <Image
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src="/About Us - Studio_files/dries-vincent.jpg"
                          style={{ color: 'transparent' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-50">
                            Dr. Raed Jabery
                          </p>
                          <p className="mt-2 text-sm text-neutral-50">
                            Partner &amp; Supervisor
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

    <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div>
          <h2 className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            Join Us
          </h2>
          <div className="mt-6 max-w-3xl text-xl text-neutral-600">
            <p>
              Whether you are a seasoned developer or just starting your coding
              journey, CodeConnect is here to support you every step of the way.
              Join our community today and be part of a vibrant network of
              learners and innovators.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Page
