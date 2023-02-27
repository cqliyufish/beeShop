import React from "react";
import Navbar from "components/navbar/Navbar";
import Newsletter from "components/newsletter/Newsletter";
import Footer from "components/footer/Footer";
import { Container, Wrapper, Title } from "./success.style";
import Annocement from "components/annocement/Annocement";
import { useEffect } from "react";
import { clearCart } from "redux/cart/cartRedux";
import { useDispatch } from "react-redux";
export default function Success() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCart());
  }, []);
  return (
    <Container>
      <Annocement />
      <Navbar />
      <Wrapper>
        <Title>Your order is processing...</Title>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
