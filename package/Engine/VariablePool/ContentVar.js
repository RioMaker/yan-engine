/**
 * @abstract: 
 * @version: 请写项目版本
 * @author: @Haxif
 * @Date: 2021-11-22 22:55:00
 * @LastEditors: @Haxif
 * @LastEditTime: 2021-11-23 16:51:51
 */
import { TypeVar } from './TypeVar.js'
export class ContentVar extends TypeVar {

  constructor(name, content) {
    super(`v-ContentVar-${name}`)
    this._content = content || null
  }

  setName(name) {
    this._name = `v-ContentVar-${name}`
  }

  get content() {
    return this._content
  }

  set content(content) {
    this._content = content
  }

}