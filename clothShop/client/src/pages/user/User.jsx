import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PublishIcon from "@material-ui/icons/Publish";
import Annocement from "components/annocement/Annocement";
import Navbar from "components/navbar/Navbar";
import {
  Container,
  Wrapper,
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
import { useSelector } from "react-redux";

function User() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = useSelector((state) => state.user.currentUser).others;
  const userId = user._id;

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
            newUser = { ...inputs, img: downloadURL, userId };
            updateUser(dispatch, newUser, userId);
            nav("/profile");
          });
        }
      );
    } else {
      newUser = { ...inputs, userId };
      newUser["img"] = user.img;
      updateUser(dispatch, newUser, userId);
      nav("/profile");
    }
  };

  return (
    <Container>
      <Annocement />
      <Navbar />
      <Wrapper>
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
              <FormLabel>Shipping Address</FormLabel>
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
      </Wrapper>
    </Container>
  );
}

export default User;
