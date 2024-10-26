import { useEffect, useState } from 'react';
import HeroSection from 'src/components/HeroSection';
const BASE_URL = 'https://pokeapi.co/api/v2';

export default function App() {
	const [name, setName] = useState('');
	const [sprite, setSprite] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${BASE_URL}/pokemon/porygon`);
			const data = await response.json();
			setName(data["name"]);
			setSprite(data["sprites"]["versions"]["generation-ii"]["crystal"]["front_transparent"]);
		};
		fetchData();
	});

	return (
		<>
			<HeroSection />
			<section className="px-base flex-1 bg-stone-100 py-12">
				<div className="flex flex-col items-center rounded-xl bg-white p-6 shadow">
					<h1 className="text-xl font-bold capitalize">{name}</h1>
					<img className='size-20' src={sprite} alt="" />
				</div>
			</section>
		</>
	);
}
