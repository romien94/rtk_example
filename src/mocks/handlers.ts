import { rest } from 'msw';
import { newsList } from './data';

export const handlers = [
	rest.get('https://api.thenewsapi.com/v1/news/top', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				meta: { found: 7741735, returned: 5, limit: 5, page: 1 },
				data: newsList
			})
		)
	}),
];
