import React from "react";
import { Container } from "./Category.style";
import CategoryItem from "./categoryItem/CategoryItem";
import { categories } from "data";
export default function Category() {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem key={category.id} item={category} />
      ))}
    </Container>
  );
}
