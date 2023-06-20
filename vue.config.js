/*
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-18 17:31:01
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-18 19:40:37
 * @FilePath: \wy_music\vue.config.js
 * @Description: 
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
const { defineConfig } = require('@vue/cli-service');
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/style/index.less")] //指定全局变量的less文件
    }
  },
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
});
