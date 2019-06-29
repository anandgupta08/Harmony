const path = require('path'),
      webpack = require('webpack'),
      HtmlWebPlugin = require('html-webpack-plugin');
      CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry : {
        polyfill : ['./node_modules/@webcomponents/custom-elements/src/native-shim.js',
         './node_modules/@webcomponents/custom-elements/custom-elements.min'],
        app : ['./src/index.js'],
        vendor : ['react', 'react-dom']
    },
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve : {
        extensions : ['.js', 'jsx', 'json', '.ts', '.tsx']
    },
    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']                
            },
            {
                test : /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            { enforce: "pre", test : /\.js$/, loader:"source-map-loader"}
        ]
    },
    plugins : [
        new HtmlWebPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
        new CopyPlugin([{from:'public/favicon.ico', to : path.resolve(__dirname, 'dist')}]),
        new CopyPlugin([{from:'public/manifest.json', to : path.resolve(__dirname, 'dist')}]),
        new CopyPlugin([{from:'src/assets', to : path.resolve(__dirname, 'dist/assets')}]),
        new webpack.HashedModuleIdsPlugin()
    ]
}