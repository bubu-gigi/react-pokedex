import HeroSection from 'src/components/HeroSection';
import PokemonList from './components/PokemonList';
import { useEffect, useState } from 'react';

export default function App() {
	const [parameters, setParameters] = useState({ limit: 18, offset: 0 });

	return (
		<>
			<HeroSection />
			<section className="px-base flex-1 bg-stone-100 py-12">
				<div className="mx-auto max-w-4xl pb-4">
					<h1 className="text-lg font-light">...or browse all the existing pokèmons</h1>
				</div>
				<PokemonList limit={parameters.limit} offset={parameters.offset} />
			</section>
		</>
	);
}
