import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h1``;
export const Button = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
export const Top = styled.div`
  display: flex;
`;
export const Left = styled.div`
  flex: 1;
`;
export const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const InfoTop = styled.div`
  display: flex;
`;
export const ProductImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
export const ProductName = styled.span`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
export const Item = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
export const Key = styled.span``;
export const Value = styled.span`
  font-weight: 300;
`;

export const InfoButtom = styled.div`
  margin-top: 10px;
`;

export const Buttom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;
export const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  color: gray;
`;
export const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Select = styled.select``;
export const Option = styled.option``;
export const Update = styled.div`
  display: flex;
  align-items: center;
`;
export const UpdateBtn = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
export const UpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
