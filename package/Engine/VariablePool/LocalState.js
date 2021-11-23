/**
 * @abstract: 
 * @version: 请写项目版本
 * @author: @Haxif
 * @Date: 2021-11-23 15:46:24
 * @LastEditors: @Haxif
 * @LastEditTime: 2021-11-23 22:41:32
 */
import { TypeVar } from "./TypeVar";

export class LocalState extends TypeVar {
  constructor(name) {
    super(`v-LocalState-${name}`)
    this._children = {}
  }

  setName(name) {
    this._name = `v-LocalState-${name}`
  }

  get children() {
    return this._children
  }

  set children(children) {
    this._children = children
  }

  appendChildren(name, item) {
    this._children[name] = item
  }

  removeChildren(name) {
    delete this._children[name]
  }

  getChildrenNames() {
    let names = []
    for (const key in this._children) {
      names.push(key)
    }
    return names
  }

  getChildren(name) {
    return this._children[name]
  }

}

