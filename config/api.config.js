const isPro = Object.is(process.env.NODE_ENV, 'production')
console.log("生产环境：",isPro)
module.exports = {
    baseUrl: isPro ? 'https://unidemo.dcloud.net.cn' : '/apis'
}