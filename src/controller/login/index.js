const { success, fail } = require('../../utils/response')
const { createToken } = require('../../service/jwt')
const { valid } = require('../../service/user')

// function login(ctx) {
//     const { username, password } = ctx.request.body
//     const user = {
//         name: '123456',
//         password: '123456'
//     }
//     if (username === user.name && password === user.password) {
//         // ctx.body = success({ token: 'WDF3GHU2ED1FGH' })
//         const token = createToken({ username, password })
async function login(ctx) {
    const { email, password } = ctx.request.body
    const isValid = await valid({ email, password });
    if (isValid) {
        const token = createToken({ email, password })
        ctx.body = success({ token })
    } else {
        ctx.body = fail('用户名或者密码错误')
    }
}

module.exports = login