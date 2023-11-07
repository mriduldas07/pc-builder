import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function PcBuilderProduct({ data }) {
  const { products } = useSelector((state) => state.pcbuilder);
  const { category, _id } = data || {};
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "5px",
        margin: "10px 0",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "18px",
            color: "blue",
            fontWeight: "500",
          }}
        >
          {category}
        </h1>
        <span
          style={{
            fontSize: "16px",
          }}
        >
          {products.map((p) => {
            const cateProduct = p.category === _id;
            if (cateProduct) {
              return p.name;
            }
          })}
        </span>
      </div>
      <div
        style={{
          border: "2px solid blue",
          padding: "5px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <Link href={`/pcBuilder/${_id}`}>
          <span
            style={{
              color: "blue",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Choose
          </span>
        </Link>
      </div>
    </div>
  );
}
