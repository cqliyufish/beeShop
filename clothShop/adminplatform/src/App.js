import SideBar from "component/sideBar/SideBar";
import TopBar from "component/topBar/TopBar";
import Home from "pages/home/Home";
import React from "react";
import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import UserList from "pages/userList/UserList";
import User from "pages/user/User";
import NewUser from "pages/newUser/NewUser";
import ProductList from "pages/productList/ProductList";
import Product from "pages/product/Product";
import NewProduct from "pages/newProduct/NewProduct";
import Developing from "pages/developing/Developing";
import NotFound from "pages/NotFound";
import Login from "pages/login/Login";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const is_admin = user?.others.isAdmin;
  return (
    <div>
      {is_admin && <TopBar />}
      <Container>
        {is_admin && <SideBar />}
        <Routes>
          <Route element={is_admin ? <Home /> : <Login />} exact path="/" />
          <Route
            path="/users"
            element={
              !is_admin ? <Navigate to="/" replace={true} /> : <UserList />
            }
          />
          <Route path="/user/:userId" element={<User />} />
          <Route
            path="/newUser"
            element={
              !is_admin ? <Navigate to="/" replace={true} /> : <NewUser />
            }
          />
          <Route
            path="/products"
            element={
              !is_admin ? <Navigate to="/" replace={true} /> : <ProductList />
            }
          />
          <Route
            path="/product/:productId"
            element={
              !is_admin ? <Navigate to="/" replace={true} /> : <Product />
            }
          />
          <Route
            path="/newProduct"
            element={
              !is_admin ? <Navigate to="/" replace={true} /> : <NewProduct />
            }
          />
          <Route
            path="/login"
            element={is_admin ? <Navigate to="/" replace={true} /> : <Login />}
          />
          <Route
            path="/others"
            element={
              !is_admin ? <Navigate to="/" replace={true} /> : <Developing />
            }
          />
          <Route
            path="*"
            element={
              !is_admin ? <Navigate to="/" replace={true} /> : <NotFound />
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
