import styled from "styled-components";
import { mobile } from "responsive.js";

export const Conatiner = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;

////////////////////////////////////////////// left //////////////////////////////////////////////
export const ImgContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

////////////////////////////////////////////// right //////////////////////////////////////////////

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`;
export const Title = styled.h1`
  font-weight: 200;
`;
export const Desc = styled.p`
  margin: 20px 0;
`;
export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;
  ${mobile({ width: "100%", flexDirection: "column" })}
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 20px;

  background-color: ${(props) => props.color};
`;
export const FilterSize = styled.select`
  margin-left: 20px;
`;
export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 50%;
  ${mobile({ width: "100%" })}
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;

  font-weight: 700;
`;
export const Amount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  margin: 0 5px;
`;
export const Btn = styled.button`
  padding: 15px;
  background-color: #fff;
  border: 2px solid teal;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
  }
`;
