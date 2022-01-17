import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsList } from '../../models/News';

interface CardsState {
	newsList: NewsList,
	filteredNews: NewsList,
	isFilterActive: boolean
}

const initialState: CardsState = {
	newsList: [],
	filteredNews: [],
	isFilterActive: false
}

const newsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		setNews: (state, action: PayloadAction<NewsList>) => {
			state.newsList = action.payload;
		},
		deleteNews: (state, action: PayloadAction<string>) => {
			state.newsList = state.newsList.filter(news => news.url !== action.payload);
		},
		likeNews: (state, action: PayloadAction<string>) => {
			state.newsList = state.newsList.map((news) => {
				if (news.url === action.payload) news.isLiked = !news.isLiked;
				return news;
			})
		},
		toggleFilterByLikes: (state, _action: PayloadAction<void>) => {
			state.isFilterActive = !state.isFilterActive;

			if (state.isFilterActive) state.filteredNews = state.newsList.filter(news => news.isLiked);
		},
	}
});


export const { deleteNews, likeNews, setNews, toggleFilterByLikes } = newsSlice.actions;
export default newsSlice.reducer;