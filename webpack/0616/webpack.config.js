const path = require('path'); // node.js 의 path 모듈을 불러옵니다. 운영체제별로 상이한 경로 문법(구분자 : / 혹은 \)를 해결해 절대 경로로 반환하는 역할을 합니다.
const webpack = require('webpack');
const childProcess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


// 모듈을 밖으로 빼내는 노드 JS문법입니다. 엔트리, 아웃풋 그리고 번들링 모드를 설정할 수 있습니다.
module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

    entry: {
        main: path.resolve('./src/app.js')
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    module: {
        rules: [ // 여기서 로더를 추가할 수 있습니다.
            // {
            //     // 로더가 처리해야할 파일의 패턴(정규표현식)입니다. 
            //     // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미합니다.
            //     // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 의미합니다.
            //     test: /\.js$/,
            //     use: [
            //         // 위와 일치하는 패턴의 파일이 전달될 로더를 설정합니다.
            //         path.resolve('./myLoader.js')
            //     ]
            // },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner:
                `
                    Commit version : ${childProcess.execSync('git rev-parse --short HEAD')}
                    Committer : ${childProcess.execSync('git config user.name')}
                    Commit Date : ${new Date().toLocaleString()}
                `
        }),
        new webpack.DefinePlugin({
            // 값을 단순히 문자열로 전달하면 값으로 인식하지 못하는 문제가 있습니다.
            dev: JSON.stringify('https://dev.api.com'), // 혹은 "'https://dev.api.com'"
            pro: JSON.stringify('https://pro.api.com')
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}