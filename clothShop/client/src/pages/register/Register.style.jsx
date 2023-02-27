import styled from "styled-components";
import { mobile } from "responsive.js";
import { Link } from "react-router-dom";

export const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: pink;
`;
export const Wrapper = styled.div`
  width: 40%;
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
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-bottom: 5px;
  color: white;
  background-color: teal;
`;
export const LinkTo = styled(Link)`
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  color: inherit;
`;
