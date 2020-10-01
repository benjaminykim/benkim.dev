import React from "react"
import Layout from '../components/layout/Layout.js'
import Helmet from 'react-helmet'
import Seo from '../components/seo.js'

export default function Contact() {
  return (
		<Layout>
			<Helmet title={`Contact | Ben Kim`} />
			<Seo
				title={'Contact | Ben Kim'}
				description={'Ben Kim software engineer developer personal contact'}
			/>
			<div className="container index">
				<br/>
				<br/>
				<p>connect on <a href="https://www.linkedin.com/in/ben-kim-740412149/">LinkedIn</a> or send an <a href="mailto:1996byk@gmail.com?subject=Hi!!">email</a></p>
				<p>find more on <a href="https://www.github.com/benjaminykim">GitHub</a></p>
			</div>
		</Layout>
	)
}
