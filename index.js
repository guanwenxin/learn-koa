// // 如果是类或者构造函数，首字母大写
// const Koa = require('koa')
// const KoaStatic = require('koa-static')
// // 创建koa应用
// const app = new Koa();

// // 1.开发一个静态文件服务器
// app.use(KoaStatic('./static', {
//     setHeaders: function(resp) {
//         // 设置http响应报文key-value，报文的数据保存为附件
//         resp.setHeader('content-disposition', 'attachment')
//     }
// }))

// app.use(async(ctx, next) => {
//     console.log('1')
//     // await next();
//     console.log('2')
//     await next();
// })
// app.use(async(ctx, next) => {
//     console.log('3')
//     // await next();
//     console.log('4')
//     await next()
// })
// app.use(async(ctx, next) => {
//     console.log('5')
//     // await next();
//     console.log('6')
// })
// // 处理请求和响应
// // 中间件函数
// const middlefn = (ctx) => {
//     ctx.body = 'hello world'
// }

// app.use(middlefn)

// // 启动服务器，监听端口

// app.listen(3000, 'localhost', () => {
//     console.log('server is listening on http://localhost:3000')
// })

// 如果是类或者构造函数，首字母大写
const Koa = require('koa')
const KoaMount = require('koa-mount')
const KoaStatic = require('koa-static')
const { koaBody } = require('koa-body')
// 创建koa应用
const app = new Koa();

// 文件
const middleStatic = KoaStatic('./static', {
    setHeaders: function (resp) {
        // 设置http响应报文key-value，报文的数据保存为附件
        resp.setHeader('content-disposition', 'attachment')
    }
})

// 网站
const mainSite = KoaStatic('./website')

// 1.开发一个静态文件服务器
app.use(KoaMount('/download', middleStatic))
app.use(mainSite)

app.use(koaBody({
    multipart: true
}))
// 支持查询参数
// 支持body[form-data;x-www-urlencoded;json;text/plain]
app.use(async (ctx, next) => {
    ctx.body = {
        method: ctx.request.method,
        url: ctx.request.url,
        params: ctx.request.query,
        body: ctx.request.body
    }
})

// 启动服务器，监听端口
app.listen(3000, 'localhost', () => {
    console.log('server is listening on http://localhost:3000')
})