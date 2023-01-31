// 同步函数和异步函数都可
// callback函数
// ctx对象，next函数
// 中间件写法
// 函数签名/函数定义

// 一、洋葱模型
// 中间件next前后部分的执行顺序
// 二、如果开发中间件，一定要await next()
// <!-- 模板 -->
async function test(ctx, next) {
    // 写逻辑
    await next();
}