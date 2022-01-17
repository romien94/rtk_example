import React, { DetailedHTMLProps, FC, HTMLProps, useEffect } from 'react';

import { useGetNewsQuery } from '../api/apiSlice';

import Error from '../../components/Error';
import LoadScreen from '../../components/LoadScreen';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setNews } from './newsSlice';
import useTypedSelector from '../../hooks/useTypedSelector';
import NewsList from './NewsList/NewsList';
import NewsFilter from './NewsFilter/NewsFilter';

type NewsProps = DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> & Record<string, any>;

const News: FC<NewsProps> = (props) => {
	const { data, error, isLoading } = useGetNewsQuery()
	const dispatch = useAppDispatch();
	const { newsList, filteredNews, isFilterActive } = useTypedSelector(state => state.news);

	useEffect(() => {
		data && dispatch(setNews(data.data));
	}, [dispatch, data]);

	if (isLoading) return <LoadScreen />;

	if (error) return <Error />;

	return (
		<div {...props}>
			<NewsFilter style={{ marginBottom: 20 }} />
			<NewsList newsList={isFilterActive ? filteredNews : newsList} />
		</div>
	)
}

export default News;