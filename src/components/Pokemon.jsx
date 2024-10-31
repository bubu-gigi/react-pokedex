import { useEffect, useState } from 'react';
import PokemonTypes from 'src/components/PokemonTypes';

const BASE_URL = 'https://pokeapi.co/api/v2';
const POKEMON_URL = `${BASE_URL}/pokemon`;

export default function Pokemon(props) {
	const [pokemonData, setPokemonData] = useState({});
	useEffect(() => {
		const fetchPokemonData = async () => {
			const response = await fetch(`${POKEMON_URL}/${props.pokemon.name.toLowerCase()}`);
			const data = await response.json();

			setPokemonData({
				name: data.name,
				sprite: data.sprites.front_default,
				types: data.types,
			});
			console.log(data);
		};
		fetchPokemonData();
	}, [props]);

	if (!pokemonData) {
		return (
			<div className="flex items-center gap-2">
				<div className="size-6 animate-pulse rounded-full bg-gray-200"></div>
				<div className="size-6 animate-pulse rounded-full bg-gray-200"></div>
			</div>
		);
	}

	return (
		<div
			key={pokemonData.name}
			className="flex items-center gap-x-2 rounded-xl bg-white p-6 shadow"
		>
			<img className="h-20 w-20 shrink-0" src={pokemonData.sprite} alt={pokemonData.name} />
			<div className="flex flex-col gap-y-2">
				<h1 className="text-xl font-bold capitalize">{pokemonData.name}</h1>
				<PokemonTypes types={pokemonData.types} />
			</div>
		</div>
	);
}
