
module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true,
        ignored: /node_modules/
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        __dirname + '/src/shared/assets/styles/vars/_all.scss'
      ]
    }
  }




}