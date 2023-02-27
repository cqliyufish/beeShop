import React from "react";

import SendIcon from "@material-ui/icons/Send";
import {
  Container,
  Btn,
  Input,
  InputContainer,
  Title,
  Desc,
} from "./Newsletter.style";
export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get the newest discount?</Desc>
      <InputContainer>
        <Input placeholder="Email" />
        <Btn>
          <SendIcon />
        </Btn>
      </InputContainer>
    </Container>
  );
}
