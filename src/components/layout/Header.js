import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex">
          <div>
            <Link to="/" className="brand">
              Ben Kim
            </Link>
          </div>
          <div className="flex">
            <Link to="/">Me</Link>
            <Link to="/blog">Blog</Link>
						<a href="mailto:1996byk@gmail.com?subject=Hi!">Contact</a>
						<a href="/resume.pdf">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
