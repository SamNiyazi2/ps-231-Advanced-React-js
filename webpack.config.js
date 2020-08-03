
// 07/20/2020 04:34 pm - SSN - [20200720-1620] - [002] - M03 - Configuring a full-stack JavaScript Environment: Client side

// 08/02/2020 06:31 pm - SSN - [20200802-1815] - [001] - M08-P04 - Separating vendor files

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
                exclude: /node_modules/

                //use: 'babel-loader'
                ,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env', 'stage-2']
                    }
                }

            }
        ]
    }
    ,

    //    [20200802-1815]
    optimization: {
        splitChunks: {
            // include all types of chunks
            // Cause an error after minifying (webpack -p)
            //  chunks: 'all'
        }
    }


};


//    [20200802-1815]
let vendorFiles = [
    'babel-polyfill',
    'react',
    'react-dom',
    'prop-types',
    'axios',
    'lodash.debounce',
    'lodash.pickby'
];


const config = [

    {

        ...base_Config
        ,

        entry: {

            vendor: vendorFiles,
            app: [
                './lib/renderers/dom.js'
            ]
        }

        ,

        output: {
            path: path.resolve(__dirname, 'public'),
            // filename: 'bundle.js'
            filename: '[name]__bundle.js'

        }

    }

    ,
    {

        ...base_Config
        ,


        entry: {

            vendor: vendorFiles,
            app_101: [
                './lib/test_context/index.js'
            ]
        }


        ,

        output: {
            path: path.resolve(__dirname, 'public'),
            //            filename: 'bundle_101.js'
            filename: '[name]__bundle.js'

        }

    }


];



module.exports = config;

