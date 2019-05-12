var webpack = require('webpack');

module.exports = {
  entry: {
    firstComp: '.src/js/firstComp/index.js'
  }
  output: {filename: '[name].js',
          path: path.resolve(__dirname, 
          'public/js/components')},

  module:{
    
  }
};
