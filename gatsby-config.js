module.exports = {
	siteMetadata: {
		title: `Planet Facts`,
		description: `Frontend Mentor: Planet Facts Site`,
		author: `@ronniekram`,
	},
	plugins: [
		{ resolve: `gatsby-plugin-emotion` },
		{
			resolve: `gatsby-source-sanity`,
			options: {
				projectId: `binco7ut`,
				dataset: `production`,
				// a token with read permissions is required
				// if you have a private dataset
				token: process.env.SANITY_TOKEN,
			},
		},
		`gatsby-plugin-image`, // https://www.gatsbyjs.com/plugins/gatsby-plugin-image
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-emotion`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-client-side-redirect`,
	],
};
