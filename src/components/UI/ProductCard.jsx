import React from "react";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Meta } = Card;
const App = ({ data }) => (
  <Link href={`productDetails/${data._id}`}>
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <Image alt="cardImage" width={240} height={100} src={data.image} />
      }
    >
      <Meta title={data.name} description={data.status} />
      <h2>{data.category.category}</h2>
      <h2>Price: {data.price} Tk</h2>
      <h2>Rating: {data.rating}</h2>
    </Card>
  </Link>
);
export default App;
