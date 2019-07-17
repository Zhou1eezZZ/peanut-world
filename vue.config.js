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
      }
    }
  }
}
