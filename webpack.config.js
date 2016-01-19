module.exports = {
    entry: "./app/main.jsx",
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader?presets[]=react,presets[]=es2015',
                exclude: /node_modules/
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};