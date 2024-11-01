import Bug from 'src/assets/images/types/bug.svg';
import Dark from 'src/assets/images/types/dark.svg';
import Dragon from 'src/assets/images/types/dragon.svg';
import Electric from 'src/assets/images/types/electric.svg';
import Fairy from 'src/assets/images/types/fairy.svg';
import Fighting from 'src/assets/images/types/fighting.svg';
import Fire from 'src/assets/images/types/fire.svg';
import Flying from 'src/assets/images/types/flying.svg';
import Ghost from 'src/assets/images/types/ghost.svg';
import Grass from 'src/assets/images/types/grass.svg';
import Ground from 'src/assets/images/types/ground.svg';
import Ice from 'src/assets/images/types/ice.svg';
import Normal from 'src/assets/images/types/normal.svg';
import Poison from 'src/assets/images/types/poison.svg';
import Psychic from 'src/assets/images/types/psychic.svg';
import Rock from 'src/assets/images/types/rock.svg';
import Steel from 'src/assets/images/types/steel.svg';
import Water from 'src/assets/images/types/water.svg';

function iconPicker(item) {
	let icon = null;

	switch (item) {
		case 'bug':
			icon = Bug;
			break;
		case 'dark':
			icon = Dark;
			break;
		case 'dragon':
			icon = Dragon;
			break;
		case 'electric':
			icon = Electric;
			break;
		case 'fairy':
			icon = Fairy;
			break;
		case 'fighting':
			icon = Fighting;
			break;
		case 'fire':
			icon = Fire;
			break;
		case 'flying':
			icon = Flying;
			break;
		case 'ghost':
			icon = Ghost;
			break;
		case 'grass':
			icon = Grass;
			break;
		case 'ground':
			icon = Ground;
			break;
		case 'ice':
			icon = Ice;
			break;
		case 'normal':
			icon = Normal;
			break;
		case 'poison':
			icon = Poison;
			break;
		case 'psychic':
			icon = Psychic;
			break;
		case 'rock':
			icon = Rock;
			break;
		case 'steel':
			icon = Steel;
			break;
		case 'water':
			icon = Water;
			break;

		default:
			break;
	}

	return icon;
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function TypesList({ types }) {
	if (!types) {
		return (
			<div className="flex items-center gap-2">
				<div className="size-6 animate-pulse rounded-full bg-gray-200"></div>
				<div className="size-6 animate-pulse rounded-full bg-gray-200"></div>
			</div>
		);
	}

	return (
		<ul className="flex justify-center gap-2">
			{types.map((item) => {
				if (!item || !item.type) return null;
				const logo = iconPicker(item.type.name);
				return (
					<li key={item.slot} className="inline-flex">
						<img
							className="size-6"
							src={logo}
							alt={item.type.name}
							title={capitalize(item.type.name)}
						/>
					</li>
				);
			})}
		</ul>
	);
}
