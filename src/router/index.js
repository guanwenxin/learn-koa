const KoaRouter = require('koa-router')

const router = new KoaRouter(
    {
        prefix: '/api'
    }
);

function success(data) {
    return {
        success: true,
        data,
        statusCode: 0,
    }
}

function fail(msg, statusCode = -1) {
    return {
        success: false,
        msg,
        statusCode: statusCode,
    }
}

// 写路由规则
router.post('/login', (ctx) => {
    // 查询参数从 ctx.request.query
    // body参数从 ctx.request.body
    ctx.body = success({
        body: ctx.request.body
    })
})

router.get('/user', (ctx) => {
    ctx.body = fail('反正就是失败了，我也不知道为啥会', 3001)
})

module.exports = {
    router
}


// @Get('/user') function handleUser(ctx) => {
//     ctx.body = fail('反正就是失败了，我也不知道为啥会', 3001)
// }
// 函数注册的时候，繁琐
// 把函数，与某个路径和请求方法关联上

// 函数是 handleUser，
// 请求方法是 Get
// url  /user

// router.get('/user', handleUser)