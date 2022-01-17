import React, { FC } from 'react';

import { Spin, Space } from 'antd';

const LoadScreen: FC = () => {
	return (
		<Space data-testid="loader" size='large' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
			<Spin size='large' />
		</Space>
	)
};

export default LoadScreen;