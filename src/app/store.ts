import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/news/newsSlice';
import { apiSlice } from '../features/api/apiSlice';

const store = configureStore({
	reducer: {
		news: newsReducer,
		[apiSlice.reducerPath]: apiSlice.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;