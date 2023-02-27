import React, { useState, useEffect } from "react";
import {
  Container,
  FeatureItem,
  FeatureTitle,
  FeatureMoneyContainer,
  FeatureMoney,
  FeatureMoneyRate,
  FeatureSub,
  Icon,
} from "./featureInfo.style";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { userRequest } from "requsetMethod";

function FeatureInfo() {
  const [income, setIncome] = useState([]); //income=[prevMonth, lastMonth]
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("order/income");
        setIncome(res.data);
        setPerc((res.data[1].total - res.data[0].total) / res.data[1].total);
      } catch (err) {
        console.log(err);
      }
    };
    getIncome();
  }, []);
  // console.log("income", income);

  // console.log("last", income[1]);

  // console.log("prev", income[0]);
  // console.log("perc", perc);

  //////////////////////////////////////////////////////////////////////
  return (
    <Container>
      <FeatureItem>
        <FeatureTitle>Revanue</FeatureTitle>
        <FeatureMoneyContainer>
          <FeatureMoney>${income[1]?.total}</FeatureMoney>
          <FeatureMoneyRate>
            %{Math.floor(perc * 100)}
            {perc < 0 ? (
              <Icon color={"red"}>
                <ArrowDownwardIcon />
              </Icon>
            ) : (
              <Icon color={"green"}>
                <ArrowUpwardIcon />
              </Icon>
            )}
          </FeatureMoneyRate>
        </FeatureMoneyContainer>
        <FeatureSub>Compare to last month</FeatureSub>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Sales</FeatureTitle>
        <FeatureMoneyContainer>
          <FeatureMoney>$2,222</FeatureMoney>
          <FeatureMoneyRate>
            -12.3
            <Icon color={"red"}>
              <ArrowDownwardIcon />
            </Icon>
          </FeatureMoneyRate>
        </FeatureMoneyContainer>
        <FeatureSub>Compare to last month</FeatureSub>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Cost</FeatureTitle>
        <FeatureMoneyContainer>
          <FeatureMoney>$2,222</FeatureMoney>
          <FeatureMoneyRate>
            12.3
            <Icon color={"green"}>
              <ArrowUpwardIcon />
            </Icon>
          </FeatureMoneyRate>
        </FeatureMoneyContainer>
        <FeatureSub>Compare to last month</FeatureSub>
      </FeatureItem>
    </Container>
  );
}

export default FeatureInfo;
