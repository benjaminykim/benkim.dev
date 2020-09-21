import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
        <nav className="footer-links">
					<a
						href="https://www.github.com/benjaminykim"
            target="_blank"
            rel="noopener noreferrer"
					>
  					<img align="left" alt="Ben's Github" width="22px" src="https://img.icons8.com/fluent/48/000000/github.png" />
					</a>
					<a
						href="https://www.linkedin.com/in/benjamin-k-740412149/"
            target="_blank"
            rel="noopener noreferrer"
					>
  					<img align="left" alt="Ben's LinkdeIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
					</a>
					<a
						href="https://www.instagram.com/_b_y_k/"
            target="_blank"
            rel="noopener noreferrer"
					>
  					<img align="left" alt="Ben's Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />
					</a>
					<Link to="/">
  					<img align="left" alt="Ben's Personal Site" width="22px" src="https://img.icons8.com/fluent-systems-filled/24/000000/domain.png" />
					</Link>

        </nav>
      </section>
    </footer>
  )
}