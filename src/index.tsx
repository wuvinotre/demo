import React from "react";
import { FlatList } from "react-native";
import { XStack } from "tamagui";
import { CardItem } from "./component/card";
import data from "./services/mock/mock";

const Main = () => {
  return (
    <XStack f={1} ai={"center"}>
      <FlatList
        data={data}
        renderItem={(item) => <CardItem key={item.index} />}
        horizontal={true}
      />
    </XStack>
  );
};

export default Main;
