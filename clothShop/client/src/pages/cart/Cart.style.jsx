import styled from "styled-components";
import { mobile } from "responsive.js";

export const Conatiner = styled.div``;
export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;
export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

//////////////////////////////////   Top   /////////////////////////////////////

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TopBtn = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border: ${(props) => props.type === "filled" && "none"};
`;

export const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
export const TopText = styled.span`
  margin: 0 10px;
  cursor: pointer;
  text-decoration: underline;
`;
//////////////////////////////////   Bottom   /////////////////////////////////////
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
export const Info = styled.div`
  flex: 3;
`;
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 20px;
`;
export const ProductName = styled.div``;
export const ProductId = styled.div``;
export const ProductColor = styled.div`
  display: flex;
`;
export const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;

  background-color: ${(props) => props.color};
`;
export const ProductSize = styled.div``;

//////////////////////////////////   Price Detail   /////////////////////////////////////
export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "10px",
  })}
`;
export const PriceContainer = styled.div`
  dispaly: flex;
  flex-direction: column;
  ${mobile({ width: "50%" })}
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ justifyContent: "center", marginBottom: "0" })}
`;

export const ProductAmount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
export const ProductPrice = styled.div`
  text-align: center;

  font-size: 30px;
  font-weight: 300;
`;
export const Clicks = styled.div`
  margin-top: 20px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "50%",
    flexDirection: "column",
    alignItems: "center",
    margin: "0",
  })}
`;
export const Click = styled.button`
  text-decoration: underline;
  color: black;
  background-color: white;
  border: none;
`;
//////////////////////////////////   Summary   /////////////////////////////////////
export const Summary = styled.div`
  flex: 1;
  padding: 20px;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  height: 40vh;
`;
export const SummaryTitle = styled.h1`
  font-weight: 200;
`;
export const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;

  font-size: ${(props) => props.type === "total" && "24px"};
  font-weight: ${(props) => props.type === "total" && "500"};
`;
export const SummaryItemText = styled.span``;
export const SummaryItemPrice = styled.span``;
export const SummaryBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
