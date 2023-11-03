import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const Dropdowns = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pc-builder-server-beta.vercel.app/api/v1/all-category")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  // console.log(data);

  const category = [];
  data?.data.forEach((element) => {
    category.push(element.category);
  });

  const items = [
    {
      label: (
        <Link href="">
          {category.map((c, i) => (
            <h3 key={i}>{c}</h3>
          ))}
        </Link>
      ),
      key: "0",
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Categories
          <DownOutlined />
        </Space>
      </a>
      {/* {isLoading && <p>Loading...</p>} */}
    </Dropdown>
  );
};
export default Dropdowns;
