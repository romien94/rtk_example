import { NewsList } from './News';

export interface ApiPagination {
	count: number,
	limit: number,
	offset: number,
	total: number
}

export interface ApiError {
	code: string,
	message: string
}

export interface ApiResponse {
	totalResults: number,
	meta: {
		found: number,
		returned: number,
		limit: number,
		page: number
	},
	data: NewsList
}
