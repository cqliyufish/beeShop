import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { mobile } from "responsive.js";
import { Link } from "react-router-dom";

// screen size < 380px, navbar hidden
export const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  ${mobile({ padding: "10px 0" })}
`;

//////////////////////////////////////////   LEFT   ////////////////////////////////////////////////////////
export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  float: left;
  padding-left: 20px;
  border: 0px;

  ::placeholder {
    color: gray;
  }

  ${mobile({ width: "50px", paddingLeft: "5px" })}
`;

export const Search = styled(SearchIcon)`
  color: gray;
  font-size: 16px;
`;
//////////////////////////////////////////   Center   ////////////////////////////////////////////////////////

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
//////////////////////////////////////////   Right   ////////////////////////////////////////////////////////

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;
export const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;
export const LinkTo = styled(Link)`
  color: inherit;
`;
