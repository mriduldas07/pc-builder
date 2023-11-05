import RootLayout from "@/components/Layout/RootLayout";
import PcBuilderProduct from "@/components/UI/PcBuilderProduct";
import { useRouter } from "next/router";
import React from "react";

export default function PcBuilderPage({ data }) {
  const router = useRouter();
  //   console.log(data.data);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "600",
            margin: "15px 0",
            textAlign: "center",
          }}
        >
          Pc Builder - Build Your Own Computer - PC HUT
        </h1>
        <div
          style={{
            background: "gray",
            color: "white",
            padding: "2px 20rem",
            margin: "15px 0",
            textAlign: "center",
          }}
        >
          Core components
        </div>
        <div
          style={{
            margin: "20px 0",
          }}
        >
          {data?.data.map((d) => (
            <PcBuilderProduct key={d._id} data={d} />
          ))}
        </div>
      </div>
    </div>
  );
}

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://pc-builder-server-beta.vercel.app/api/v1/all-category"
  );
  const repo = await res.json();
  return { props: { data: repo } };
}
