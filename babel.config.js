/* eslint-disable no-undef */
process.env.EXPO_ROUTER_APP_ROOT = "../../src/app";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "transform-inline-environment-variables",
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true
        }
      ],
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".json"],
          alias: {
            src: "./src"
          }
        }
      ],
      "react-native-reanimated/plugin"
    ]
  };
};
