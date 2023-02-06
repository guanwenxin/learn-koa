// const KoaRouter = require('koa-router')

// const router = new KoaRouter(
//     {
//         prefix: '/api'
//     }
// );

// function success(data) {
//     return {
//         success: true,
//         data,
//         statusCode: 0,
//     }
// }

// function fail(msg, statusCode = -1) {
//     return {
//         success: false,
//         msg,
//         statusCode: statusCode,
//     }
// }

// // 写路由规则
// router.post('/login', (ctx) => {
//     const {username, password} = ctx.request.body
//     const user = {
//         name: '123456',
//         password: '123456'
//     }
//     if (username === user.name && password === user.password) {
//         ctx.body = success({info: user})
//     } else {
//         ctx.body = fail('用户名或者密码错误')
//     }
//     // 查询参数从 ctx.request.query
//     // body参数从 ctx.request.body
//     // ctx.body = success({
//     //     body: ctx.request.body
//     // })
// })

// router.get('/user', (ctx) => {
//     ctx.body = fail('反正就是失败了，我也不知道为啥会', 3001)
// })

// module.exports = {
//     router
// }


// // @Get('/user') function handleUser(ctx) => {
// //     ctx.body = fail('反正就是失败了，我也不知道为啥会', 3001)
// // }
// // 函数注册的时候，繁琐
// // 把函数，与某个路径和请求方法关联上

// // 函数是 handleUser，
// // 请求方法是 Get
// // url  /user

// // router.get('/user', handleUser)


const KoaRouter = require('koa-router')
const loginCtrl = require('../controller/login/index')
const uploadCtrl = require('../controller/upload/index')
const uploadMultiCtrl = require('../controller/upload/upload-mul')
const addUserCtrl = require('../controller/user/index')

const router = new KoaRouter({
    prefix: '/api'
});


// 写路由规则
router.post('/login', loginCtrl)
router.post('/user/add', addUserCtrl)

// 上传文件
router.post('/upload', uploadCtrl)
router.post('/upload/multi', uploadMultiCtrl)


module.exports = {
    router
}