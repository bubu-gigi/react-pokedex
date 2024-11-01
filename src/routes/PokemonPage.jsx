import { useParams } from "react-router-dom";

export default function PokemonPage() {
	const params = useParams();
    console.log(params);
    return <p>Ciao</p>;
}
