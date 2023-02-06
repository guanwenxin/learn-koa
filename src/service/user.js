const mysql = require('../database/index')
const {getSha1}  = require('../utils/crypto')

async function valid(user) {
    const { email, password } = user;
    console.log('valid', email, password)
    const sql = `select * from user where email = ${mysql.escape(email)}`
    const [result] = await mysql.query(sql)// 数组
    if (result.length === 1) {
        // 明文验证
        // hash验证
        const hashPas = getSha1(password)
        if (hashPas === result[0].password) {
            return true;
        }
    }
    return false;
}

module.exports = {
    valid,
}