/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1691527605617_6529';

  // add your middleware config here
  config.middleware = [];

   // 是否开启反向代理
   config.proxy = true;

   // 关闭安全验证
   config.security = {
     csrf: {
       enable: false,
     },
     domainWhiteList: [],
   };
 
   config.cors = {
     origin: "*",
     allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
   };

   config.cluster = {
      listen: {
        path: '',
        port: 28999,
        hostname: '0.0.0.0',
      }
    }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};