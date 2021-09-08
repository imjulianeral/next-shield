import Head from 'next/head'
import { LayoutProps } from '@/types/Components'
import { Nav } from '../ui/Nav'

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>NextShield | {title}</title>
        <meta name="description" content="NextShield Example with Firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="center">
        <main>{children}</main>
      </div>
    </>
  )
}
