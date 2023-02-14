import { BuildOptions } from './types/config';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// const handler = (percentage, message, ...args) => {
//     // e.g. Output each progress message directly to the console:
//     console.info(percentage, message, ...args);
// };

export function biuldPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[]{
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(/*handler*/),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ]
}
