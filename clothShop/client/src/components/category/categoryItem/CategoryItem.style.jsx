import styled from "styled-components";
import { mobile } from "responsive.js";

export const Container = styled.div`
  position: relative;

  flex: 1;
  margin: 3px;
  height: 70vh;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: white;
  font-size: 35px;
`;

export const Btn = styled.button`
  background-color: white;
  cursor: pointer;
  border: none;
  padding: 10px;
  font-size: 20px;
  font-weight: 400;
`;
