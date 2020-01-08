module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}