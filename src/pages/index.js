import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "@/components/Layout/RootLayout";
import ProductCard from "@/components/UI/ProductCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ category }) {
  const data = category?.data;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px 100px",
        }}
      >
        {data?.map((d) => (
          <ProductCard data={d} key={d._id} />
        ))}
      </div>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-beta.vercel.app/api/v1/all-products"
  );
  const category = await res.json();
  return {
    props: {
      category,
    },
  };
};
