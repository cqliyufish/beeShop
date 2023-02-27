import styled from "styled-components";
import { mobile } from "responsive.js";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "0", flexDirection: "column" })}
`;
