import React from "react";
import Annocement from "components/annocement/Annocement";
import Navbar from "components/navbar/Navbar";
import Newsletter from "components/newsletter/Newsletter";
import Footer from "components/footer/Footer";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import {
  Conatiner,
  Wrapper,
  Title,
  Top,
  TopBtn,
  Bottom,
  ProductDetail,
  Info,
  Image,
  Details,
  Product,
  ProductName,
  ProductId,
  ProductColor,
  Color,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  SummaryBtn,
  Click,
  Clicks,
  PriceContainer,
} from "./Cart.style";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeProduct, addProduct, delProduct } from "redux/cart/cartRedux";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    const res = await axios.post("http://localhost:8080/api/checkout/payment", {
      cart,
    });
    window.location.href = res.data.url;
  };
  const removeItemHandle = (prodId) => {
    dispatch(removeProduct(prodId));
  };
  const subQuantity = (product) => {
    dispatch(delProduct({ ...product, quantity: 1 }));
  };
  const addQuantity = (product) => {
    dispatch(addProduct({ ...product, quantity: 1 }));
  };
  return (
    <Conatiner>
      <Annocement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopBtn>CONTINUE SHOPPING</TopBtn>
          </Link>

          <TopBtn type="filled" onClick={handleCheckout}>
            CKECKOUT NOW
          </TopBtn>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <>
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product Name:</b>
                        {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b>
                        {product._id}
                      </ProductId>
                      <ProductColor>
                        <b>Color:</b>
                        <Color color={product.color} />
                      </ProductColor>

                      <ProductSize>
                        <b>Size:</b>
                        {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>

                  <PriceDetail>
                    <PriceContainer>
                      <ProductAmountContainer>
                        <RemoveIcon onClick={() => subQuantity(product)} />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <AddIcon onClick={() => addQuantity(product)} />
                      </ProductAmountContainer>
                      <ProductPrice>
                        ${product.price * product.quantity}
                      </ProductPrice>
                    </PriceContainer>
                    <Clicks>
                      <Click>save for later</Click>
                      <Click onClick={() => removeItemHandle(product._id)}>
                        remove
                      </Click>
                    </Clicks>
                  </PriceDetail>
                </Product>
                <Hr />
              </>
            ))}
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 12</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ 12</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>

            <SummaryBtn onClick={handleCheckout}>CHECKOUT NOW</SummaryBtn>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Conatiner>
  );
}
