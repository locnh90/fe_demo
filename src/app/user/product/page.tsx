import ProductSection from "@/components/user/product/ProductSection";
import ShopToolbar from "@/components/user/shop/ShopToolbar";
import SidebarWidget from "@/components/user/sidebar/SidebarWidget";
import { Layout } from "antd";
import { Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";

const ProductPage = () => {
  

  const contentStyle: React.CSSProperties = {
    paddingBottom:"100px",
    textAlign: "center",
    minHeight: 120,
    lineHeight: "20px",
    color: "#fff",
    backgroundColor: "#ffffff",
  };

  const siderStyle: React.CSSProperties = {
    paddingBottom:"100px",
    textAlign: "center",
    lineHeight: "20px",
    color: "#fff",
    backgroundColor: "#ffffff",
  };
  return (
    <Layout className="gap-5">
      <Sider width="40%" style={siderStyle}>
        <SidebarWidget />
      </Sider>
      <Content style={contentStyle}>
        <ShopToolbar />
        <ProductSection />
      </Content>
    </Layout>
  );
};

export default ProductPage;
