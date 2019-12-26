## webpack-4-quickstart

 webpack4 从0配置到项目搭建
 


### 使用说明

1. npm install
2. npm dev
3. npm build

### 目录结构

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

### 从0开始配置

终端执行以下语句

```
mkdir webpack-4-quickstart && cd webpack-4-quickstart
npm init -y
npm i webpack --save-dev
npm i webpack-cli --save-dev
```
webpack 4 的零配置主要应用于：

* entry 入口默认设置为 ./src/index.js
* output 出口默认设置为 ./dist/main.js
* mode 两种配置 production 和 development

修改代码 `package.json` 中 `scripts` 部分：

``` 
{
   "scripts": {
      "build": "webpack"
    }
}
```    

`package.json` 内容为：

```
{
  "name": "webpack-4-quickstart",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.41.4",
    "webpack-cli": "^3.3.10"
  }
}
```

新建 `src/index.js`
``` javascript
console.log('test');
```

终端执行 `npm run build` 成功打包出了 `dist/main.js`

修改代码 `package.json` 中 `scripts` 部分：

```
{
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  }
}
```

终端执行 `npm run dev` 或者 `npm run build` 成功打包出了 `dist/main.js`

### 项目搭建

项目搭建需求

* ###### js的处理：转换 ES6 代码，解决浏览器兼容问题
* ###### css的处理：编译css，自动添加前缀，抽取css到独立文件
* ###### html的处理：复制并压缩html文件
* ###### dist的清理：打包前清理源目录文件
* ###### assets的处理：静态资源处理
* ###### server的启用：development 模式下启动服务器并实时刷新
* ###### 配置别名，在项目中可缩减引用路径
* ###### 配置反向代理

### 转换 ES6 代码，解决浏览器兼容问题

用 babel 转换 ES6 代码需要使用到 babel-loader

```
npm i @babel/core babel-loader @babel/preset-env -D
```
`package.json` 中 `devDependencies ` 为:
```
  "devDependencies": {
    "@babel/core": "^7.7.7",
    "@babel/preset-env": "^7.7.7",
    "babel-loader": "^8.0.6",
    "webpack": "^4.41.4",
    "webpack-cli": "^3.3.10"
  }
```
在根目录新建一个babel配置文件 `.babelrc` 

```
 {
     "presets": [
         [
             "@babel/preset-env",
             {
                 "useBuiltIns": "usage",
                 "modules": false
             }
         ]
     ]
 }
```

在根目录新建一个webpack配置文件 `webpack.config.js`

```
module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
}
```

使用 babel-polyfill 解决兼容性问题
[transform runtime](https://babel.docschina.org/docs/en/babel-plugin-transform-runtime) 来替代 `@babel/polyfill` 解决体积太大问题

```
npm i @babel/runtime @babel/plugin-transform-runtime -D
```

`package.json` 中 `devDependencies ` 为:
```
  "devDependencies": {
    "@babel/core": "^7.7.7",
    "@babel/plugin-transform-runtime": "^7.7.6",
    "@babel/preset-env": "^7.7.7",
    "@babel/runtime": "^7.7.7",
    "babel-loader": "^8.0.6",
    "webpack": "^4.41.4",
    "webpack-cli": "^3.3.10"
  }
```

修改babel配置文件 `.babelrc` 
```
 {
     "presets": [
         [
             "@babel/preset-env",
             {
                 "useBuiltIns": "usage",
                 "modules": false
             }

         ]
     ],
     "plugins": [
         "@babel/plugin-transform-runtime"
     ]
 }
```
测试babel

修改`index.js`

```
let [a, b, c] = [1, 2, 3];
() => {};
for (let i of items) {};
console.log(a, b, c);

class Person {}
```
npm run dev 查看打包出了 `dist/main.js`文件
 
### 编译css，自动添加前缀，抽取css到独立文件
将CSS提取为独立的文件的插件
```
npm i mini-css-extract-plugin css-loader style-loader -D
```

使用[optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)压缩css
使用[uglifyjs-webpack-plugin]([https://www.npmjs.com/package/uglifyjs-webpack-plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin)
)压缩js
```
npm i optimize-css-assets-webpack-plugin uglifyjs-webpack-plugin -D
```
修改webpack配置文件 `webpack.config.js` 
```
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';
    return {
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                }
            ]
        },
        optimization: {
            minimizer: devMode ? [] : [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: devMode
                }),
                new OptimizeCSSAssetsPlugin()
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ]
    }

}
```

postcss-loader 用于添加浏览器前缀

```
npm i postcss-loader -D
```

跟目录新建 `postcss.config.js`

```
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
```

修改webpack配置文件 `webpack.config.js` 下 `rules`
```
{
    test: /\.css$/,
    use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
    ]
}
```

### 复制并压缩html文件 [html-webpack-plugin](https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin)

```
npm i html-webpack-plugin html-loader -D
```
新建 `src/index.html`
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>webpack-4</title>
</head>

<body>
    <div id="app"></div>
</body>

</html>
```
修改webpack配置文件 `webpack.config.js` 
```
  const HtmlWebPackPlugin = require("html-webpack-plugin");

    module.exports = {
        module: {
            rules: [
                // ...,
                {
                    test: /\.html$/,
                    use: [{
                        loader: "html-loader",
                        options: {
                            attrs: ['img:src', 'img:data-src', 'audio:src'],
                            minimize: true
                        }
                    }]
                }
            ]
        },
        plugins: [
            //...,
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ]
    };
```

### 打包前清理源目录文件 [clean-webpack-plugin](https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder)

```
npm i clean-webpack-plugin -D
```

```
 const {CleanWebpackPlugin} = require('clean-webpack-plugin');
  module.exports = {
    plugins: [
      // ...,
      new CleanWebpackPlugin(),
    ]
  };
```

### 静态资源处理 [file-loader](https://webpack.js.org/loaders/file-loader/)
```
cnpm install file-loader -D
```
修改 `webpack.config.js` 配置文件
```
    module.exports = {
      module: {
        rules: [
               {
                    test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            minimize: true,
                            name: '[name].[ext]',
                            publicPath: "./images/",
                            outputPath: "images/"
                        }
                    }]
                }
        ]
      }
    }
```

### development 模式下启动服务器并实时刷新 [webpack-dev-server](https://webpack.js.org/configuration/dev-server)
```
npm i webpack-dev-server -D
```

修改 `package.json` 下 `"scripts"`
```
"scripts": {
    "dev": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
},
```

### 配置别名，在项目中可缩减引用路径

```
module.exports = (env, argv) => {
    return {
        resolve: {
            //配置别名，在项目中可缩减引用路径
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve('src'),
                '&': path.resolve('src/components')
            }
        },
    }
}
```

### 反向代理
修改 `webpack.config.js` 配置文件
```
module.exports = (env, argv) => {
    return {
        resolve: {
            //配置别名，在项目中可缩减引用路径
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve('src'),
                '&': path.resolve('src/components')
            }
        },
        devServer: {
            proxy: {
                '/gmvcs': 'http://192.168.55.156:8201'
            }
        }
    }
}
```


### 浏览器支持

现代浏览器

### 参考网站
https://segmentfault.com/a/1190000015490721
