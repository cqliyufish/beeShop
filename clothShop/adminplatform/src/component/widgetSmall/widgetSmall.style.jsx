import styled from "styled-components";
export const Container = styled.div`
  flex: 1;
  margin-right: 20px;
  padding: 20px;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
export const List = styled.ul``;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
export const Image = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;

  border-radius: 50%;
  object-fit: cover;
`;
export const User = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserName = styled.span`
  font-weight: 600;
`;
export const UserTitle = styled.span`
  font-weight: 300;
`;
export const Buttom = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;
