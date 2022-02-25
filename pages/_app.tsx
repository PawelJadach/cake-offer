import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient());

	return (
		<div className="w-full">
			<Head>
				<title>Oferta tortów - Dorota Pędlowska </title>
				<meta
					property="og:title"
					content="🎂 Oferta tortów - Dorota Pędlowska"
					key="title"
				/>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</div>
	);
}

export default MyApp;
