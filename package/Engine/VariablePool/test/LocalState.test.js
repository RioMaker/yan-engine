/**
 * @abstract: 
 * @version: 请写项目版本
 * @author: @Haxif
 * @Date: 2021-11-23 22:15:42
 * @LastEditors: @Haxif
 * @LastEditTime: 2021-11-23 22:43:05
 */
import { ContentVar } from '../ContentVar.js'
import { LocalState } from '../LocalState.js'
describe('LocalState', () => {
  it('rename', () => {
    const localState = new LocalState('local-alpha')
    expect(localState.name).toBe('v-LocalState-local-alpha')
    localState.setName('new-name-alpha')
    expect(localState.name).toBe('v-LocalState-new-name-alpha')
  })
  it('children base fuction', () => {
    const localState = new LocalState('local-beta')
    localState.appendChildren('a', 'str1');
    expect(localState.children).toStrictEqual({ a: 'str1' })
    localState.appendChildren('b', 'str2');
    expect(localState.children).toStrictEqual({ a: 'str1', b: 'str2' })
    localState.removeChildren('a')
    expect(localState.children).toStrictEqual({ b: 'str2' })
    localState.children = { r: 'random' }
    expect(localState.children).toStrictEqual({ r: 'random' })
    localState.children = {}
    expect(localState.children).toStrictEqual({})
    localState.children = { a1: '1', a2: '2', a3: '3' }
    expect(localState.getChildrenNames()).toStrictEqual(['a1', 'a2', 'a3'])
    expect(localState.getChildren('a1')).toBe('1')
  })
  it('children add ContentVar', () => {
    const localState = new LocalState('local-delta')
    localState.appendChildren('content1', new ContentVar('name1', '1'))
    expect(localState.children['content1']).toStrictEqual(new ContentVar('name1', '1'))
    expect(localState.getChildren('content1')).toStrictEqual(new ContentVar('name1', '1'))
    expect(localState.getChildrenNames()[0]).toBe('content1')
    localState.removeChildren('content1')
    expect(localState.getChildrenNames()).toStrictEqual([])
  })
})