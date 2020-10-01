import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout/Layout.js'
import Seo from '../components/seo.js'
import Projects from '../components/Projects.js'
import Experience from '../components/Experience.js'
import Skills from '../components/Skills.js'

import ben_img from '../../static/ben_img.jpeg'
import project_data from '../data/project.js'
import exp_data from '../data/experience.js'
import skill_data from '../data/skill.js'

export default function Home() {
	const Section = ({ title, children, ...props }) => (
    <section {...props}>
      <h2>
        {title}
      </h2>
      {children}
    </section>
	)

  return (
	<Layout>
	  <Helmet title={`Ben Kim`} />
		<Seo/>
		<section className="lead">
      <div className="container">
        <div className="copy">
          <h1>
            Hi! I'm Ben Kim, a software engineer
          </h1>
          <p>
					  I'm a Fullstack intern at <a href="https://swimapp.io">Swim</a>. Check out my projects or my {' '}
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
      <Section title="Experience">
				<p class="exp-disclaimer">*view on desktop to see full details</p>
        <Experience data={exp_data} />
      </Section>
			<Section title="Skills">
				<Skills data={skill_data} />
			</Section>
		</div>
	</Layout>
	)
}
