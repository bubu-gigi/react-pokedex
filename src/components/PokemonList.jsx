import { useEffect, useState } from 'react';
import PokemonCard from 'src/components/PokemonCard';

export default function PokemonList(props) {
	const [currentCall, setCurrentCall] = useState({ limit: props.limit, offset: props.offset });
	const [currentList, setCurrentList] = useState([]);

	useEffect(() => {
		const pokemonList = async () => {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon?limit=${currentCall.limit}&offset=${currentCall.offset}`
			);
			const data = await response.json();
			setCurrentList(data);
		};

		pokemonList();
	}, [currentCall.limit, currentCall.offset]);

	const ListPagination = (count, pageLength) => {
		const totalPages = Math.ceil(currentList.count / currentList.results.length);

		const handlePageChange = (url) => {
			const params = new URLSearchParams(new URL(url).search);
			setCurrentCall({
				limit: params.get('limit'),
				offset: params.get('offset')
			})
		}

		// console.log(currentList);
		console.log('List total pages: ', totalPages);
		
		if (!count > pageLength) {
			return;
		}
		return (
			<div className='grid grid-cols-[.75rem_1fr_.75rem] gap-4'>
				{currentList.previous && (
					<button onClick={() => handlePageChange(currentList.previous)}>
						<span>&lt;</span>
					</button>
				)}
				<span className='col-start-2'>
					{currentCall.offset/12 + 1} / {totalPages}
				</span>
				{currentList.next && (
					<button onClick={() => handlePageChange(currentList.next)}>
						&gt;
					</button>
				)}
			</div>
		);
	};

	if (!currentList.results) {
		return (
			<div className="flex items-center gap-2">
				<div className="size-6 animate-pulse rounded-full bg-gray-200"></div>
			</div>
		);
	}

	return (
		<>
			<div className="mx-auto grid max-w-4xl grid-cols-[repeat(auto-fill,_minmax(12.25rem,_1fr))] gap-4">
				{currentList.results.map((item, index) => {
					return <PokemonCard key={index} pokemon={item} />;
				})}
				<div className="col-span-full mt-4 flex justify-center">
					<ListPagination />
				</div>
			</div>
		</>
	);
}
