const { createToken, verifyToken } = require('./jwt')

// const token = createToken({name: 'pjw'})
// console.log(token)

const decode = verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGp3IiwiZXhwIjoxNjc1NTkzNjk5LCJpYXQiOjE2NzU1OTM2OTh9.CW-hTZhBfAYIuQ-p8mlU_-Mu71j7CgqzkPi8CMHgSu4')

if (!decode) {
    console.log(decode)
}
console.log(decode)