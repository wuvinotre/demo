import React from "react";
import { useWindowDimensions } from "react-native";
import { Card, H2, Paragraph, Button, Stack, Image } from "tamagui";
import { LinearGradient } from "@tamagui/linear-gradient";
import { CharacterProps } from "./type";
import { useTheme } from "src/hooks";

type CardProps = {
  item: CharacterProps;
};

export const CardItem = ({ item }: CardProps) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const { bgColor, bgCard, textColor } = useTheme();

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
          <Paragraph color={textColor}>
            {item.race} - {item.gender}
          </Paragraph>
          <Paragraph color={textColor}>
            {item.job} - {item.status}
          </Paragraph>
          <Paragraph color={textColor}>
            {item.age} - {item.height}
          </Paragraph>
        </Card.Header>
        {item.rank ? (
          <Card.Footer padded>
            <Button
              br="$10"
              variant="outlined"
              color={textColor}
              borderColor={textColor}
            >
              {item.rank}
            </Button>
          </Card.Footer>
        ) : null}
        <Card.Background>
          <LinearGradient
            position="absolute"
            width={350}
            height={300}
            colors={[bgCard, bgColor]}
            borderRadius="$4"
            start={[1, 0]}
            end={[0, 0]}
          />
          <Image
            source={{ width: 525, height: 730, uri: item.image }}
            height={"100%"}
            resizeMode="contain"
          />
        </Card.Background>
      </Card>
    </Stack>
  );
};
