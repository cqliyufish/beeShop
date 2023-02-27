import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  UserImage,
  User,
  Buttom,
  DelButtom,
} from "./userList.style";
import { DataGrid } from "@material-ui/data-grid";
import { userRequest } from "requsetMethod";
import { delUser } from "redux/apiCalls";
import { useDispatch } from "react-redux";

function UserList() {
  const [users, setUsers] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("user");
        setUsers(res.data);
        console.log("users", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);
  const dispatch = useDispatch();

  const DelUser = (id) => {
    delUser(dispatch, id);
  };

  ///////////////////////////////////////// Column definition /////////////////
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <User>
            <UserImage src={params.row.img || PF + "noAvatar.png"} alt="" />
            {params.row.username}
          </User>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <Buttom>Edit</Buttom>
            </Link>
            <DelButtom onClick={() => DelUser(params.row._id)} />
          </>
        );
      },
    },
  ];
  ///////////////////////////////////////// Component ////////////////////////////////////

  return (
    <Container>
      <DataGrid
        rows={users}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  );
}

export default UserList;
