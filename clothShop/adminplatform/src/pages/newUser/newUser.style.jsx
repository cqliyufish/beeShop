import styled from "styled-components";
export const Container = styled.div`
  flex: 4;
`;
export const Title = styled.h1``;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Item = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
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
export const Gender = styled.div`
  ${Input} {
    vertical-align:middle;  
    padding: 0px;
    margin-right:5px;


  },
  ${Label} {
    margin-right:10px;
    font-size: 18px;
    color: #555;
    vertical-align:middle;    
    padding: 0px;

  },
`;
export const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`;
export const Option = styled.option``;
export const Buttom = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;
