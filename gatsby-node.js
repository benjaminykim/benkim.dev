exports.createPages = async ({ actions, graphql, reporter }) => {

	console.log("====================================")
	console.log(`createPages entered`)
	console.log("====================================")
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
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
	`)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		console.log(node.frontmatter)
    createPage({
      path: 'blog/' + node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
				slug: node.frontmatter.path,
				data: node.frontmatter,
      },
    });
  })
}