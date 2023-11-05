import RootLayout from "@/components/Layout/RootLayout";
import React from "react";
import ProductCard from "@/components/UI/ProductCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function PcBuilderProduct({ data }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px 100px",
          margin: "2rem",
        }}
      >
        {data.data.products.map((p) => (
          <ProductCard key={p._id} data={p} />
        ))}
      </div>
    </main>
  );
}

PcBuilderProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-beta.vercel.app/api/v1/single-category/${params.productId}`
  );
  const repo = await res.json();
  return { props: { data: repo } };
}
