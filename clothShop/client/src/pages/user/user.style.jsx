import styled from "styled-components";
import { mobile } from "responsive.js";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 100px;
  margin: 0px auto;
  width: 60%;
  ${mobile({ width: "90%", padding: "10px" })}
`;

////////////////////////////////////  User Update   //////////////////////////////////////

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;

export const FormLeft = styled.div`
  flex: 2;
  ${mobile({ flex: "1" })}
`;
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormLabel = styled.label`
  margin-top: 5px;
`;
export const FormInput = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 14px;
  padding-left: 5px;
  ${mobile({ width: "100%" })}
`;

export const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
export const Upload = styled.div`
  display: flex;
  align-items: center;
`;
export const UploadImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 10px;
  object-fit: cover;
`;
export const UpdateBtn = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: bold;
`;
