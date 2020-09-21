import React from 'react'
import Layout from '../components/layout/Layout.js'
import Helmet from 'react-helmet'

export default function Blog() {
  return (
		<Layout>
			<Helmet title={`Blog | Ben Kim`} />
			<div className="container index">
				<br/>
				<br/>
				<p>Coming Soon!</p>
			</div>
		</Layout>
	)
}
