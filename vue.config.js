module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "https://be-kievit.smkrus.com/api/",
  },
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        vue: "vue/dist/vue.js",
      },
    },
  },
};
