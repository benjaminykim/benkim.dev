import React from 'react'
import Layout from '../components/layout/Layout.js'
import Helmet from 'react-helmet'
import { Link } from 'gatsby';

export default function Blog() {
  return (
		<Layout>
			<Helmet title={`Blog | Ben Kim`} />
			<div className="container index">
				<br/>
				<br/>
				<p>Coming Soon!</p>
				<main>
    Sourcing markdown recipe (see page at{` `}
    <Link to="vscode-gatsby-bug.js">/my-first-post</Link>)
  </main>
			</div>
		</Layout>
	)
}
