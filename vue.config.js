module.exports = {
    devServer: {
        open: true, //浏览器自动打开页面
        proxy: {
            '/api': {
                target: '目标网址',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}