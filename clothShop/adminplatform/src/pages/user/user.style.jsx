import styled from "styled-components";
export const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

export const Wrapper = styled.div``;

////////////////////////////////////  top  //////////////////////////////////////
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1``;
export const Button = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: teal;
`;
////////////////////////////////////  bottom  //////////////////////////////////////

export const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

////////////////////////////////////  User Show  //////////////////////////////////////

export const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
export const UserShowTopImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const UserShowUserName = styled.span`
  font-weight: 600;
`;
export const UserShowUserTitle = styled.span`
  font-weight: 300;
`;
////////////////////////////////////  User Show Buttom //////////////////////////////////////

export const UserShowBottom = styled.div`
  margin-top: 20px;
`;
export const UserShowBottomTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(183, 181, 181);
`;
export const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #444;
`;
export const UserShowInfoTitle = styled.span`
  margin-left: 10px;
`;

////////////////////////////////////  User Update   //////////////////////////////////////
export const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  margin-left: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FormLeft = styled.div``;
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormLabel = styled.label`
  margin-bottom: 5px;
`;
export const FormInput = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;

  font-size: 14px;
  padding-left: 5px;
`;

export const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
