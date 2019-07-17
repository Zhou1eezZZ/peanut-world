module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/colorAPI': {
        target: 'https://colorhunt.co',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/colorAPI': ''
        }
      },
      '/api': {
        target: 'http://api.jisuapi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
