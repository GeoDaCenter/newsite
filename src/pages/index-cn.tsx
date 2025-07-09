import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function IndexCn(): React.JSX.Element {
  useEffect(() => {
    // Redirect to the original Chinese index page
    window.location.href = '/index-cn.html';
  }, []);

  return (
    <Layout
      title="GeoDa - 空间数据科学导论"
      description="GeoDa是一个免费的开源软件工具，作为空间数据科学的入门。它旨在通过探索和建模空间模式来促进数据分析的新见解。"
    >
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>正在跳转到中文页面...</h1>
        <p>如果没有自动跳转，请<a href="/index-cn.html">点击这里</a>。</p>
      </div>
    </Layout>
  );
} 