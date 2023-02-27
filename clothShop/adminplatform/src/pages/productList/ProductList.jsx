import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, delProducts } from "redux/apiCalls";

import { Container, DelButtom, Buttom, Image, Item } from "./productList.style";

import { DataGrid } from "@material-ui/data-grid";

function ProductList() {
  const products = useSelector((state) => state.product.products);

  /////////////////////////////////// delete product ////////////////////////////////////////////
  const dispatch = useDispatch();

  const DelProduct = (id) => {
    console.log("id", id);
    delProducts(dispatch, id);
  };

  /////////////////////////////////// GET DATA FROM DB ////////////////////////////////////////////
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  /////////////////////////////////// Table Header Setting ////////////////////////////////////////////

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <Item>
            <Image src={params.row.img} alt="" />
            {params.row.title}
          </Item>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <Buttom>Edit</Buttom>
            </Link>
            <DelButtom onClick={() => DelProduct(params.row._id)} />
          </>
        );
      },
    },
  ];
  /////////////////////////////////// UI ////////////////////////////////////////////

  return (
    <Container>
      <DataGrid
        rows={products}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  );
}

export default ProductList;
