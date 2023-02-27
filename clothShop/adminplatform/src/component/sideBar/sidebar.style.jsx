import styled from "styled-components";
import { Link } from "react-router-dom";
export const LinkTo = styled(Link)`
  color: inherit;
`;

export const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
  background-color: rgb(251, 251, 255);
`;
export const Wrapper = styled.div`
  color: #555;
  padding: 20px;
`;
export const Menu = styled.div`
  margin-bottom: 10px;
`;
export const Title = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
export const List = styled.ul`
  padding: 5px;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) =>
    props.active ? "rgb(228, 228, 250)" : "none"};
  &:hover {
    background-color: rgb(228, 228, 250);
  }
`;
export const Icon = styled.div`
  margin-right: 5px;
  font-size: 20px !important;
  vertical-align: top;
`;
