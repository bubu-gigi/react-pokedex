import { useParams } from "react-router-dom";

export default function PokemonPage() {
    // sintassi js unita a react hook per prendere subito un parametro di interesse
    // rispecchia il nome definito nella rotta nel file main.jsx
	const { pokemonName } = useParams();
    return <p>{pokemonName}</p>;
}
