module.exports = {
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      config
        .plugin('uglifyjs-plugin')
        .use('uglifyjs-webpack-plugin', [{
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']
            }
          }
        }])
        .end()
    }
  }
}