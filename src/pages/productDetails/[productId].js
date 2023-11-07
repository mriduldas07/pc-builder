import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import React from "react";

export default function ProductDetails({ data }) {
  const product = data?.data;

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        <div>
          <Image
            src={product?.image}
            width={400}
            height={300}
            alt="productImage"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            {product?.name}
          </h1>
          <h3
            style={{
              fontSize: "20px",
            }}
          >
            Price: {product?.price} Tk
          </h3>
          <h3
            style={{
              fontSize: "20px",
            }}
          >
            Status: {product?.status}
          </h3>
          <h3
            style={{
              fontSize: "20px",
            }}
          >
            Rating: {product?.rating}
          </h3>
        </div>
      </div>
      <div
        style={{
          margin: "50px 0",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "600",
          }}
        >
          {product?.name}
        </h1>
        <p
          style={{
            fontSize: "15px",
            padding: "10px 350px 10px 0",
          }}
        >
          {product?.description}
        </p>
      </div>
    </div>
  );
}

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-server-beta.vercel.app/api/v1/all-products"
  );
  const product = await res.json();

  const paths = product.data?.map((p) => ({
    params: {
      productId: `${p._id}`,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-beta.vercel.app/api/v1/single-product/${params.productId}`
  );
  const product = await res.json();
  return {
    props: {
      data: product,
    },
  };
};
