import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonTypes from 'src/components/PokemonTypes';

const BASE_URL = 'https://pokeapi.co/api/v2';
const POKEMON_URL = `${BASE_URL}/pokemon`;

export default function PokemonCard(props) {
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
		};
		fetchPokemonData();
	}, [props]);

	if (!pokemonData || !pokemonData.name) {
		return (
			<div className="flex items-center gap-2">
				<div className="size-6 animate-pulse rounded-full bg-gray-200"></div>
			</div>
		);
	}

	return (
		<Link
			key={pokemonData.name}
			to={`pokemon/${pokemonData.name}`}
			className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 shadow hover:bg-stone-50 active:bg-stone-100"
		>
			<img
				className="h-20 w-20 shrink-0"
				src={pokemonData.sprite}
				alt={pokemonData.name}
				loading="lazy"
			/>
			<div className="flex flex-col gap-y-2">
				<h1 className="text-xl font-bold capitalize">{pokemonData.name}</h1>
				<PokemonTypes types={pokemonData.types} />
			</div>
		</Link>
	);
}
