import { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import AppHeader from "@/components/admin/AppHeader";
import SliderApp from "@/components/admin/SliderApp";

export const metadata: Metadata = {
  title: "Admin shopShoes",
  description: "Chào mừng đến với trang admin",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Layout>
            <AppHeader />
            <Content>
              <Layout>
                <Sider
                  theme="light"
                  style={{
                    position: "fixed",
                    top: "60px",
                    borderRight: "1px solid #f1f1f1",
                    height: "calc(100vh - 60px)",
                  }}
                >
                  <SliderApp collapsed={false} />
                </Sider>
                <Layout
                  style={{
                    marginLeft: "250px",
                  }}
                >
                  <Content
                    style={{
                      padding: "16px",
                      minHeight: "calc(100vh - 60px)",
                    }}
                  >
                    {children}
                  </Content>
                </Layout>
              </Layout>
            </Content>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
