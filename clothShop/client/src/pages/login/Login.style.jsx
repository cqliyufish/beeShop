import styled from "styled-components";
import { Link } from "react-router-dom";

import { mobile } from "responsive.js";

export const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: pink;
`;
export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "90%" })}
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
export const ButtonConatiner = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  color: white;
  background-color: teal;
  margin-bottom: 10px;
  margin-right: 20px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
export const LinkTo = styled(Link)`
  margin: 10px 0;
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  color: inherit;
`;
export const Error = styled.span`
  color: red;
`;
