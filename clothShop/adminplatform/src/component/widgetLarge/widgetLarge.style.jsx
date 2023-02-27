import styled from "styled-components";
export const Container = styled.div`
  flex: 2;
  padding: 20px;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
export const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
export const TableRow = styled.tr``;
export const TableHead = styled.th`
  text-align: left;
`;
export const User = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
export const Amount = styled.td`
  font-weight: 300;
`;
export const Date = styled.td`
  font-weight: 300;
`;
export const Status = styled.td``;
export const Buttom = styled.button`
  border: none;
  padding: 5px 7px;
  border-radius: 10px;

  background-color: ${(props) => {
    if (props.type === "Pending") {
      return "rgb(216, 241, 216)";
    } else if (props.type === "Declined") {
      return " rgb(244, 224, 224)";
    } else if (props.type === "Approved") {
      return "rgb(160, 234, 244)";
    } else {
      return "none";
    }
  }};
`;

export const UserImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const UserName = styled.span`
  margin-left: 5px;
  font-weight: 600;
`;
