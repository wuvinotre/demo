import { useColorScheme } from "react-native";

const useTheme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const bgColor = isDark ? "#323232" : "#DDDDDD";

  const bgCard = isDark ? "#DDDDDD" : "#323232";

  const textColor = isDark ? "#C7C8CC" : "#323232";

  return { colorScheme, bgColor, bgCard, textColor };
};

export default useTheme;
