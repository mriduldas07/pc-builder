import React from "react";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToPcBuilder } from "@/redux/features/pcbuilder/pcBuilderSlice";
const { Meta } = Card;

const App = ({ data, cateId }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleOnclick = () => {
    dispatch(addToPcBuilder({ ...data, cateId }));
    router.push("/pcBuilder");
  };
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <Link href={`/productDetails/${data._id}`}>
          <Image alt="cardImage" width={240} height={100} src={data.image} />
        </Link>
      }
    >
      <Meta title={data.name} description={data.status} />
      <h2>{data.category.category}</h2>
      <h2>Price: {data.price} Tk</h2>
      <h2
        style={{
          marginBottom: "10px",
        }}
      >
        Rating: {data.rating}
      </h2>
      {router.pathname === "/pcBuilder/[productId]" && (
        <span
          style={{
            background: "#2C3A96",
            color: "white",
            padding: "4px 15px",
            borderRadius: "3px",
          }}
          onClick={handleOnclick}
        >
          Add To Builder
        </span>
      )}
    </Card>
  );
};
export default App;
