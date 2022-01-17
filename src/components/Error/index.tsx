import React, { FC, useEffect } from 'react';
import { Space, notification } from 'antd';


const Error: FC = () => {
	useEffect(() => {
		notification['error']({
			message: 'Упс',
			description: 'Произошла ошибка во время загрузки данных. Попробуйте перезагрузить страницу.',
			duration: null
		})
	}, [])

	return (
		<Space />
	)
};

export default Error;