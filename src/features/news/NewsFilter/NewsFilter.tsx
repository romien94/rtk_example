import React, { CSSProperties, FC } from 'react';
import { Switch } from 'antd';

import useAppDispatch from '../../../hooks/useAppDispatch';
import { toggleFilterByLikes } from '../newsSlice';

interface NewsFilterProps extends Record<string, any> {
	style?: CSSProperties
}

const NewsFilter: FC<NewsFilterProps> = ({ style }) => {
	const dispatch = useAppDispatch();

	const handleFilterChange = () => dispatch(toggleFilterByLikes());

	return (
		<Switch
			data-testid='news-filter'
			style={style}
			checkedChildren="Показывать только новости с лайками"
			unCheckedChildren="Показывать все новости"
			onChange={handleFilterChange} />
	)
};

export default NewsFilter;