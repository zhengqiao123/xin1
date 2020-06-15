const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');//打包带着html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//每次打包自动清理dist
module.exports = {
    entry: path.resolve(__dirname,'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    },
    //配置loader
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
              },
              {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      name:'[hash:8].[ext]'
                    }
                  }
                ]
              }
        ]
      },
      //配置插件完成其他功能
      plugins: [
          new HtmlWebpackPlugin({
            template: './src/public/index.html',
          }),
          new CleanWebpackPlugin(),
      ],
      mode:'development',
      devServer: {
        port: 8080,
        open:true,//是否自动打开浏览器
        quiet:true,//输出少量的提示信息
      },
      devtool:'cheap-module-eval-source-map',//定位出错错在的原始代码行
  };