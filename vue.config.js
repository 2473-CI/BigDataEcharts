const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath: "./",
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    port: 8082,
    proxy:{
      '/api':{
        // target:'http://192.168.45.5:14732/',
        target:'http://cn-hk-nf-3.natfrp.cloud:61322/',
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
})
