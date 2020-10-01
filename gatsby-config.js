/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
			}
		},
		'gatsby-plugin-netlify-cms',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `${__dirname}/content/blog`,
			},
		},
		`gatsby-transformer-remark`,
		{
			resolve: 'gatsby-plugin-disqus',
			options: {
				shortname: process.env.GATSBY_DISQUS_NAME || "none",
			}
		}
	],
	siteMetadata: {
		title: "Ben Kim",
		titleTemplate: "%s",
		description: "personal website for Ben Kim software engineer developer",
		url: "https://www.benkim.dev", // No trailing slash allowed!
	},
}