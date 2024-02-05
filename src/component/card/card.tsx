import React from "react";
import { useWindowDimensions } from "react-native";
import { Card, H2, Paragraph, XStack, Button, Stack } from "tamagui";
import { LinearGradient } from "@tamagui/linear-gradient";
import { CharacterProps } from "./type";

type CardProps = {
  item: CharacterProps;
};

export const CardItem = ({ item }: CardProps) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  return (
    <Stack f={1} ai={"center"} jc={"center"} w={SCREEN_WIDTH}>
      <Card
        elevate
        size="$4"
        bordered
        animation="bouncy"
        width={350}
        height={300}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.925 }}
      >
        <Card.Header padded>
          <H2>{item.name}</H2>
          <Paragraph theme="alt2">
            {item.race} - {item.gender} - {item.job}
          </Paragraph>
          <Paragraph theme="alt2">
            {item.age} - {item.height} - {item.status}
          </Paragraph>
        </Card.Header>
        {item.rank ? (
          <Card.Footer padded>
            <XStack flex={1} />
            <Button br="$10" variant="outlined" color={"$background"}>
              {item.rank}
            </Button>
          </Card.Footer>
        ) : null}
        <Card.Background>
          <LinearGradient
            width={350}
            height={300}
            colors={["$background", "$color"]}
            borderRadius="$4"
            start={[0, 0]}
            end={[0, 2]}
          />
        </Card.Background>
      </Card>
    </Stack>
  );
};
