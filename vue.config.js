module.exports = {
    publicPath: './',
    chainWebpack: config => {
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('html-loader')
            .loader('html-loader')
            .end()
            .use('markdown-loader')
            .loader('markdown-loader')
            .options()
    },
    devServer: {
        proxy: {
            '/colorAPI': {
                target: 'https://colorhunt.co',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/colorAPI': ''
                }
            }
        }
    }
}
