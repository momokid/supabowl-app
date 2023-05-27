const path = require.ensure('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
//entry: './src/index.js',
    entry:{
                index:'./src/index.js',
                print: './src/print.js',
            },

    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },{
                test:/\.(png|svg|jpe|jpeg|gif|webp)$/i,
                type:'asset/resource',
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource',
            },
            {
                test:/\.(csv|tsv)$/i,
                use:['csv-loader']
            },
            {
                test:/\.xml$/i,
                use:['xml-loader'],
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'SupaBOwl'
        })
    ],
    output:{
        //filename:'bundle.js',
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch:true,
};