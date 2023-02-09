import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import Hamburger from './Hamburger'

type Props = {
  title: string
  children: ReactNode
}

const Layout: FC<Props> = ({ children, title = 'Home' }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="w-screen bg-cyan-800 shadow-xl">
          <div className="flex h-14 flex-row-reverse items-center pr-8">
            <Hamburger></Hamburger>
            <div className="hidden md:flex md:space-x-4">
              <Link href="/">
                <a
                  data-testid="home-nav"
                  className="rounded px-3 py-2 text-cyan-100 hover:bg-cyan-700"
                >
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a className="rounded px-3 py-2 text-cyan-100 hover:bg-cyan-700">
                  Blog
                </a>
              </Link>
              <Link href="/comment-page">
                <a className="rounded px-3 py-2 text-cyan-100 hover:bg-cyan-700">
                  Comment
                </a>
              </Link>
              <Link href="/context-page">
                <a className="rounded px-3 py-2 text-cyan-100 hover:bg-cyan-700">
                  Context
                </a>
              </Link>
              <Link href="/task-page">
                <a className="rounded px-3 py-2 text-cyan-100 hover:bg-cyan-700">
                  Todos
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-12 w-full items-center justify-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Layout
