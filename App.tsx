import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";

import Main from "./src";
import { store } from "./src/store/store";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Provider store={store}>
        <Main />
      </Provider>
    </TamaguiProvider>
  );
}
