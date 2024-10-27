import HeroSection from 'src/components/HeroSection';
import PokemonList from './components/PokemonList';
import { useEffect, useState } from 'react';

export default function App() {
	const [parameters, setParameters] = useState({ limit: 20, offset: 0 });

	return (
		<>
			<HeroSection />
			<section className="px-base flex-1 bg-stone-100 py-12">
				<PokemonList limit={parameters.limit} offset={parameters.offset} />
			</section>
		</>
	);
}
