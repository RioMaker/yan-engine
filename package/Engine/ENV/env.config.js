/**
 * @abstract: 
 * @version: 请写项目版本
 * @author: @Haxif
 * @Date: 2021-11-23 15:35:22
 * @LastEditors: @Haxif
 * @LastEditTime: 2021-11-23 15:42:31
 */
import { config as DotEnvConfig } from 'dotenv'

const GlobalConfig = DotEnvConfig().parsed

const __DEV__ = GlobalConfig['YAN_DEV']

export {
  __DEV__
}