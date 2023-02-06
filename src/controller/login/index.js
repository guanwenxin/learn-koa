const { success, fail } = require('../../utils/response')
const { createToken } = require('../../service/jwt')

function login(ctx) {
    const { username, password } = ctx.request.body
    const user = {
        name: '123456',
        password: '123456'
    }
    if (username === user.name && password === user.password) {
        // ctx.body = success({ token: 'WDF3GHU2ED1FGH' })
        const token = createToken({ username, password })
        ctx.body = success({ token })
    } else {
        ctx.body = fail('用户名或者密码错误')
    }
}

module.exports = login