import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout/Layout.js'
import Projects from '../components/Projects.js'

import ben_img from '../../static/ben_img.jpeg'
import project_data from '../data/project.js';

export default function Home() {
	const Section = ({ title, children, button, to, ...props }) => (
    <section {...props}>
      <h2>
        {title}
        {button && (
          <Link className="section-button" to="/blog">
            View all
          </Link>
        )}
      </h2>
      {children}
    </section>
	)

  return (
	<Layout>
	  <Helmet title={`Ben Kim`} />
		<section className="lead">
      <div className="container">
        <div className="copy">
          <h1>
            Hi! I'm Ben Kim, a software engineer
          </h1>
          <p>
					  I'm a FullStack Intern at <a href="https://swimapp.io">Swim</a>. Check out my projects or my {' '}
            <Link to="/blog">blog posts</Link>.
          </p>
        </div>
        <div className="image">
          <img src={ben_img} alt="Ben's Profile" />
        </div>
      </div>
    </section>
    <div className="container index">
      <Section title="Projects">
        <Projects data={project_data} />
      </Section>
		</div>
	</Layout>
	)
}
