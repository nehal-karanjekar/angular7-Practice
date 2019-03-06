//webpack.config.js

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                options:{
                	presets:['es2015']
            	}
            }
        ]
    },
    devServer: {
        port: 3000
    }
};
