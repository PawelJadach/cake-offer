import { NextPage } from 'next';

export const BasicLayout: NextPage = ({ children }) => {
	return (
		<div className="font-mono w-full text-center max-w-screen-xl px-10 mx-auto">
			<div className="mt-10 mb-32">{children}</div>
		</div>
	);
};
