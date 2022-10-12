const path = require('path')
const HTMlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsc?$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        //设置预定义的环境
                        presets: [
                            [
                                //指定环境的插件
                                "@babel/preset-env",
                                {
                                    //需要兼容的目标浏览器
                                    targets: {
                                        "chrome": "88",
                                        // "ie":"11"
                                    },
                                    //使用的 corejs 的版本
                                    "corejs": "3",
                                    //使用 corejs 的方式,表示按需加载
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                }, 'ts-loader'],
                exclude: /node_modules/

            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader", {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                puglin: [
                                    "postcss-preset-env",
                                    {
                                        browers: "last 2 versions"
                                    }
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new HTMlWebpackPlugin(
            {
                title: "贪吃蛇",
                filename: "index.html",
                template: "./src/index.html"
            }
        ),
        //此插件在执行的时候会先清空 dist ，然后再更新内容，避免有旧文件
        new CleanWebpackPlugin()
    ],
    //用来设置模块引用
    resolve: {
        extensions: ['.ts', '.js']
    }
}