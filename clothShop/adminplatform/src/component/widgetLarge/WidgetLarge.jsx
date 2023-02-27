import React, { useState, useEffect } from "react";
import { userRequest } from "requsetMethod";
import { format } from "timeago.js";
import {
  Container,
  Title,
  Table,
  TableRow,
  TableHead,
  User,
  UserImage,
  UserName,
  Amount,
  Date,
  Status,
  Buttom,
} from "./widgetLarge.style";
function WidgetLarge() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [orders, setOrders] = useState([]);
  ////////////////////////////////////// get users from DB ////////////////////////////////////////

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("order");
        // console.log("get orders", res.data);
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);
  return (
    <Container>
      <Title>Latest transactions</Title>
      <Table>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
        {orders.map((order) => (
          <TableRow key={order._id}>
            <User>
              <UserImage src={order.user.img || PF + "noAvatar.png"} />
              <UserName> {order.user.username}</UserName>
            </User>
            <Date>{format(order.createdAt)}</Date>
            <Amount>${order.amount}</Amount>
            <Status>
              <Buttom type={order.status}>{order.status}</Buttom>
            </Status>
          </TableRow>
        ))}
      </Table>
    </Container>
  );
}

export default WidgetLarge;
