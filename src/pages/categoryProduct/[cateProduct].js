import RootLayout from "@/components/Layout/RootLayout";
import React from "react";
import ProductCard from "@/components/UI/ProductCard";

export default function CategoryProduct({ data }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px 100px",
        padding: "50px",
      }}
    >
      {data?.map((d) => (
        <ProductCard data={d} key={d._id} />
      ))}
    </div>
  );
}

CategoryProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-server-beta.vercel.app/api/v1/all-category"
  );
  const product = await res.json();

  const paths = product.data?.map((p) => ({
    params: {
      cateProduct: `${p._id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-beta.vercel.app/api/v1/single-category/${params.cateProduct}`
  );
  const product = await res.json();
  return {
    props: {
      data: product.data.products,
    },
  };
};
