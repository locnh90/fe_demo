import React from "react";
import { Header } from "antd/es/layout/layout";
import { HeatMapOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
const AppHeader = () => {
  return (
    <Header className="!bg-slate-50 border-b border-[#f1f1f1] sticky top-0 z-10">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <HeatMapOutlined className="text-3xl" />
          <div>ShopShoes</div>
        </div>
        <div className="flex gap-3 items-center">
          <Avatar size={40} icon={<UserOutlined />} />
          <div>
            <p>Hi, Loc</p>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
