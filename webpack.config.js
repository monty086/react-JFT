
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:{
        main:path.resolve('./src/main/index.js'),
        login:path.resolve('./src/login/login.js')
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].bundle.js'
    },
    devtool: "source-map",
    module:{
        rules:[
            {test:/\.jsx?$/,use:'babel-loader',exclude:/node_module/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(png|jpg|jpeg|gif|giff)$/,use:'url-loader?limit=8000'}
        ]
    },
    //出口文件
    plugins: [
        new htmlWebpackPlugin({
            template:"./src/template/index.html",
            chunks:['main'] //导出的js文件的目录
        }),
        new htmlWebpackPlugin({
            template:"./src/template/login.html",
            filename:"login.html", //导出的html文件，不写的话默认导出这个文件
            chunks:['login'] ////导出的js文件的目录
        })
    ]
}