import React from "react"
import Layout from '../components/layout/Layout.js'
import Helmet from 'react-helmet'

export default function Contact() {
  return (
		<Layout>
			<Helmet title={`Contact | Ben Kim`} />
			<div className="container index">
				<br/>
				<br/>
				<p>connect on <a href="https://www.linkedin.com/in/benjamin-k-740412149/">LinkedIn</a> or send an <a href="mailto:1996byk@gmail.com?subject=Hi!!">email</a></p>
				<p>find more on <a href="https://www.github.com/benjaminykim">GitHub</a></p>
			</div>
		</Layout>
	)
}
