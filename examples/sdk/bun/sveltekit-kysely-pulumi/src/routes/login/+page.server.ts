import { createToken } from '$lib/auth/jwt.server';
import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('username');
		const password = data.get('password');

		const jwt = await createToken('1234');
		console.log(jwt);
	}
} satisfies Actions;
