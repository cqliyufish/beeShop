import React from "react";
import {
  Container,
  Title,
  Form,
  Input,
  Item,
  Label,
  Gender,
  Select,
  Option,
  Buttom,
} from "./newUser.style";
function newUser() {
  return (
    <Container>
      <Title>New User</Title>
      <Form>
        <Item>
          <Label>Username</Label>
          <Input type="text" placeholder="john" />
        </Item>
        <Item>
          <Label>Full Name</Label>
          <Input type="text" placeholder="john" />
        </Item>
        <Item>
          <Label>Email</Label>
          <Input type="email" placeholder="john@gmail.com" />
        </Item>
        <Item>
          <Label>Password</Label>
          <Input type="password" placeholder="password" />
        </Item>
        <Item>
          <Label>Phone</Label>
          <Input type="text" placeholder="+1 123 456 78" />
        </Item>
        <Item>
          <Label>Address</Label>
          <Input type="text" placeholder="New York | USA" />
        </Item>
        <Item>
          <Label>Gender</Label>
          <Gender>
            <Input type="radio" name="gender" id="male" value="male" />
            <Label for="male">Male</Label>

            <Input type="radio" name="gender" id="female" value="female" />
            <Label for="female">Female</Label>

            <Input type="radio" name="gender" id="other" value="other" />
            <Label for="other">Other</Label>
          </Gender>
        </Item>
        <Item>
          <Label>Active</Label>
          <Select name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
          <Buttom>Create</Buttom>
        </Item>
      </Form>
    </Container>
  );
}

export default newUser;
