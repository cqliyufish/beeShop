import React, { useEffect, useState } from "react";

import Navbar from "components/navbar/Navbar";
import Annocement from "components/annocement/Annocement";

import {
  Conatiner,
  Title,
  Filter,
  FilterContainer,
  Select,
  Option,
  FilterText,
} from "./ProductList.style";
import Products from "components/products/Products";
import Newsletter from "components/newsletter/Newsletter";
import Footer from "components/footer/Footer";
import { useLocation } from "react-router-dom";

export default function ProductList() {
  // get current category name
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  // get user select size/color/sort
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };
  ////////////////////////////////////  UI  //////////////////////////////////////
  return (
    <Conatiner>
      <Navbar />
      <Annocement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilterChange}>
            <Option disabled selected>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>blue</Option>
            <Option>red</Option>
          </Select>
          <Select name="size" onChange={handleFilterChange}>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Conatiner>
  );
}
