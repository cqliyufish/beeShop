import React, { useEffect, useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  Container,
  Title,
  List,
  Item,
  Image,
  User,
  UserName,
  UserTitle,
  Buttom,
} from "./widgetSmall.style";
import { userRequest } from "requsetMethod";

function WidgetSmall() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [users, setUsers] = useState([]);
  ////////////////////////////////////// get users from DB ////////////////////////////////////////

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("user/?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  ////////////////////////////////////// UI ////////////////////////////////////////
  return (
    <Container>
      <Title>New Join User</Title>
      <List>
        {users.map((user) => (
          <Item key={user._id}>
            <Image src={user.img || PF + "noAvatar.png"} />
            <User>
              <UserName>{user.username}</UserName>
              <UserTitle>Software Engineer</UserTitle>
            </User>
            <Buttom>
              <VisibilityIcon style={{ marginRight: "5px" }} />
              Display
            </Buttom>
          </Item>
        ))}
      </List>
    </Container>
  );
}

export default WidgetSmall;
