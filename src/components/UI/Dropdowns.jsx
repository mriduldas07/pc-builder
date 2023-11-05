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

  const category = [];
  data?.data.forEach((element) => {
    category.push(element);
  });

  const items = [
    {
      label: (
        <span>
          {category.map((c) => (
            <Link href={`/categoryProduct/${c._id}`} key={c._id}>
              <h3>{c.category}</h3>
            </Link>
          ))}
        </span>
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
