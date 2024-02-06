import React, { useEffect, ReactElement } from "react";
import { ListRenderItemInfo } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Spinner, YStack } from "tamagui";
import Animated from "react-native-reanimated";

import { useTheme } from "src/hooks";
import { CardItem } from "src/component";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { mainActions as actions } from "src/store/main/slice";
import { Character } from "src/store/main/types";
import { getAllCharacter, getLoading } from "src/store/main/selector";

const Main = () => {
  const { bgColor } = useTheme();
  const dispatch = useAppDispatch();
  const characters = useAppSelector(getAllCharacter);
  const loading = useAppSelector(getLoading);

  useEffect(() => {
    dispatch(actions.getAllCharacter());
  }, [dispatch]);

  const renderItem: (info: ListRenderItemInfo<Character>) => ReactElement | null = ({ item }) => {
    return (
      <CardItem
        key={item._id}
        item={item}
      />
    );
  };

  return (
    <YStack
      f={1}
      ai={"center"}
      jc={"center"}
      bg={bgColor}
    >
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
