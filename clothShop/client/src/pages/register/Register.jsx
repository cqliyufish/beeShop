import React, { useRef } from "react";
import {
  Conatiner,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
  LinkTo,
} from "./Register.style";
import { register } from "redux/apiCalls";
import { useDispatch } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleClick = (e) => {
    e.preventDefault();

    if (confirmPassword.current.value !== password.current.value) {
      password.current.setCustomValidity("Password must be the same");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      register(dispatch, user);
    }
  };
  return (
    <Conatiner>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="username" ref={username} />
          <Input placeholder="email" ref={email} />
          <Input placeholder="password" ref={password} />
          <Input placeholder="confirm password" ref={confirmPassword} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
        <LinkTo to="/login">Already Have a Account</LinkTo>
      </Wrapper>
    </Conatiner>
  );
}
