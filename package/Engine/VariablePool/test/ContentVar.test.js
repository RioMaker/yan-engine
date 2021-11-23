/**
 * @abstract: 
 * @version: 请写项目版本
 * @author: @Haxif
 * @Date: 2021-11-23 16:27:36
 * @LastEditors: @Haxif
 * @LastEditTime: 2021-11-23 17:25:35
 */
import { ContentVar } from "../contentVar.js";
describe('ContentVar', () => {
  it('Str', () => {
    const contentVarStr = new ContentVar('name1', 'strings');
    expect(contentVarStr.name).toBe('v-ContentVar-name1');
    expect(contentVarStr.content).toBe('strings');
    contentVarStr.setName('name_new_1');
    expect(contentVarStr.name).toBe('v-ContentVar-name_new_1');
    contentVarStr.content = 'new string';
    expect(contentVarStr.content).toBe('new string');
  });
  it('Arr', () => {
    const contentVarArr = new ContentVar('name2', [1, '2', {}]);
    expect(contentVarArr.name).toBe('v-ContentVar-name2');
    expect(contentVarArr.content).toStrictEqual([1, '2', {}]);
    contentVarArr.setName('name_new_2');
    expect(contentVarArr.name).toBe('v-ContentVar-name_new_2');
    contentVarArr.content = ['new', 'arr', 1, new Array(), {}];
    expect(contentVarArr.content).toStrictEqual(['new', 'arr', 1, new Array(), {}]);
  });
  it('Obj', () => {
    const contentVarObj = new ContentVar('name3', { name: '张三' });
    expect(contentVarObj.name).toBe('v-ContentVar-name3');
    expect(contentVarObj.content).toStrictEqual({ name: '张三' });
    contentVarObj.setName('name_new_3');
    expect(contentVarObj.name).toBe('v-ContentVar-name_new_3');
    contentVarObj.content = { say: 'hello', arr: [1, 2, {}], in: { use: 'used' } };
    expect(contentVarObj.content).toStrictEqual({ say: 'hello', arr: [1, 2, {}], in: { use: 'used' } });
  });
  it('TemStr', () => {
    const tem = 'temstr'
    const contentVarTemStr = new ContentVar('name4', `this is ${tem}`);
    expect(contentVarTemStr.name).toBe('v-ContentVar-name4');
    expect(contentVarTemStr.content).toBe('this is temstr');
    contentVarTemStr.setName('name_new_4');
    expect(contentVarTemStr.name).toBe('v-ContentVar-name_new_4');
    const new_tem = [1, 2, 3];
    contentVarTemStr.content = `new temstr is ${new_tem}`;
    expect(contentVarTemStr.content).toBe('new temstr is 1,2,3');
  });
})