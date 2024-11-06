"use client"; // Đánh dấu là client component

import { Spin } from "antd"; // Import Spin từ Ant Design
import React from "react";
import './loading.module.css'; // Import file CSS để sử dụng

export default function LoadingUser() {
  return (
    <div className="loading-overlay">
      <Spin size="large" tip="Đang tải..." />
    </div>
  );
}
