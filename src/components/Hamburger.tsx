import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <a
        data-testid="home-nav"
        className="cursor-pointer rounded px-3 py-2 text-cyan-100 hover:bg-cyan-700 md:hidden"
        onClick={handleToggle}
      >
        Menu
        {isOpen ? (
          <FontAwesomeIcon
            icon={faXmark}
            className="px-2 text-cyan-100 hover:bg-cyan-700"
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className="px-2 text-cyan-100 hover:bg-cyan-700"
          />
        )}
      </a>
      {isOpen && (
        <div className="absolute top-0 right-0 mt-14 w-48 bg-cyan-800 p-4 md:hidden">
          <Link href="/">
            <a
              data-testid="home-nav"
              className="block rounded px-3 py-2 text-cyan-100 hover:bg-cyan-700"
            >
              Home
            </a>
          </Link>
          <Link href="/blog-page">
            <a
              data-testid="blog-nav"
              className="block rounded px-3 py-2 text-cyan-100 hover:bg-cyan-700"
            >
              Blog
            </a>
          </Link>
          <Link href="/comment-page">
            <a
              data-testid="comment-nav"
              className="block rounded px-3 py-2 text-cyan-100 hover:bg-cyan-700"
            >
              Comment
            </a>
          </Link>
          <Link href="/context-page">
            <a
              data-testid="context-nav"
              className="block rounded px-3 py-2 text-cyan-100 hover:bg-cyan-700"
            >
              Context
            </a>
          </Link>
          <Link href="/task-page">
            <a
              data-testid="task-nav"
              className="block rounded px-3 py-2 text-cyan-100 hover:bg-cyan-700"
            >
              Todos
            </a>
          </Link>
        </div>
      )}
    </>
  )
}

export default Hamburger
