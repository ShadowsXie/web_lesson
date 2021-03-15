1. 开发流程 react + ts + hooks 大型项目 
webpack、webpcak-cli、 webpack-dev-server
webpack-cli 4.0版本 与webpack 5 兼容性问题
手动的指定 安装 webpack-cli 3

  1.1 配置开发流程 webpack三兄弟
      --hot 热更新  
  1.2 css-loader  style-loader  file-loader url-loader
      webpack loader机制 转译 或编译
      html-webpack-plugin
      mini-css-extract-plugin webpack 插件
      awesome-typescript-loader ts -> js

  1.3 typescript-loader   typescript
      tsconfig.json 

  1.4 js babel  es6 -> es5
      @babel/polyfill ?
      babel-loader (有问题) 单独安装
      .babelrc

  1.5 webpack.config.js
      entry-> output
      module test loader

  1.6 src/ index.html root

2. react  react-dom
    ts + react
    npm i @types/react  @types/react-dom  react的类型约定
    ts  类型化的js