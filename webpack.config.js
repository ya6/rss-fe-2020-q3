const path = require('path');

module.exports = {
  entry: './gem-puzzle/src/index.js',
  output: {
    path: path.resolve(__dirname, './gem-puzzle/dist'),
    filename: 'bundle.js'
  }
};