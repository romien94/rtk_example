import React, { FC } from 'react';
import { Row, Col } from 'antd';


import { NewsList as NewsListModel } from '../../../models/News';
import NewsComponent from '../NewsItem/NewsItem';

type NewsListProps = Record<string, any> & { newsList: NewsListModel };

const NewsList: FC<NewsListProps> = ({ newsList, ...rest }) => {
	return (
		<Row {...rest} gutter={[16, 16]} align="middle" data-testid="news-list">
			{newsList.length ? newsList.map((news) => (
				<Col className="gutter-row" key={news.url} span={6}>
					<NewsComponent {...news} />
				</Col>
			)) : <h2 style={{ padding: 10 }}>Список новостей пуст...</h2>}
		</Row>
	)
}

export default NewsList;