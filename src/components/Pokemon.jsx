import { useEffect, useState } from 'react';
import PokemonTypes from 'src/components/PokemonTypes';

const BASE_URL = 'https://pokeapi.co/api/v2';
const POKEMON_URL = `${BASE_URL}/pokemon`;

export default function Pokemon({ pokemon = [] }) {
	const [pokemonData, setPokemonData] = useState([]);

	const fetchPokemonData = async (pokemonName) => {
		const response = await fetch(`${POKEMON_URL}/${pokemonName.toLowerCase()}`);
		const data = await response.json();
		return {
			name: data.name,
			sprite: data.sprites.front_default,
			types: data.types,
		};
	};

	useEffect(() => {
		const fetchAllPokemon = async () => {
			if (pokemon.length > 0) {
				try {
					const pokemonPromises = pokemon.map((item) => {
						return fetchPokemonData(item.name);
					});
					const results = await Promise.all(pokemonPromises);
					setPokemonData(results);
				} catch (error) {
					console.error('Error fetching pokemon:', error);
				}
			}
		};

		fetchAllPokemon();
	}, [pokemon]);

	return (
		<>
			{pokemonData.map((poke) => (
				<div
					key={poke.name}
					className="flex items-center gap-x-2 rounded-xl bg-white p-6 shadow"
				>
					<img className="h-20 w-20 shrink-0" src={poke.sprite} alt={poke.name} />
					<div className="flex flex-col gap-y-2">
						<h1 className="text-xl font-bold capitalize">{poke.name}</h1>
						<PokemonTypes types={poke.types} />
					</div>
				</div>
			))}
		</>
	);
}
