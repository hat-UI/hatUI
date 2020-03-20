# hatUI
![](https://travis-ci.org/hat-UI/hatUI.svg?branch=master)
一套移动端轻量级Vue组件库
    
![hat](C:\Users\lvhuahao\Desktop\hat.png)

## 项目开发目录功能设计说明

```bash
├─build -- webpack打包配置文件
├─config -- 常量配置文件
├─dist  -- 组件库打包目录
├─sites --组件库相关网站目录
│  ├─demo -- 演示调试组件目录
│  │  ├─dist
│  │  ├─dll
│  │  ├─public
│  │  └─src
│  │      ├─assets
│  │      ├─components
│  │      ├─router
│  │      └─store
│  └─docs -- 组件库文档网站目录
├─src -- 组件库开发目录
│  ├─assets -- 资源目录
│  ├─locales -- 语言包目录
│  ├─mixins --混合函数目录
│  ├─packages -- 组件开发目录
│  │  ├─ActionSheet -- 单个组件目录
│  │  └─button
│  ├─styles --公用样式目录
│  └─utils -- 辅助函数目录
└─test  -- 测试脚本目录
```
## 安装使用

```bash

// 打包组件库
npm run build

// 运行调试组件
npm run dev:demo

// 打包运行demo网站

npm run prod:demo

```

## 开源协议

本项目基于 **MIT** 协议
