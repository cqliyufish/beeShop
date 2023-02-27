import styled from "styled-components";
import { mobile } from "responsive.js";

export const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

/////////////////////////////////   left  /////////////////////////////////////////

export const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;
export const Logo = styled.h1``;
export const Desc = styled.p`
  margin: 20px 0;
`;
export const IconContainer = styled.div`
  display: flex;
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 50%;

  background-color: #${(props) => props.bg};
  color: white;
`;
/////////////////////////////////   center  /////////////////////////////////////////

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  list-style: none;
`;
export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
/////////////////////////////////   right  /////////////////////////////////////////

export const Right = styled.div`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const ContactItem = styled.div`
  display: flex;

  margin-bottom: 30px;
`;
