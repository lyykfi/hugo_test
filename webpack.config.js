const config = {
    entry: {
        main: './src/index.jsx'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css']
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            }
        ]
    }
};

module.exports = config;
