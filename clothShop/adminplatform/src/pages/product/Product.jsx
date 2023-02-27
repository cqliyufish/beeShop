import Chats from "component/chats/Chats";
import { productData } from "dummyData";
import React, { useState } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Right,
  Left,
  Top,
  Buttom,
  TitleContainer,
  Title,
  Button,
  InfoTop,
  InfoButtom,
  ProductImg,
  ProductName,
  Key,
  Value,
  Item,
  Option,
  Select,
  Input,
  FormRight,
  FormLeft,
  Form,
  Update,
  Label,
  UpdateImg,
  UpdateBtn,
} from "./product.style";
import PublishIcon from "@material-ui/icons/Publish";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateProducts } from "redux/apiCalls";

import app from "firebase.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
function Product() {
  //////////////////////////////////// find product from redux //////////////////////////////////////////

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) => {
    return state.product.products.find((p) => p._id === productId);
  });

  //////////////////////////////////// update //////////////////////////////////////////
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [array, setArray] = useState({ categories: [], size: [], color: [] });
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    // if (e.target.name === "inStock") {
    //   setInputs((prev) => ({
    //     ...prev,
    //     [e.target.name]: e.target.value === "true",
    //   }));
    // } else {
    //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // }
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  /////////////////////////////////  category change handler ////////////////////////////////////
  const handleArray = (e) => {
    setArray((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.split(","),
    }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    let newproduct;
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
          // console.log("Upload is " + progress + "% done");
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
            newproduct = { ...inputs, img: downloadURL, _id: productId };
            for (var i in array) {
              if (array[i].length > 0) {
                newproduct[i] = array[i];
              }
            }
            updateProducts(dispatch, newproduct, productId);
            nav("/products");
          });
        }
      );
    } else {
      newproduct = { ...inputs, _id: productId };
      newproduct["img"] = product.img;
      for (var i in array) {
        if (array[i].length > 0) {
          newproduct[i] = array[i];
        }
      }
      updateProducts(dispatch, newproduct, productId);
      nav("/products");
    }
  };

  //////////////////////////////////// UI //////////////////////////////////////////

  return (
    <Container>
      <TitleContainer>
        <Title>Product</Title>
        <Link to="/newproduct">
          <Button>Create</Button>
        </Link>
      </TitleContainer>
      <Top>
        <Left>
          <Chats data={productData} title="Sales Performance" dataKey="Sales" />
        </Left>
        <Right>
          <InfoTop>
            <ProductImg alt="" src={product.img} />
            <ProductName>{product.title}</ProductName>
          </InfoTop>
          <InfoButtom>
            <Item>
              <Key>id:</Key>
              <Value>{product._id}</Value>
            </Item>
            <Item>
              <Key>sales:</Key>
              <Value>{product.price}</Value>
            </Item>

            <Item>
              <Key>in stock:</Key>
              <Value>{product.inStock}</Value>
            </Item>
          </InfoButtom>
        </Right>
      </Top>
      <Buttom>
        <Form>
          <FormLeft>
            <Label>Product Title</Label>
            <Input
              type="text"
              placeholder={product.title}
              name="title"
              onChange={handleChange}
            />
            <Label>Product Price</Label>
            <Input
              type="number"
              name="price"
              placeholder={product.price}
              onChange={handleChange}
            />
            <Label>Size</Label>
            <Input
              type="text"
              name="size"
              placeholder={product.size}
              onChange={handleArray}
            />
            <Label>Color</Label>
            <Input
              type="text"
              name="color"
              placeholder={product.color}
              onChange={handleArray}
            />
            <Label>Categories</Label>
            <Input
              type="text"
              name="categories"
              placeholder={product.categories}
              onChange={handleArray}
            />
            <Label>Product Desc</Label>
            <Input
              type="text"
              placeholder={product.desc}
              name="desc"
              onChange={handleChange}
            />
            <Label>In Stock</Label>
            <Select
              name="inStock"
              id="idStock"
              placeholder={product.inStock}
              onChange={handleChange}
            >
              <Option value={true}>yes</Option>
              <Option value={false}>no</Option>
            </Select>
          </FormLeft>

          <FormRight>
            <Update>
              <UpdateImg
                alt=""
                src={file ? URL.createObjectURL(file) : product.img}
              />
              <Label htmlFor="file">
                <PublishIcon style={{ cursor: "pointer" }} />
              </Label>
              <Input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Update>
            <UpdateBtn onClick={handleClick}>update</UpdateBtn>
          </FormRight>
        </Form>
      </Buttom>
    </Container>
  );
}
export default Product;
