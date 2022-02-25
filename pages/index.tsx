import type { NextPage } from 'next';
import Image from 'next/image';
import { BasicLayout } from '../components/Layouts/BasicLayout';

const offers = [
	{
		id: 1,
		name: 'Upojny Whiskey',
		photo: '/cakes/1.jpg',
		spongeCake: 'Ciemny',
		content: ['whiskey', 'mleczna czekolada', 'mus malinowy'],
	},
	{
		id: 2,
		name: 'Śmietanowa malinka',
		photo: '/cakes/2.jpg',
		spongeCake: 'Jasny',
		content: ['mleczna czekolada', 'śmietanka', 'mus malinowy'],
	},
	{
		id: 3,
		name: 'Owocowe szaleństwo',
		photo: '/cakes/3.jpg',
		spongeCake: 'Jasny',
		content: ['śmietanka', 'owoce sezonowe', 'żelka'],
	},
	{
		id: 4,
		name: 'Prince polo',
		photo: '/cakes/4.jpg',
		spongeCake: 'Ciemny',
		content: ['whiskey', 'biała czekolada', 'maliny', 'chrupka z prince polo'],
	},
	{
		id: 5,
		name: 'Ciasteczkowy dzień',
		photo: '/cakes/5.jpg',
		spongeCake: 'Jasny',
		content: ['czekolada', 'śmietanka z malinami', 'oreo z karmelem'],
	},
	{
		id: 6,
		name: 'Czeko potwór',
		photo: '/cakes/6.jpg',
		spongeCake: 'Ciemny (mocno kakaowy)',
		content: [
			'mleczna czekolada + chrupka',
			'biała czekolada',
			'maliny lub truskawki',
		],
	},
	{
		id: 7,
		name: 'Król Oreo',
		photo: '/cakes/7.jpg',
		spongeCake: 'Ciemny',
		content: ['mleczna czekolada', 'oreo', 'maliny'],
	},
];

const Home: NextPage = () => {
	return (
		<BasicLayout>
			<h1 className="text-2xl font-bold mb-20">
				🎂 Oferta tortów - Dorota Pędlowska 🎂
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-left">
				{offers.map((offer) => (
					<div key={offer.id} className="shadow-lg overflow-hidden rounded-xl">
						<div className="relative h-52 mb-5">
							<Image
								src={offer.photo}
								layout="fill"
								objectFit="cover"
								alt={`Tort - ${offer.name}`}
								loading="lazy"
							/>
						</div>
						<h3 className="text-xl font-black uppercase px-5">{offer.name}</h3>
						<p className="p-5">
							Biszkopt
							<br />
							<span className="rounded-xl text-xs bg-pink-600 py-1 px-2 text-white">
								{offer.spongeCake}
							</span>
						</p>
						<div className="p-5 pt-2">
							<h5>Środek</h5>
							<div className="flex flex-wrap gap-1">
								{offer.content.map((item, index) => (
									<span
										className="rounded-xl text-xs bg-pink-600 py-1 px-2 text-white"
										key={index}
									>
										{item}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</BasicLayout>
	);
};

export default Home;
