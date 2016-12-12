# mvproject
web前端开发环境初始化工具

## 通过 NPM 安装 mvproject

`sudo npm install -g mvproject`

## 命令

### install

安装项目初始化方案, 默认值: webpack1

使用: `mvproject install [project name]`

例子: 

创建项目目录: `mkdir project.com`

切换到项目目录: `cd project.com`

初始化项目方案: `mvproject install webpack1`

执行webpack处理: `webpack --watch`  
*如果没用安装 webpack请先安装webpack: `sudo npm install -g webpack`*

#### install 已有的配置方案

1. webpack1: webpack + HtmlWebpackPlugin(动态模板)
    
  安装源: https://github.com/openjavascript/mvproject.project.webpack1

1. webpack2: webpack + HtmlWebpackPlugin(动态模板) + css less(动态css)
    
  安装源: https://github.com/openjavascript/mvproject.project.webpack2

1. webpack3: 开发中...
    
  安装源: https://github.com/openjavascript/mvproject.project.webpack3

1. webpack4: webpack + css less(动态css)(静态模板)
    
  安装源: https://github.com/openjavascript/mvproject.project.webpack4

1. webpack5: 开发中...
    
  安装源: https://github.com/openjavascript/mvproject.project.webpack5

### update

更新 bower.json 和 package.json(更新 npm 模块将优先使用 qnpm 更新源环境,如果有的话...)

使用: `mvproject update`

### stc

安装stc编译环境, 只在内网可用, 该命令会判断当前目录的上级目录是否有 stc 目录, 如果没用会自动下载并安装stc环境

使用: `mvproject stc`

### build

通过燕尾服发布脚本(build.sh)发布静态内容到CDN

使用: `mvproject build`
