<!--
 * @abstract:
 * @version: 请写项目版本
 * @author: @Haxif
 * @Date: 2021-11-22 09:44:36
 * @LastEditors: @Haxif
 * @LastEditTime: 2021-11-22 16:07:17
-->

# 说明文档

## 起因

src 目录验证混乱，准备重新写一份比较清晰逻辑 ide 包。

## 结构

- DefineFunction/ 定义方法器
  识别标签进行自定义函数包裹，具有输入输出属性。
- Registry/ 注册表
  所有的方法都要在这里注册。
- SourceCodeProcessing/ 源码分析器
  解析器，源文件从这进。
- VariablePool/ 变量池
  存放所有的作用域、变量、正在使用的方法等，存储为树状结构。
- Tool/ 工具
  重复使用的非核心的方法
