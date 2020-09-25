import React from 'react'
import Layout from '../components/layout/Layout.js'
import Helmet from 'react-helmet'
import { Link } from 'gatsby';

export default function Blog({data, ...props}) {
	const posts = data.allMarkdownRemark.edges
	const simp = getSimplifiedPosts(posts)

  return (
		<Layout>
			<Helmet title={`Blog | Ben Kim`} />
			<div className="container index">
				<br/>
				<div>
      		{simp.map((node) => {
      			return (
							<div>
								<p>ID {node.id}</p>
								<Link
									to={node.path}
								>{node.title}</Link>
								<p>Title {node.title}</p>
								<p>Date {node.date}</p>
								<p>Description {node.description}</p>
								<p>Path {node.path}</p>
								<div
									className="blog-post-content"
									dangerouslySetInnerHTML={{ __html: node.html }}
								/>
								<br/>
								<br/>
							</div>
        		)
      		})}
    		</div>
			</div>
		</Layout>
	)
}

function getSimplifiedPosts(posts, options = {}) {
  return posts.map((post) => ({
    id: post.node.id,
    date: post.node.frontmatter.date,
    title: post.node.frontmatter.title,
    description: post.node.frontmatter.description,
		path: post.node.frontmatter.path,
		html: post.node.html,
  }))
}


export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
					id
					html
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