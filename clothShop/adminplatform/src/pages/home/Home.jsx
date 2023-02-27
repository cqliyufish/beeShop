import Chats from "component/chats/Chats";
import FeatureInfo from "component/featureInfo/FeatureInfo";
import WidgetLarge from "component/widgetLarge/WidgetLarge";
import WidgetSmall from "component/widgetSmall/WidgetSmall";
import React, { useMemo, useState, useEffect } from "react";
import { Container, WidgetContainer } from "./home.style";
import { userRequest } from "requsetMethod";

function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const res = await userRequest.get("user/stats");
        console.log("res", res.data);
        const list = res.data.sort((a, b) => a._id - b._id);
        list.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
        console.log("userStats", userStats);
      } catch (err) {
        console.log(err);
      }
    };
    getUserStats();
  }, [MONTHS]);

  ////////////////////////////////////////////////////////////////////
  return (
    <Container>
      <FeatureInfo />
      <Chats
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <WidgetContainer>
        <WidgetSmall />
        <WidgetLarge />
      </WidgetContainer>
    </Container>
  );
}

export default Home;
