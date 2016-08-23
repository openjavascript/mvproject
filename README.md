# mvproject
开发环境初始化工具

## 通用 NPM 安装

`sudo npm install -g mvproject`

## 命令

### update

更新 bower.json 和 package.json(更新 npm 将优先使用 qnpm环境,如果有的话...)

使用: `mvproject update`

### build

通过燕尾服发布脚本(build.sh)发布静态内容到CDN

使用: `mvproject build`

### install

安装项目初始化方案, 默认值: webpack1

使用: `mvproject install [project name]`

例子: `mvproject install webpack1`
