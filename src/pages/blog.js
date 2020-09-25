import React from 'react'
import Layout from '../components/layout/Layout.js'
import Helmet from 'react-helmet'
import PostPreview from '../components/PostPreview.js'
import { graphql } from 'gatsby';

export default function Blog({data}) {
	const posts = data.allMarkdownRemark.edges
	const simp = getSimplifiedPosts(posts)

  return (
		<Layout>
			<Helmet title={`Blog | Ben Kim`} />
			<div className="container index">
				<br></br>
				<PostPreview data={simp}>
				</PostPreview>
			</div>
		</Layout>
	)
}

function getSimplifiedPosts(posts, options = {}) {
  return posts.map((post) => ({
    date: post.node.frontmatter.date,
    title: post.node.frontmatter.title,
    description: post.node.frontmatter.description,
		path: post.node.frontmatter.path,
  }))
}


export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
						title
						date
						description
						path
          }
        }
      }
    }
  }
`