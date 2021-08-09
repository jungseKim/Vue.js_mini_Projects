module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api':''
        }
      },
      '/myse': {
        target: 'http://localhost:3000/search',
        changeOrigin: true,
        pathRewrite: {
          '^/myse':''
        }
      }
    }
  },

  outputDir:'../backend/public',

  transpileDependencies: [
    'vuetify'
  ]
}
