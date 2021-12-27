import Layout from '../components/layout';
import SEO from '../components/seo';
import 'twin.macro';

const Home = (): JSX.Element => {
	return (
		<Layout>
			<SEO />
			<div tw="m-10">Hello world!</div>
		</Layout>
	);
};
export default Home;
