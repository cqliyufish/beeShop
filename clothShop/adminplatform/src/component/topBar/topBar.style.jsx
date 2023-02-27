import styled from "styled-components";
export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 9;

  width: 100%;
  height: 50px;
  background-color: #fff;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 100%;
`;

//////////////////////////////////////////
export const Left = styled.div``;
export const Logo = styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;
//////////////////////////////////////////

export const Right = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuItem = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;
export const IconBage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -5px;
  right: -2px;

  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: red;
  font-size: 10px;
  color: white;
`;
export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
