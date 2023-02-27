import styled from "styled-components";
import { mobile } from "responsive.js";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: calc(100vh - 90px);
  width: 100%;
  display: flex;
  ${mobile({ display: "none" })}
`;
export const Wrapper = styled.div`
  display: flex;
  height: 100%;

  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
export const Slide = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

export const Image = styled.img`
  height: 95%;
  ${"" /* width: 90%; */}
  object-fit: cover;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Btn = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Arrow = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: auto;
  background-color: #fff7f7;

  opacity: 0.5;
  cursor: pointer;
`;
