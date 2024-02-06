import React, { useEffect, ReactElement } from "react";
import { ListRenderItemInfo } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Spinner, YStack } from "tamagui";
import Animated from "react-native-reanimated";

import { useTheme } from "../../hooks";
import { CardItem } from "../../component";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { mainActions as actions } from "../../store/main/slice";
import { Character } from "../../store/main/types";
import { getAllCharacter, getLoading } from "../../store/main/selector";

const Main = () => {
  const { bgColor } = useTheme();
  const dispatch = useAppDispatch();
  const characters = useAppSelector(getAllCharacter);
  const loading = useAppSelector(getLoading);

  useEffect(() => {
    dispatch(actions.getAllCharacter());
  }, [dispatch]);

  const renderItem: (
    info: ListRenderItemInfo<Character>,
  ) => ReactElement | null = ({ item }) => {
    return <CardItem key={item._id} item={item} />;
  };

  return (
    <YStack f={1} ai={"center"} jc={"center"} bg={bgColor}>
      <StatusBar />
      {loading === "loading" ? (
        <Spinner />
      ) : (
        <Animated.FlatList
          data={characters}
          renderItem={renderItem}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item._id}
        />
      )}
    </YStack>
  );
};

export default Main;
