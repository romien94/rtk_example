import React, { FC, SyntheticEvent } from 'react';
import { Card as AntdCard, Divider, Space } from 'antd';
import { HeartOutlined, HeartFilled, DeleteOutlined } from '@ant-design/icons';

import useAppDispatch from '../../../hooks/useAppDispatch';
import { News as NewsModel } from '../../../models/News';
import { likeNews, deleteNews } from '../newsSlice';

interface NewsComponentProps extends NewsModel { };

const { Meta } = AntdCard;
const imageNotFoundUrl = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

const Card: FC<NewsComponentProps> = ({ image_url, source, title, url, isLiked = false }) => {
	const dispatch = useAppDispatch();
	const iconStyle = {
		fontSize: 24
	};

	const handleImageLoadError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = imageNotFoundUrl;
		console.clear(); // removes 404 error from console when an image fails to load
	};
	const handleCardLike = () => dispatch(likeNews(url));
	const handleCardDeletion = () => dispatch(deleteNews(url));

	return (
		<AntdCard cover={<img alt={title} style={{ height: 200, objectFit: 'cover' }} onError={handleImageLoadError} src={image_url ?? imageNotFoundUrl} />}>
			<Meta title={title} description={source} />
			<Divider />
			<Space align="center">
				{isLiked ? <HeartFilled style={iconStyle} onClick={handleCardLike} /> : <HeartOutlined style={iconStyle} color='blue' onClick={handleCardLike} />}
				<DeleteOutlined style={iconStyle} onClick={handleCardDeletion} />
			</Space>
		</AntdCard>
	)
};

export default Card;
