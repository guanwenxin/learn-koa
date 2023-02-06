const { fail } = require('../utils/response')
const { verifyToken } = require('../service/jwt')

const WhiteList = [
    '/api/login',
    '/',
    '/download'
]

async function jwtMiddle(ctx, next) {
    const url = ctx.request.url.split('?')[0]
    if (WhiteList.includes(url)) {
        await next();
    } else {
        // TODO: 验证token是否合法
        if (verifyToken(ctx.request.header.token)) {
            await next();
        } else {
            ctx.body = fail('token失效，请重新获取')
        }
    }
    // TODO: 逻辑
}

module.exports = jwtMiddle;