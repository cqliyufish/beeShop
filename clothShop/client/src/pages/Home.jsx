import React from "react";
import Annocement from "components/annocement/Annocement";
import Category from "components/category/Category";
import Navbar from "components/navbar/Navbar";
import Products from "components/products/Products";
import Slider from "components/slider/Slider";
import Newsletter from "components/newsletter/Newsletter";
import Footer from "components/footer/Footer";
export default function Home() {
  return (
    <div>
      <Annocement />
      <Navbar />
      <Slider />
      <Category />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}
