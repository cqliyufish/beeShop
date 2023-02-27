import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  IconBage,
  Container,
  MenuItem,
  Wrapper,
  Left,
  Right,
  Logo,
} from "./topBar.style";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "redux/userRedux";

export default function TopBar() {
  const dispatch = useDispatch();
  ///////////////////////////////// Log out ////////////////////////////////////
  const handleLogout = async () => {
    localStorage.removeItem("persist:root");
    dispatch(logOut());
  };
  ///////////////////////////////// UI ////////////////////////////////////

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>BeeAdmin</Logo>
          </Link>
        </Left>
        <Right>
          <MenuItem>
            <NotificationsIcon />
            <IconBage>2</IconBage>
          </MenuItem>
          <MenuItem>
            <SettingsIcon />
          </MenuItem>
          <MenuItem>
            <LanguageIcon />
          </MenuItem>
          <ExitToAppIcon onClick={handleLogout} />
          {/* <UserImg alt="" src={noAvatar} /> */}
        </Right>
      </Wrapper>
    </Container>
  );
}
