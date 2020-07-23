
// 07/20/2020 04:34 pm - SSN - [20200720-1620] - [002] - M03 - Configuring a full-stack JavaScript Environment: Client side

const path = require('path');

const base_Config = {

    resolve: {
        modules:
            [
                path.resolve('./lib'),
                path.resolve('./node_modules')
            ]
    }

    ,

    module: {

        rules: [

            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }


};



const config = [

    {

        ...base_Config
        ,

        entry: [
            'babel-polyfill',
            './lib/renderers/dom.js'
        ]

        ,

        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js'

        }

    }

    ,
    {

        ...base_Config
        ,

        entry: [
            'babel-polyfill',
            './lib/test_context/index.js'
        ]

        ,

        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle_101.js'

        }

    }


];



module.exports = config;

