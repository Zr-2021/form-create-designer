/*
 * @Author       : djkloop
 * @Date         : 2020-08-15 21:16:03
 * @LastEditors  : djkloop
 * @LastEditTime : 2021-09-21 17:18:46
 * @Description  : 头部注释
 * @FilePath     : /form-create2/packages/element-ui/vue.config.js
 */
module.exports = {
    publicPath:'/formCreate',
    pages: {
        app: {
            entry: 'examples/main.js',
            template: 'examples/index.html',
            filename: 'index.html'
        }
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: 'javascript/auto'
                },
            ]
        }
    },
    devServer: {
        open: process.platform === 'darwin',
        host: '127.0.0.1',
        port: 8009,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => {}
    }
}
