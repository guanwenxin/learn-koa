const {success} = require('../../utils/response')

function uploadCtrl(ctx) {
    console.log(ctx.request.files)
    ctx.body = success({msg: '没问题'})
}

module.exports = uploadCtrl