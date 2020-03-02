const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,

  configureWebpack: {
    plugins: [
      new Visualizer({ filename: './statistics.html' }),
    ],
  },

  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },

  // outputDir: undefined,
  // assetsDir: undefined,
  // runtimeCompiler: undefined,
  // productionSourceMap: undefined,
  // parallel: undefined,
  // css: undefined,
  transpileDependencies: [
    // can be string or regex
    '@philly/mapboard',
    '@philly/vue-comps',
    '@philly/vue-mapping',
    '@philly/vue-datafetch',
    // /other-dep/
  ],
};
