import React from "react";
import {
  Center,
  IconContainer,
  Container,
  Left,
  Logo,
  Desc,
  Right,
  Icon,
  Title,
  List,
  ListItem,
  ContactItem,
} from "./Footer.style";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import RoomIcon from "@material-ui/icons/Room";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>BeeShop</Logo>
        <Desc>
          Discover the latest collections from the top designers at northern
          california's largest online shop
        </Desc>
        <IconContainer>
          <Icon bg="3B5999">
            <FacebookIcon />
          </Icon>
          <Icon bg="E4405F">
            <InstagramIcon />
          </Icon>
          <Icon bg="55ACEE">
            <TwitterIcon />
          </Icon>
        </IconContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man</ListItem>
          <ListItem>Woman</ListItem>
          <ListItem>Kid</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} />
          8888 Artist Walk, San Jose 98888
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +1 234 432 2222
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px" }} />
          beeshop@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
}
