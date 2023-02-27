import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/apiCalls";
import {
  Conatiner,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  LinkTo,
  Error,
  ButtonConatiner,
} from "./Login.style";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  /////////////////////////////////////////  login submit  /////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  //////////////////////////////////////////////////////////////////////////////
  return (
    <Conatiner>
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
            <Button onClick={handleSubmit} disabled={isFetching}>
              LOGIN
            </Button>
          </ButtonConatiner>

          {error && <Error>Something Wrong...</Error>}
          <LinkTo>Forget Password?</LinkTo>
          <LinkTo to="/register">Creat A New Account</LinkTo>
        </Form>
      </Wrapper>
    </Conatiner>
  );
}
