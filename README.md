### install 安装
```
npm install koa-static_aning
```

### usage 用法
```

const koa = require('koa')
const app = new koa()

const serve = require('koa-static_aning')
app.use(serve(directory entry))
```
### example 示例
```

const koa = require('koa')
const app = new koa()

const serve = require('koa-static_aning')

app.use(serve('E:\\'))  // The portal to the static server.
                        // 填写你的静态服务器入口地址

app.listen(3002)        

// Let others visit 让其他人访问你的静态服务器

app.listen({
  port: 3002,
  host: '0.0.0.0'
})
```
### warring
Test only on Win10 platform

只在Win10平台上测试过!!!!

### link
[Aning's Blog](https://aning.xyz/)