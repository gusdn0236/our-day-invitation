// 📦 Container.jsx
// 섹션마다 공통으로 적용할 레이아웃 감싸는 Wrapper 컴포넌트

import React from 'react';
import './Container.css';

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;