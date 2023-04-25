import { guaranteedStatus } from '$lib/stores/localstorage';
import { get3StarItem, get4StarItem, getAllChars, rand } from './gachaBase';

const starterWarp = (rarity, starterData) => {
	const { characters } = starterData;

	if (rarity === 5) {
		const result = getAllChars(5).filter(({ name }) => characters.includes(name));
		guaranteedStatus.set('starter', true);
		return rand(result);
	}

	if (rarity === 3) return get3StarItem();
	if (rarity === 4) return get4StarItem();
};

export default starterWarp;