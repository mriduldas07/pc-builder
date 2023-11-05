import Link from "next/link";
import React from "react";

export default function PcBuilderProduct({ data }) {
  const { category, _id } = data || {};
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "5px",
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
          lol
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
