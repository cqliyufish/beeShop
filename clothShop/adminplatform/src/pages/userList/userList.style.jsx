import styled from "styled-components";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export const Container = styled.div`
  flex: 4;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
`;
export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const Buttom = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 20px;
  background-color: #3bb0ff;
  color: white;
  cursor: pointer;
`;
export const DelButtom = styled(DeleteOutlineIcon)`
  cursor: pointer;
`;
