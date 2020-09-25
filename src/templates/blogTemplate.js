import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import Layout from '../components/layout/Layout'
import { formatDate } from '../utils/helpers'

export default function Template({
  data,
}) {
	const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
		<Layout>
		<Helmet title={`${frontmatter.title} | Ben Kim`} />
		<header>
			<div className="container medium text-center">
				<h1>{frontmatter.title}</h1>
			</div>
		</header>
		<section>
			<div className="container medium">
        <p className="post-preview-date" >Published: {formatDate(frontmatter.date)}</p>
        <div
          className="post-preview-description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
			</div>
		</section>
	</Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
				date
				description
        path
        title
      }
    }
  }
`