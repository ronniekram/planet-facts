import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "twin.macro";

const Home = (): JSX.Element => {
	return (
		<Layout>
			<SEO />
			<div tw="text-2xl text-red-400 m-10">Hello world!</div>
		</Layout>
	);
};
export default Home;
