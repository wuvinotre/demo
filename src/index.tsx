import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { Spinner, XStack, Stack } from "tamagui";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import { mainActions as actions } from "./store/main/slice";
import { getAllCharacter, getLoading } from "./store/main/selector";
import { CardItem } from "./component/card";

const Main = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(getAllCharacter);
  const loading = useAppSelector(getLoading);

  useEffect(() => {
    dispatch(actions.getAllCharacter());
  }, [dispatch]);

  if (loading === "loading") {
    return (
      <Stack f={1} ai={"center"} jc={"center"}>
        <Spinner size="large" color="$orange10" />
      </Stack>
    );
  }

  return (
    <XStack f={1} ai={"center"}>
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <CardItem
            key={item._id}
            name={item.name}
            age={item.age}
            race={item.race}
            gender={item.gender}
            height={item.height}
            job={item.job}
            rank={item.rank}
            status={item.status}
            image={item.image}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </XStack>
  );
};

export default Main;
