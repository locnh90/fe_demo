// src/app/components/SearchAndAdd.tsx

"use client";
import React, { useState } from "react";
import {  Space, Button, Typography } from "antd";
import CreateKichCo from "./CreateKichCo";
import SearchItem from "@/app/components/Search";
const { Title } = Typography;

const HeaderKichCo = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsCreateModalOpen(true);
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title level={2}>Danh sách kích cỡ</Title>
          {/* Tiêu đề */}
          <SearchItem title={"Nhập tên kích cỡ"} />
          <Button type="primary" onClick={handleOpenModal}>
            Thêm mới
          </Button>
        </div>
      </Space>
      <CreateKichCo
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
      />
    </>
  );
};

export default HeaderKichCo;
