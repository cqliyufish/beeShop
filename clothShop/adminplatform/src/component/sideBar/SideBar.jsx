import React, { useEffect, useState } from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from "@material-ui/icons/Timeline";

import {
  Container,
  Wrapper,
  Menu,
  Title,
  List,
  ListItem,
  Icon,
  LinkTo,
} from "./sidebar.style";

function SideBar() {
  const [btnArray, setBtnArray] = useState({
    btn11: false,
    btn12: false,
    btn13: false,
    btn21: false,
    btn22: false,
    btn23: false,
    btn24: false,
    btn31: false,
    btn32: false,
    btn33: false,
    btn41: false,
    btn42: false,
    btn43: false,
  });

  const toggleBtn = (btn) => {
    setBtnArray({ [btn]: !btnArray[btn] });
  };
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashbord</Title>
          <List>
            <LinkTo to="/others">
              <ListItem
                active={btnArray.btn11}
                onClick={() => toggleBtn("btn11")}
              >
                <Icon>
                  <LineStyleIcon />
                </Icon>
                Analytics
              </ListItem>
            </LinkTo>
            <LinkTo to="/">
              <ListItem
                active={btnArray.btn12}
                onClick={() => toggleBtn("btn12")}
              >
                <Icon>
                  <TimelineIcon />
                </Icon>
                Home
              </ListItem>
            </LinkTo>
            <LinkTo to="/others">
              <ListItem
                active={btnArray.btn13}
                onClick={() => toggleBtn("btn13")}
              >
                <Icon>
                  <TrendingUpIcon />
                </Icon>
                Sales
              </ListItem>
            </LinkTo>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <LinkTo to="/users">
              <ListItem
                active={btnArray.btn21}
                onClick={() => toggleBtn("btn21")}
              >
                <Icon>
                  <LineStyleIcon />
                </Icon>
                User
              </ListItem>
            </LinkTo>
            <LinkTo to="/products">
              <ListItem
                active={btnArray.btn22}
                onClick={() => toggleBtn("btn22")}
              >
                <Icon>
                  <TimelineIcon />
                </Icon>
                Products
              </ListItem>
            </LinkTo>
            <LinkTo to="/others">
              <ListItem
                active={btnArray.btn23}
                onClick={() => toggleBtn("btn23")}
              >
                <Icon>
                  <TrendingUpIcon />
                </Icon>
                Transactions
              </ListItem>
            </LinkTo>
            <LinkTo to="/others">
              <ListItem
                active={btnArray.btn24}
                onClick={() => toggleBtn("btn24")}
              >
                <Icon>
                  <TrendingUpIcon />
                </Icon>
                Reports
              </ListItem>
            </LinkTo>
          </List>
        </Menu>
        <Menu>
          <Title>Notification</Title>
          <List>
            <LinkTo to="/others">
              <ListItem
                active={btnArray.btn31}
                onClick={() => toggleBtn("btn31")}
              >
                <Icon>
                  <LineStyleIcon />
                </Icon>
                Mail
              </ListItem>
            </LinkTo>
            <LinkTo to="/others">
              <ListItem
                active={btnArray.btn32}
                onClick={() => toggleBtn("btn32")}
              >
                <Icon>
                  <TimelineIcon />
                </Icon>
                Feedback
              </ListItem>
            </LinkTo>
            <LinkTo to="/others">
              <ListItem
                active={btnArray.btn33}
                onClick={() => toggleBtn("btn33")}
              >
                <Icon>
                  <TrendingUpIcon />
                </Icon>
                Message
              </ListItem>
            </LinkTo>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <LinkTo to="/others">
              <ListItem
                active={btnArray.btn41}
                onClick={() => toggleBtn("btn41")}
              >
                <Icon>
                  <LineStyleIcon />
                </Icon>
                Manage
              </ListItem>
            </LinkTo>
            <LinkTo to="/others">
              <ListItem
                active={btnArray.btn42}
                onClick={() => toggleBtn("btn42")}
              >
                <Icon>
                  <TimelineIcon />
                </Icon>
                Analytics
              </ListItem>
            </LinkTo>
            <LinkTo to="/others">
              <ListItem
                active={btnArray.btn43}
                onClick={() => toggleBtn("btn43")}
              >
                <Icon>
                  <TrendingUpIcon />
                </Icon>
                Reports
              </ListItem>
            </LinkTo>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
}

export default SideBar;
