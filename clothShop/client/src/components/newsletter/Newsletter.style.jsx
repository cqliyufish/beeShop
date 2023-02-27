import styled from "styled-components";
import { mobile } from "responsive.js";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 60vh;
  background-color: #fcf5f5;
`;
export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 70px;
`;
export const Desc = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 50%;
  height: 40px;
  border: 1px solid lightgray;
  background-color: #fff;
  ${mobile({ width: "80%" })}
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
export const Btn = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
