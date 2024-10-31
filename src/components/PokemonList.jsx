import { useEffect, useState } from 'react';
import Pokemon from 'src/components/Pokemon';

export default function PokemonList(props) {
	const [currentList, setCurrentList] = useState([]);

	useEffect(() => {
		const pokemonList = async () => {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon?limit=${props.limit}&offset=${props.offset}`
			);
			const data = await response.json();
			setCurrentList(data.results);
		};

		pokemonList();
	}, [props.limit, props.offset]);

	if (!currentList) {
		return (
			<div className="flex items-center gap-2">
				<div className="size-6 animate-pulse rounded-full bg-gray-200"></div>
				<div className="size-6 animate-pulse rounded-full bg-gray-200"></div>
			</div>
		);
	}

	return (
		<div className="mx-auto grid max-w-4xl grid-cols-2 gap-4">
			{currentList.map((item, index) => {
				return <Pokemon key={index} pokemon={item} />;
			})}
		</div>
	);
}
