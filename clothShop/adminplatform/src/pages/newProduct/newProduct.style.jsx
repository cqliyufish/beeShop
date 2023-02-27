import styled from "styled-components";
export const Container = styled.div`
  flex: 4;
`;
export const Title = styled.h1``;
export const Form = styled.form`
  margin-top: 10px;
`;
export const Item = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Error = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: red;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;
export const Input = styled.input`
  height: 40px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`;
export const Option = styled.option``;
export const Button = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
