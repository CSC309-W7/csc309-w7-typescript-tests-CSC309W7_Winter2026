import type { User } from './types';

export const apiResponse: unknown = [
	{ name: 'Tony', age: 23 },
	{ name: 'Kevin', age: '24' }, // invalid
	{ name: 'Jim', age: 25 },
];

export function getUsersData(): User[] {
	let users: User[] = [];
	for (const item of apiResponse as unknown[]) {
		if (
			typeof item === 'object' &&
			item !== null &&
			'name' in item &&
			'age' in item
		) {
			const name = item.name;
			if (typeof name !== 'string') {
				continue;
			}
			const age = item.age;
			if (typeof age === 'string') {
				const parsedAge = parseInt(age, 10);
				if (!isNaN(parsedAge)) {
					users.push({ name, age: parsedAge });
				}
			}
		}
	}
	return users;
}

export function formatAges(users: User[]): string[] {
	return users.map((u) => u.age.toFixed(0));
}
