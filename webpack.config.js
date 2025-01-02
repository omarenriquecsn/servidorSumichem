const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].[contenthash].js",
  },

  resolve: {
    fallback: {
      url: require.resolve("url/"),
      path: require.resolve("path-browserify"),
      util: require.resolve("util/"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
      fs: false,
      querystring: require.resolve("querystring-es3"),
      http: require.resolve("stream-http"),
      net: false,
      crypto: require.resolve("crypto-browserify"),
      zlib: require.resolve("browserify-zlib"),
      assert: require.resolve("assert"),
      vm: require.resolve("vm-browserify"),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: { splitChunks: { chunks: "all" } },
};
