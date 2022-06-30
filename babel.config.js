/* eslint no-use-before-define: 0 */
module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "/": "./"
          },
        },
      ],
    ],
  };
};
