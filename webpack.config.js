
// 07/20/2020 04:34 pm - SSN - [20200720-1620] - [002] - M03 - Configuring a full-stack JavaScript Environment: Client side

const path = require('path');

const config = {

    resolve: {
        modules:
            [
                path.resolve('./lib'),
                path.resolve('./node_modules')
            ]
    }

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


module.exports = config;

