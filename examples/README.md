# examples


This is a test project


## Getting Start

```
git clone git@gitlab.corp.qunar.com:你的gitlab账号/examples.git
cd examples
npm install
npm start
```

open in browser

http://127.0.0.1:3000/

## 启动方式

最简单启动方式

```
node bin/run
```

最常用的集成nodemon的方式,代码变动会自动重载(其实就是nodemon去执行bin/run)

```
npm start
```

支持pm2部署

```
 #npm run pm2
 pm2 start bin/run
```
## 支持koa2的3种中间件写法

Koa2是一个 middleware framework, 它提供了 3 种不同类型的中间件写法

- common function
- async function（新增）
- generatorFunction


## 支持view层多种模板



### jade

```
npm i -S jade
```

in app.js

```
app.use(views(__dirname + '/views', {
  extension: 'jade'
}));
```

### ejs

```
npm i -S ejs
```

in app.js

```
app.use(views(__dirname + '/views-ejs', {
  extension: 'ejs'
}));
```


## 关于测试

	目前默认集成了mocha框架，


## 目录结构

```
├── LICENSE
├── README.md
├── app.js
├── bin
│   ├── run
│   └── www
├── node_modules
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── index.js
│   └── users.js
├── test
│   └── test.js
├── views
│   ├── error.jade
│   ├── index.jade
│   └── layout.jade
└── views-ejs


```

说明

- bin/run(runkoa执行bin/www)
- bin/www是常规koa启动文件，和express的一样
- views是放默认的jade文件
- views-ejs是放ejs文件


## 推荐您需要关注的公司其他信息

#### ***文中链接各位根据自己项目对应修改***
--------------------------------------------------------------------------------
#### **项目管理**：
#### *PMO*:(http://pmo.corp.qunar.com)<br />
--------------------------------------------------------------------------------
#### **CI/CD**:
#### *QDR*:(http://qdr.corp.qunar.com/)<br />
#### *QCI*:(http://qci.corp.qunar.com/)<br />
#### *CABLE*:(http://wanshiwu.corp.qunar.com/qualitycheck/index/)<br />

--------------------------------------------------------------------------------
#### **质量管理**:
#### *bugfree*:(http://svn.corp.qunar.com/bugfree)<br />
#### *case*:(http://bugfree.corp.qunar.com/bugfree/index.php/case)<br />
--------------------------------------------------------------------------------
#### **项目信息**:
#### *wiki*:(http://wiki.corp.qunar.com/)<br />
