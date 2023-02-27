import styled from "styled-components";
import { mobile } from "responsive.js";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 100px;
  margin: 0px auto;
  width: 60%;
  ${mobile({ width: "90%", padding: "10px" })}
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
`;
