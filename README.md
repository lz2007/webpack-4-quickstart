## webpack-4-quickstart
 webpack4 从0配置到项目搭建
 
## 项目搭建 

1. js的处理：转换 ES6 代码，解决浏览器兼容问题
2. css的处理：编译css，自动添加前缀，抽取css到独立文件
3. html的处理：复制并压缩html文件
4. dist的清理：打包前清理源目录文件
5. assets的处理：静态资源处理
6. server的启用：development 模式下启动服务器并实时刷新



## 使用说明

1. npm install
2. npm dev
3. npm build

## 目录结构

```
 ├── public
  │   └── index.html      # html 模板
  ├── src
  │   ├── assets          # 静态资源
  │   │   └── logo.png
  │   ├── components      # 组件
  │   │   └── App.js
  │   ├── index.js        # 入口文件
  │   └── styles
  │       └── index.less
  ├── .babelrc
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  └── webpack.config.js
```

## 浏览器支持

现代浏览器

## 参考网站
https://segmentfault.com/a/1190000015490721
