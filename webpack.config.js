"use strict";

module.exports = {
    entry: {
        "client/lesson1/build/bundleCl1": "./client/lesson1/jsx/cl1.jsx",
        "client/bundle": "./client/test.jsx",
        "client/lesson1/build/bundleCl2": "./client/lesson1/jsx/cl2.jsx",
        "client/lesson1/build/bundleCl3": "./client/lesson1/jsx/cl3.jsx",
        "client/lesson1/build/bundleCw1": "./client/lesson1/jsx/cw1.jsx",
        "client/lesson1/build/bundleCw2": "./client/lesson1/jsx/cw2.jsx",
        "client/lesson1/build/bundleCw3": "./client/lesson1/jsx/cw3.jsx",
        "client/lesson2/build/bundleCl1": "./client/lesson2/jsx/cl1.jsx",
        "client/lesson2/build/bundleCl2": "./client/lesson2/jsx/cl2.jsx",
        "client/lesson2/build/bundleCl3": "./client/lesson2/jsx/cl3.jsx",
        "client/lesson2/build/bundleCw1": "./client/lesson2/jsx/cw1.jsx",
        "client/lesson2/build/bundleCw2": "./client/lesson2/jsx/cw2.jsx",
        "client/lesson2/build/bundleCw3": "./client/lesson2/jsx/cw3.jsx",
        "client/lesson3/build/bundleCl1": "./client/lesson3/jsx/cl1.jsx",
        "client/lesson3/build/bundleCl2": "./client/lesson3/jsx/cl2.jsx",
        "client/lesson3/build/bundleCl3": "./client/lesson3/jsx/cl3.jsx",
        "client/lesson3/build/bundleCw1": "./client/lesson3/jsx/cw1.jsx",
        "client/lesson3/build/bundleCw2": "./client/lesson3/jsx/cw2.jsx",
        "client/lesson3/build/bundleCw3": "./client/lesson3/jsx/cw3.jsx",
        "client/lesson4/build/bundleCl1": "./client/lesson4/jsx/cl1.js",
        "client/lesson4/build/bundleCl2": "./client/lesson4/jsx/cl2.js",
        "client/lesson4/build/bundleCl3": "./client/lesson4/jsx/cl3.js",
        "client/lesson4/build/bundleCw1": "./client/lesson4/jsx/cw1.js",
        "client/lesson4/build/bundleCw2": "./client/lesson4/jsx/cw2.js",
        "client/lesson4/build/bundleCw3": "./client/lesson4/jsx/cw3.js",
       
        
        

    } ,
           
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                    presets: ['react', 'es2015']
                   
                }
            }
        ]
    }
};