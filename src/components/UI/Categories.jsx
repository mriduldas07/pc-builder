import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Categories() {
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
  data?.data?.forEach((element) => {
    category.push(element);
  });
  return (
    <div
      style={{
        margin: "50px 5px 0px 5px",
        display: "flex",
        columnGap: "4rem",
        rowGap: "2rem",
        flexWrap: "wrap",
      }}
    >
      {category.map((c) => (
        <div
          key={c._id}
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            fontSize: "24px",
            fontWeight: "600",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          <Link href={`/categoryProduct/${c._id}`}>{c.category}</Link>
        </div>
      ))}
    </div>
  );
}
