import type { Metadata } from 'next'
import '@/app/ui/styles/globals.css'
import { Footer, Header } from '@/app/ui'
import { Fonts } from '@/app/ui'

export const metadata: Metadata = {
  title: 'CodeConnect',
  description:
    'Empowering Developers to Learn, Share, and Grow Together with AI',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html
    lang="en"
    className={`h-full bg-neutral-950 text-base antialiased ${Fonts.sans.variable} ${Fonts.display.variable} ${Fonts.code.variable}`}
  >
    <body className="flex min-h-full flex-col">
      <Header />

      <div className="relative flex flex-auto transform-none overflow-hidden rounded-t-[40px] bg-white pt-14">
        <div className="relative isolate flex w-full transform-none flex-col pt-9">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 -top-14 -z-[10] h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          >
            <rect
              width="100%"
              height="100%"
              fill="url(#:r14:)"
              strokeWidth="0"
            ></rect>
            <svg x="50%" y="-96" strokeWidth="0" className="overflow-visible">
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
                id=":r14:"
                width="96"
                height="480"
                x="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(0 -96)"
                fill="none"
              >
                <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
              </pattern>
            </defs>
          </svg>

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </div>
      </div>
    </body>
  </html>
)

export default RootLayout
