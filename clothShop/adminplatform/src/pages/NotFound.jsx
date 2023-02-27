import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
function NotFound() {
  return (
    <Container>
      <h1>404 Not Found</h1>
    </Container>
  );
}

export default NotFound;
