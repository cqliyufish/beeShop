import React from "react";
import { Container, Image, Info, Title, Btn } from "./CategoryItem.style";
import { Link } from "react-router-dom";

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Btn>Shop Now</Btn>
        </Info>
      </Link>
    </Container>
  );
}
