import React, { useEffect, useState } from "react";
import Newsletter from "components/newsletter/Newsletter";
import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import Annocement from "components/annocement/Annocement";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { publicRequest } from "requsetMethod";
import {
  Conatiner,
  Wrapper,
  Image,
  ImgContainer,
  InfoContainer,
  Title,
  Desc,
  Price,
  Filter,
  FilterContainer,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  AddContainer,
  AmountContainer,
  Amount,
  Btn,
} from "./Product.style";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "redux/cart/cartRedux";

////////////////////////////////////////////////////////////////////////////////
export default function Product() {
  // get current product page id
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const dispath = useDispatch();
  ////////////////////////////////////////////  get product request  ////////////////////////////////////

  useEffect(() => {
    const getProduct = async () => {
      const res = await publicRequest.get("/products/" + id);
      // console.log(res.data);
      setProduct(res.data);
    };
    getProduct();
  }, [id]);

  ////////////////////////////////////////////  quantity   ////////////////////////////////////
  const quantityHandle = (type) => {
    if (type === "add") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };
  ////////////////////////////////////////////  add to cart   ////////////////////////////////////

  const handleAddToCart = () => {
    dispath(addProduct({ ...product, quantity, size, color }));
  };
  ////////////////////////////////////////////////////////////////////////////////

  return (
    <Conatiner>
      <Navbar />
      <Annocement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((item) => (
                <FilterColor
                  color={item}
                  key={item}
                  onClick={() => setColor(item)}
                />
              ))}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((item) => (
                  <FilterSizeOption key={item}>{item}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => quantityHandle("remove")} />
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => quantityHandle("add")} />
            </AmountContainer>
            <Btn onClick={handleAddToCart}>ADD TO CART</Btn>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Conatiner>
  );
}
