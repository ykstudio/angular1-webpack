module.exports = {
    entry: "./app/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.css$/,
            loaders: ["css-loader"]
        },
        {
    test: /\.html$/,
    loader: 'html',
    query: {
      minimize: true
    }
  }
    ]
    }
}