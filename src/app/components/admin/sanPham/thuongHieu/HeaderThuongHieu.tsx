
"use client";
import React, { useState } from "react";
import {  Space, Button, Typography } from "antd";
import CreateKichCo from "./CreateThuongHieu";
import SearchItem from "@/app/components/Search";
const { Title } = Typography;

const HeaderThuongHieu = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsCreateModalOpen(true);
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title level={2}>Danh sách thương hiệu</Title>
          {/* Tiêu đề */}
          <SearchItem title={"Nhập tên thương hiệu"} />
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

export default HeaderThuongHieu;
