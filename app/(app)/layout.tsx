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
          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </div>
      </div>
    </body>
  </html>
)

export default RootLayout
