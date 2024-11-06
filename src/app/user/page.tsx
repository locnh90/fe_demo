// app/incomplete/page.tsx

import React from 'react';
import { Spin } from 'antd';
import { Metadata } from 'next';  


export const metadata: Metadata = {
  title: "ShoesShop",
  description: "Cửa hàng bán giày",
};

export default function IncompletePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:'400px'}}>
      <h1>Trang chưa hoàn thành</h1>
      <Spin size="large" style={{ marginTop: '20px' }} />
    </div>
  );
}
