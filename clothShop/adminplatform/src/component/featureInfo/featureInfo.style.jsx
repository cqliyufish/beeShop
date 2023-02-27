import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const FeatureItem = styled.div`
  flex: 1;

  padding: 30px;
  margin: 0 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;
export const FeatureTitle = styled.span`
  font-size: 20px;
`;
export const FeatureMoneyContainer = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
`;
export const FeatureMoney = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
export const FeatureMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const Icon = styled.div`
  font-size: 14px;
  margin-left: 5px;
  color: ${(props) => props.color};
`;

export const FeatureSub = styled.span`
  font-size: 15px;
  color: gray;
`;
