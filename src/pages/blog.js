import React from 'react'
import Layout from '../components/layout/Layout.js'
import Helmet from 'react-helmet'
import PostPreview from '../components/PostPreview.js'
import { graphql } from 'gatsby';
import Seo from '../components/seo.js'

export default function Blog({data}) {
	const posts = data.allMarkdownRemark.edges
	const simp = getSimplifiedPosts(posts)

  return (
		<Layout>
			<Helmet title={`Blog | Ben Kim`} />
			<Seo
				title={'Blog | Ben Kim'}
				description={'Ben Kim software engineer developer personal blog'}
			/>
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