import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOValues {
	description?: string;
	lang?: string;
	title?: string;
	meta?: Array<{ [key: string]: string }>;
}

function SEO({
	description,
	lang,
	title,
	meta,
}: SEOValues): JSX.Element {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

	const metaDescription =
		description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata?.title;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`${defaultTitle} | %s `}
			defaultTitle={defaultTitle}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				...(meta ?? []),
			]}
		/>
	);
}

export default SEO;
