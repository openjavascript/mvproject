# mvproject
web前端开发环境初始化工具

## 通用 NPM 安装

`sudo npm install -g mvproject`

## 命令

### update

更新 bower.json 和 package.json(更新 npm 模块将优先使用 qnpm 更新源环境,如果有的话...)

使用: `mvproject update`

### build

通过燕尾服发布脚本(build.sh)发布静态内容到CDN

使用: `mvproject build`

### install

安装项目初始化方案, 默认值: webpack1

使用: `mvproject install [project name]`

例子: `mvproject install webpack1`

#### install 已有的配置方案

1. webpack1: webpack + HtmlWebpackPlugin(动态模板)
    
  安装源: https://github.com/openjavascript/mvproject.project.webpack1

1. webpack2: 方案2说明
    
  安装源: https://github.com/openjavascript/mvproject.project.webpack2

1. webpack3: 方案3说明
    
  安装源: https://github.com/openjavascript/mvproject.project.webpack3

1. webpack4: 方案4说明
    
  安装源: https://github.com/openjavascript/mvproject.project.webpack4

1. webpack5: 方案5说明
    
  安装源: https://github.com/openjavascript/mvproject.project.webpack5

