const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
//entry: './src/index.js',
mode:'development',
    entry:{
        index:'./src/index.js',
        // index:{
        //     import:'./src/index.js',
        //     dependOn:'shared',
        // },
        // another:{
        //     import:'./src/another-module.js',
        //     dependOn: 'shared',
        // },
        // shared:'lodash',
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
    devtool:'inline-source-map',
    devServer:{
        static:'./static'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Development - SupaBawwl'
        })
    ],
    output:{
        //filename:'bundle.js',
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
       // clean:true,
    },
    // optimization:{
    //     // runtimeChunk:'single',
    //     splitchunks:{
    //         chunks:'all',
    //     }
    // }
    //watch:true,
};