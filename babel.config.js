module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@assets": "./assets",
            "@components": "./components",
            "@Routes": "./Routes",
            "@screens": "./screens",
            "@styles": "./styles"
          }
        }
      ]
    ]
  };
};
