import React from "react";
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  SearchContainer,
  Language,
  Input,
  Logo,
  MenuItem,
  Search,
  LinkTo,
} from "./Navbar.style";
import { Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import { logOut } from "redux/user/userRedux";
import { useDispatch } from "react-redux";
import { selectCartCount } from "redux/cart/cartSelector";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
export default function Navbar() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  const handleLogout = async () => {
    localStorage.removeItem("persist:root");
    dispatch(logOut());
  };

  ///////////////////////////////////////////////////////////
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <LinkTo to="/">
            <Logo>BeeShop.</Logo>
          </LinkTo>
        </Center>
        <Right>
          {!user && (
            <>
              <LinkTo to="/register">
                <MenuItem>Register</MenuItem>
              </LinkTo>
              <LinkTo to="/login">
                <MenuItem>Sign in</MenuItem>
              </LinkTo>
            </>
          )}
          <MenuItem>
            <LinkTo to="/cart">
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </LinkTo>
          </MenuItem>
          {user && (
            <MenuItem>
              <LinkTo to="/profile">
                <PermIdentityIcon />
              </LinkTo>
            </MenuItem>
          )}
          {user && (
            <MenuItem>
              <ExitToAppIcon onClick={handleLogout} />
            </MenuItem>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
}
