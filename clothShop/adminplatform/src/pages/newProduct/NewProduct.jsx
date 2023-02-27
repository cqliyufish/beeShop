import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { addProducts } from "redux/apiCalls";
import {
  Container,
  Title,
  Form,
  Input,
  Item,
  Label,
  Select,
  Option,
  Button,
  Error,
} from "./newProduct.style";
import app from "firebase.js";
function NewProduct() {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({});
  const [array, setArray] = useState({ categories: [], size: [], color: [] });
  const [err, setErr] = useState(false);

  /////////////////////////////////  input change handler ////////////////////////////////////

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  /////////////////////////////////  category change handler ////////////////////////////////////
  const handleArray = (e) => {
    setArray((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.split(","),
    }));
  };

  /////////////////////////////////  submit handler ////////////////////////////////////

  const handleClick = (e) => {
    e.preventDefault();
    if (!file) {
      setErr(true);
    }
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // const product = { ...inputs, img: downloadURL, categories: cat };

          const product = { ...inputs, img: downloadURL, ...array };
          console.log("product", product);
          addProducts(dispatch, product);
          setErr(false);
        });
      }
    );
  };
  /////////////////////////////////  UI  ////////////////////////////////////
  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <Item>
          <Label>Image</Label>
          <Input
            type="file"
            id="file"
            style={{ border: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          {err && <Error>choose a image</Error>}
        </Item>
        <Item>
          <Label>Title</Label>
          <Input type="text" name="title" onChange={handleChange} />
        </Item>
        <Item>
          <Label>Price</Label>
          <Input type="number" name="price" onChange={handleChange} />
        </Item>
        <Item>
          <Label>Color</Label>
          <Input type="text" name="color" onChange={handleArray} />
        </Item>
        <Item>
          <Label>Size</Label>
          <Input type="text" name="size" onChange={handleArray} />
        </Item>

        <Item>
          <Label>Categories</Label>
          <Input type="text" name="categories" onChange={handleArray} />
        </Item>
        <Item>
          <Label>Desc</Label>
          <Input type="text" name="desc" onChange={handleChange} />
        </Item>
        <Item>
          <Label>Stock</Label>
          <Select onChange={handleChange} name="inStock">
            <Option value="true">Yes</Option>
            <Option value="false">No</Option>
          </Select>
        </Item>
        <Button onClick={handleClick}>Create</Button>
      </Form>
    </Container>
  );
}

export default NewProduct;
