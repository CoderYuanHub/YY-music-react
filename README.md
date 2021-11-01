# 基于React实现网易云PC端
本项目基于React脚手架实现网易云音乐PC端项目用于巩固本人学习react知识。

## 一、项目结构

|-- YY-MUSIC-REACT
    |-- .gitignore	git忽略上传目录文件
    |-- README.md	项目介绍
    |-- craco.config.js	新增配置
    |-- package.json	项目依赖
    |-- yarn.lock
    |-- public	根页面
    |   |-- favicon.ico
    |   |-- index.html
    |-- src	项目主要文件
        |-- App.js	项目入口
        |-- index.js
        |-- assets	静态资源
        |   |-- css
        |   |-- img
        |-- commom	公共变量
        |   |-- local-data.js
        |-- components	公共组件
        |   |-- app-footer
        |   |-- app-header
        |   |-- music-info
        |   |-- music-photo
        |   |-- theme-header-rcm
        |   |-- top-ranking
        |-- pages	相关页面组件
        |   |-- discover
        |   |-- friend
        |   |-- mine
        |   |-- player
        |-- router	路由配置
        |   |-- index.js
        |-- services	请求配置
        |   |-- config.js	网络相关配置
        |   |-- player.js	歌曲请求接口
        |   |-- recommend.js	推荐页面请求接口
        |   |-- request.js	封装axios
        |-- store	全局redux配置
        |   |-- index.js
        |   |-- reducer.js
        |-- utils	工具类函数

## 二、项目依赖（除脚手架外新增依赖）
1.router路由依赖:react-router-config、react-router-dom
2.样式依赖: normalize.css、styled-components
3.脚手架更改依赖: @craco/craco 
4.组件库: antd
5.redux的使用: react-redux、redux、 redux-thunk、redux-immutable
6.请求库：axios
7.解决数据可变性问题: immutable(Immutable 实现的原理是 Persistent Data Structure（持久化数据结构)

