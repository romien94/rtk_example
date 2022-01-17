type NullString = string | null;

export interface News {
	uuid: string,
	title: string,
	description: string,
	keywords: NullString,
	snippet: NullString,
	url: string,
	image_url: string,
	language: string,
	published_at: string,
	source: string,
	categories: Array<string>,
	relevance_score: null | number,
	locale: string,
	isLiked?: boolean
}

export type NewsList = Array<News>;

