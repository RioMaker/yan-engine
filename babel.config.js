/**
 * @abstract: 
 * @version: 请写项目版本
 * @author: @Haxif
 * @Date: 2021-11-23 16:49:10
 * @LastEditors: @Haxif
 * @LastEditTime: 2021-11-23 16:49:10
 */
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};