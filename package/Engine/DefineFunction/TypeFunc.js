/**
 * @abstract: 
 * @version: 请写项目版本
 * @author: @Haxif
 * @Date: 2021-11-23 22:50:59
 * @LastEditors: @Haxif
 * @LastEditTime: 2021-11-23 22:52:04
 */
export class TypeFunc {
  constructor(keyword) {
    this._keyword = keyword
  }

  get keyword() {
    return this._keyword
  }

  set keyword(k) {
    this._keyword = k
  }
  
}