module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.21.65:9002",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
