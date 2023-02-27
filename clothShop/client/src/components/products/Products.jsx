import React, { useEffect, useState } from "react";
import { popularProducts } from "data";
import { Container } from "./Products.style";
import ProductItem from "./productItem/ProductItem";
import axios from "axios";

export default function Products({ cat, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  //get products
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        cat
          ? `http://localhost:8080/api/products?category=${cat}`
          : "http://localhost:8080/api/products"
      );
      setProducts(res.data);
    };
    getProducts();
  }, [cat]);

  //filter products by user set filters
  useEffect(() => {
    //Object.entries(filters)将filters由对象转化为array [[color, red],[size, s]]
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(
            (
              [key, value] //[key, value]解构
            ) => item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  // sort the products by user sort
  // console.log("products", products);
  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  ///////////////////////////////////////  UI  ////////////////////////////////////////
  return (
    <Container>
      {cat
        ? filterProducts.map((item) => (
            <ProductItem key={item._id} product={item} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <ProductItem key={item._id} product={item} />)}
    </Container>
  );
}
