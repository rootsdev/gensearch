var bannerjs = require('bannerjs'),
    webpack = require('webpack');

module.exports = function(env) {
  
  var config = {
    context: __dirname,
    entry: './src/search.js',
    output: {
      filename: 'gensearch.js',
      path: __dirname + '/dist',
      library: 'gensearch',
      libraryTarget: 'umd'
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: bannerjs.onebanner(),
        raw: true
      })
    ]
  };
  
  // Minify for production build
  if(env && env.production){
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.output.filename = 'gensearch.min.js';
  }
  
  return config;
};