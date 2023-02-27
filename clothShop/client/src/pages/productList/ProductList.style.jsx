import styled from "styled-components";
import { mobile } from "responsive.js";

export const Conatiner = styled.div``;
export const Title = styled.h1`
  margin: 20px;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;

  margin: 20px;
  ${mobile({ margin: "10px" })}
`;
export const FilterText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ padding: "5px" })}
`;
export const Option = styled.option``;
