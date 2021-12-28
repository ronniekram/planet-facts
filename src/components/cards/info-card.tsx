import 'twin.macro';
import tw, { css } from 'twin.macro';
import sourceIcon from '../../assets/icon-source.svg';

// STYLES

// TYPES
export type Info = {
	name: string;
	content: string;
	source: string;
};

// COMPONENTS

const InfoCard = ({ name, content, source }: Info) => {
	return (
		<div
			tw="text-center flex flex-col justify-between md:(text-left)"
			css={[
				`width: 20.4375rem; height: 14.6875rem;`,
				`@media (min-width: 768px) { width: 21.1875rem; height: 15.8125rem; }`,
				`@media (min-width: 1280px) { width: 21.875rem; height: 20.375rem; }`,
			]}
		>
			<h1 tw="font-antonio uppercase text-4xl leading-7 md:(text-5xl leading-8) xl:(text-6xl leading-9)">
				{name}
			</h1>
			<p tw="font-spartan text-3xs leading-3 xl:(text-xs leading-4)">
				{content}
			</p>
			<p tw="font-spartan text-2xs opacity-50 leading-4 flex justify-center md:(justify-start)">
				<span tw="mx-1">Source : </span>{' '}
				<span tw="font-bold underline flex items-center content-center">
					<a href={source} target="_blank">
						Wikipedia
					</a>
					<img tw="mx-1" src={sourceIcon} alt="" />
				</span>
			</p>
		</div>
	);
};

export default InfoCard;
