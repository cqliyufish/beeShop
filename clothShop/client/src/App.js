import Cart from "pages/cart/Cart";
import Home from "pages/Home";
import Login from "pages/login/Login";
import Product from "pages/product/Product";
import ProductList from "pages/productList/ProductList";
import Register from "pages/register/Register";
import Success from "pages/success/Success";
import User from "pages/user/User";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" replace={true} /> : <Register />}
      />
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace={true} /> : <Login />}
      />
      <Route
        path="/profile"
        element={!user ? <Navigate to="/" replace={true} /> : <User />}
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
