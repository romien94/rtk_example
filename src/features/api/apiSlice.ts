import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '../../models/Api';
import apiKey from '../../constants/apiKey';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.thenewsapi.com/v1/',
	}),
	endpoints: builder => ({
		getNews: builder.query<ApiResponse, void>({
			query: () => ({
				url: 'news/top',
				params: {
					api_token: apiKey,
				}
			}),
		}),
	}),
});

export const { useGetNewsQuery } = apiSlice;
