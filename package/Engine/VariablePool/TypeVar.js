/**
 * @abstract: 
 * @version: 请写项目版本
 * @author: @Haxif
 * @Date: 2021-11-23 11:26:43
 * @LastEditors: @Haxif
 * @LastEditTime: 2021-11-23 15:29:54
 */
/*======================================*
* 所有类型均要继承于此，防止方法不能正确调用
**=======================================*/

export class TypeVar {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name
  }
  set name(name) {
    this._name = name
  }
}