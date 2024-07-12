import RootLayout from "@/components/Layout/RootLayout";
import PcBuilderProduct from "@/components/UI/PcBuilderProduct";
import { useSelector } from "react-redux";

export default function PcBuilderPage({ data }) {
  const { products } = useSelector((state) => state.pcbuilder);
  return (
    <div style={{ color: "black" }}>
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px 0",
        }}
      >
        <button
          className="pcButton"
          style={{
            fontSize: "20px",
            background: "#1677FF",
            color: "white",
            padding: "5px 30px",
            borderRadius: "3px",
          }}
          disabled={products.length < 5}
        >
          Complete Build
        </button>
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
