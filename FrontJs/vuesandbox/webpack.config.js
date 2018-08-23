"use strict"
const webpack = require("webpack");
const path = require('path');
const sourcePath = path.join(__dirname,'src');

module.exports = {
    entry: {
        app: path.resolve(sourcePath,"js/index.js")
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    resolve:{
        extensions:[".js",".jsx"]
    },
    module: {
        rules: [{
          test: /\.js$/, // запустим загрузчик во всех файлах .js
          exclude: /node_modules/, // проигнорируем все файлы в папке  node_modules 
          use: 'jshint-loader'
        }]
      }
};