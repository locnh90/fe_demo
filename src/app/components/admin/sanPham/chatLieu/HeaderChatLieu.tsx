// src/app/components/SearchAndAdd.tsx

"use client";
import React, { useState } from "react";
import {  Space, Button, Typography } from "antd";
import SearchItem from "@/app/components/Search";
import CreateChatLieu from "./CreateChatLieu";
const { Title } = Typography;

const HeaderChatLieu = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsCreateModalOpen(true);
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title level={2}>Danh sách chất liệu</Title>
          {/* Tiêu đề */}
          <SearchItem title={"Nhập tên chất liệu"} />
          <Button type="primary" onClick={handleOpenModal}>
            Thêm mới
          </Button>
        </div>
      </Space>
      <CreateChatLieu
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
      />
    </>
  );
};

export default HeaderChatLieu;
