import React from 'react';
import { Layout } from 'antd';

import News from './features/news/News';


const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100%', padding: '20px 40px' }}>
      <Content>
        <News />
      </Content>
    </Layout>
  );
}

export default App;
