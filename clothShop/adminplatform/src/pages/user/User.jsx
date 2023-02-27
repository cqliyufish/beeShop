import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PublishIcon from "@material-ui/icons/Publish";
import MapIcon from "@material-ui/icons/Map";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import {
  Container,
  Wrapper,
  Button,
  TitleContainer,
  Title,
  UserContainer,
  UserShow,
  UserUpdate,
  UserShowTop,
  UserShowBottom,
  UserShowTopImg,
  UserShowTopTitle,
  UserShowUserName,
  UserShowUserTitle,
  UserShowBottomTitle,
  UserShowInfo,
  UserShowInfoTitle,
  UserUpdateTitle,
  Form,
  FormLabel,
  FormLeft,
  FormRight,
  FormItem,
  FormInput,
  Upload,
  UploadImg,
  UpdateBtn,
} from "./user.style";
import { useDispatch } from "react-redux";
import { updateUser } from "redux/apiCalls";

import { userRequest } from "requsetMethod";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "firebase.js";

function User() {
  ///////////////////////// get User From DB///////////////////////////////////
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("user/" + userId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [userId]);

  //////////////////////////////////// update //////////////////////////////////////////
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  /////////////////////////////////  category change handler ////////////////////////////////////

  const handleClick = (e) => {
    e.preventDefault();
    let newUser;
    if (file) {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              break;
            case "running":
              break;
            default:
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            newUser = { ...inputs, img: downloadURL, _id: userId };
            updateUser(dispatch, newUser, userId);
            nav("/users");
          });
        }
      );
    } else {
      newUser = { ...inputs, _id: userId };
      newUser["img"] = user.img;
      updateUser(dispatch, newUser, userId);
      nav("/users");
    }
  };

  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>Edit User</Title>
          <Link to="/newUser">
            <Button>Create</Button>
          </Link>
        </TitleContainer>
        <UserContainer>
          <UserShow>
            <UserShowTop>
              <UserShowTopImg src={user.img || PF + "noAvatar.png"} alt="" />
              <UserShowTopTitle>
                <UserShowUserName>{user.username}</UserShowUserName>
                <UserShowUserTitle>{user.job || ""}</UserShowUserTitle>
              </UserShowTopTitle>
            </UserShowTop>
            <UserShowBottom>
              <UserShowBottomTitle>Account Details</UserShowBottomTitle>
              <UserShowInfo>
                <PermIdentityIcon />
                <UserShowInfoTitle>{user.fullName || ""}</UserShowInfoTitle>
              </UserShowInfo>
              <UserShowInfo>
                <CalendarTodayIcon />
                <UserShowInfoTitle>{user.birthday || ""}</UserShowInfoTitle>
              </UserShowInfo>
              <UserShowBottomTitle>Contact Details</UserShowBottomTitle>
              <UserShowInfo>
                <PhoneAndroidIcon />
                <UserShowInfoTitle>{user.phone || ""}</UserShowInfoTitle>
              </UserShowInfo>
              <UserShowInfo>
                <MailOutlineIcon />
                <UserShowInfoTitle>{user.email}</UserShowInfoTitle>
              </UserShowInfo>
              <UserShowInfo>
                <MapIcon />
                <UserShowInfoTitle>{user.address || ""}</UserShowInfoTitle>
              </UserShowInfo>
            </UserShowBottom>
          </UserShow>
          <UserUpdate>
            <UserUpdateTitle>Edit</UserUpdateTitle>
            <Form>
              <FormLeft>
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormInput
                    onChange={handleChange}
                    type="text"
                    name="userName"
                    placeholder={user.username}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormInput
                    onChange={handleChange}
                    type="text"
                    name="fullName"
                    placeholder={user.fullName || ""}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel>Birthday</FormLabel>
                  <FormInput
                    onChange={handleChange}
                    type="text"
                    name="birthday"
                    placeholder={user.birthday || ""}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormInput
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder={user.email}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormInput
                    onChange={handleChange}
                    type="text"
                    name="phone"
                    placeholder={user.phone || ""}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormInput
                    name="address"
                    onChange={handleChange}
                    type="text"
                    placeholder={user.address || ""}
                  />
                </FormItem>
              </FormLeft>
              <FormRight>
                <Upload>
                  <UploadImg
                    src={file ? URL.createObjectURL(file) : user.img}
                    alt=""
                  />
                  <FormLabel htmlFor="file">
                    <PublishIcon style={{ cursor: "pointer" }} />
                  </FormLabel>
                  <FormInput
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </Upload>
                <UpdateBtn onClick={handleClick}>Update</UpdateBtn>
              </FormRight>
            </Form>
          </UserUpdate>
        </UserContainer>
      </Wrapper>
    </Container>
  );
}

export default User;
