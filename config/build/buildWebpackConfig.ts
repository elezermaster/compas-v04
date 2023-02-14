import path from 'path';
import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { biuldPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/config';


export function buildWebpackConfig(options: BuildOptions)
    :webpack.Configuration {
        const {paths, mode, isDev} = options
        return {
            mode: mode,
            entry: paths.entry,
            module: {
                rules: buildLoaders(options),
            },
            resolve: buildResolves(),
            output: {
                filename: "[name].[contenthash].js",//'bundle.js',// "[name][contenthash].js", //
                path: paths.build,
                clean: true,
            },
            devtool: isDev ?  'inline-source-map' : undefined,
            plugins: biuldPlugins(options),
            devServer: isDev? buildDevServer(options) : undefined,
            stats: {
                children: true,
            },
        }
    }