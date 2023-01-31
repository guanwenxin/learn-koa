// 如果是类或者构造函数，首字母大写
const Koa = require('koa')
// 创建koa应用
const app = new Koa();

// 处理请求和响应
// 中间件函数
const middlefn = (ctx) => {
    ctx.body = 'hello world'
}
app.use(middlefn)

// 启动服务器，监听端口
app.listen(3000, 'localhost', () => {
    console.log('server is listening on http://localhost:3000')
})