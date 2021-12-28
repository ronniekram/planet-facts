import { useEffect } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Nav from '../components/layout/navigation';
import 'twin.macro';

const Home = (): JSX.Element => {
	useEffect(() => {
		navigate('/planets/mercury');
	}, []);
	return (
		<Layout>
			<SEO />
			<Nav />
		</Layout>
	);
};
export default Home;
