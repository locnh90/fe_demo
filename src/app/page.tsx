// app/incomplete/page.tsx

import React from 'react';
import { Spin } from 'antd';

export default function IncompletePage() {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <h1>Trang chưa hoàn thành</h1>
      <Spin size="large" style={{ marginTop: '20px' }} />
    </div>
  );
}
