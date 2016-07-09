module.exports = {
    resolve: { extensions: [ '', '.js', '.ts' ] },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};