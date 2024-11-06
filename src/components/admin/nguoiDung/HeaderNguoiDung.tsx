// src/app/components/SearchAndAdd.tsx

"use client";
import React, { useState } from "react";
import {  Space, Button, Typography } from "antd";
import SearchItem from "@/app/components/Search";
import CreateNguoiDung from "./CreateNguoiDung";
const { Title } = Typography;

const HeaderNguoiDung = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsCreateModalOpen(true);
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title level={2}>Danh sách người dùng</Title>
          {/* Tiêu đề */}
          <SearchItem title={"Nhập tên người dùng"} />
          <Button type="primary" onClick={handleOpenModal}>
            Thêm mới
          </Button>
        </div>
      </Space>
      <CreateNguoiDung
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
      />
    </>
  );
};

export default HeaderNguoiDung;
