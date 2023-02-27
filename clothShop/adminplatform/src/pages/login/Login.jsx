import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/apiCalls";
import {
  Conatiner,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  ButtonConatiner,
  Header,
} from "./login.style";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  /////////////////////////////////////////  login submit  /////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  //////////////////////////////////////////////////////////////////////////////
  return (
    <Conatiner>
      <Header>Bee Admin</Header>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonConatiner>
            <Button onClick={handleSubmit}>LOGIN</Button>
          </ButtonConatiner>
        </Form>
      </Wrapper>
    </Conatiner>
  );
}
