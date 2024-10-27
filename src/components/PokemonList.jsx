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
			console.log(data.results);
		};

        pokemonList();
	}, [props.limit, props.offset]);

	return (
		<div className="mx-auto grid max-w-4xl grid-cols-2 gap-4">
			<Pokemon pokemon={currentList} />
		</div>
	);
}
