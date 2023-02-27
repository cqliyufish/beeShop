import styled from "styled-components";

export const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const Header = styled.div`
  font-size: 34px;
  padding-bottom: 20px;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
export const ButtonConatiner = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  color: white;
  background-color: teal;
  margin-bottom: 10px;
  margin-right: 20px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
