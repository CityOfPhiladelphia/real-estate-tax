const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  publicPath: '/revenue/realestatetax/',

  configureWebpack: {
    plugins: [
      new Visualizer({ filename: './statistics.html' }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](leaflet)[\\/]/,
            name: 'leaflet-chunk',
            chunks: 'all',
          },
          new: {
            test: /[\\/]node_modules[\\/](esri-leaflet)[\\/]/,
            name: 'esri-leaflet-chunk',
            chunks: 'all',
          }
        }
      }
    },
  },

  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_variables.scss";
              @import "@/scss/_mixins.scss";`,
      },
    },
  },

  // outputDir: undefined,
  // assetsDir: undefined,
  // runtimeCompiler: undefined,
  // productionSourceMap: undefined,
  // parallel: undefined,
  // css: undefined,
  transpileDependencies: [
    // can be string or regex
    '@phila/mapboard',
    '@phila/vue-comps',
    '@phila/vue-mapping',
    '@phila/vue-datafetch',
    // /other-dep/
  ],
};
