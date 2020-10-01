import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex">
          <div>
            <Link to="/" className="logo">
              Ben Kim
            </Link>
          </div>
          <div className="flex">
            <Link to="/">Me</Link>
            <Link to="/blog">Blog</Link>
						<Link to="/contact">Contact</Link>
						<a href="/resume.pdf">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
