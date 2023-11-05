import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Dropdowns from "../UI/Dropdowns";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href={`/`}>
          <h1
            style={{
              color: "white",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            PC HUT
          </h1>
        </Link>
        <Dropdowns />
        <Link href={`/pcBuilder`}>
          <h1
            style={{
              maxHeight: "40px",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              background: "#1677ff",
              padding: "0 15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            Pc builder
          </h1>
        </Link>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: "#F2F4F8",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        PC HUT @All rights to change anything
      </Footer>
    </Layout>
  );
};
export default RootLayout;
