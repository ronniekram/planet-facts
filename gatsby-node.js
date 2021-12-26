async function createPlanetPages({ actions, graphql }) {
	const { data } = await graphql(`
		query {
			planets: allSanityPlanet {
				nodes {
					id
					name
					slug {
						current
					}
				}
			}
		}
	`);

	data.planets.nodes.forEach(node => {
		const slug = node.slug.current;
		actions.createPage({
			path: `/planets/${slug}`,
			component: require.resolve(
				`./src/templates/planet.tsx`
			),
			context: { slug: slug },
		});
	});
}

exports.createPages = async function (params) {
	await Promise.all([createPlanetPages(params)]);
};
