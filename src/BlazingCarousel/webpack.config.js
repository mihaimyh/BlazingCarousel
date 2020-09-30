const path = require('path');

module.exports = env => {
    return {
        entry: './Interop/BlazingCarousel.ts',
        devtool: env && env.production ? 'none' : 'source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'blazingcarousel.js',
            path: path.resolve(__dirname, 'wwwroot'),
        }
    };
};