# Electron 官方文档多语言电子书

版本： 0.1.0  
时间： 2016-03-04

## 关于`Electron`

Electron 可以让你使用纯 JavaScript 调用丰富的原生 APIs 来创造桌面应用。你可以把它看作是专注于桌面应用而不是 web 服务器的，io.js 的一个变体。

## 关于本电子书

本书使用`gitbook`整理发布成电子书形式，方便使用和阅读。其中各语言版本，是`Electron`官方文档的拷贝，将跟踪更新。

## 预览

下载页： https://imfly.gitbooks.io/electron-docs-gitbook/ 各版本请自行选择

中文版： https://imfly.gitbooks.io/electron-docs-gitbook/content/cn/index.html

英文版： https://imfly.gitbooks.io/electron-docs-gitbook/content/en/index.html

原码库： https://github.com/imfly/electron-docs-gitbook

预览页： http://imfly.github.io/electron-docs-gitbook

## 构建

目录由命令行工具 [gitbook-summary][] 自动生成。自由写作、发布，搭建自出版平台的方法，请[点击这里][self-publishing]

简要介绍如下：

(1)安装gitbook

```
$ npm install -g gitbook-cli
```

(2)克隆源文

```
$ git clone https://github.com/imfly/electron-docs-gitbook.git
```

(3)安装依赖包

```
cd electron-docs-gitbook
npm install
gitbook install
```

(4)写作构建

写作、修改、构建（开启服务）

```
$ gitbook serve
```

通过`http://localhost:4000`实时浏览

(5)生成目录

只要修改了文章标题和文件夹，就应该重新生成目录文件

```
$ npm run summary
```

(6)一键发布

```
$ npm run deploy
```

以后，只要4-6的过程就是了。

## 贡献

本书原稿托管在`github`上，您也可以参与进来，直接fork、修改、提交PR就可以了。

## 协议

Copyright (c) 2016 imfly.
Copyright (c) 2014 GitHub Inc.

MIT LICENSE
