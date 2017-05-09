const config = {
    entry: {
        main: './src/index.tsx'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.css']
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
                test: /\.ts$/, 
                use: 'ts-loader'
            },
            {
                test: /\.tsx$/, 
                use: 'ts-loader'
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