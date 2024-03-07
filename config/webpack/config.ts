import {getLoaders} from './loaders'
import {getPlugins} from './plugins'
import webpack from 'webpack'
import {ConfigOptions} from './types'
import {getDevServer} from './devServer'

export function getConfig(options: ConfigOptions): webpack.Configuration {
  const {mode, paths, isDev} = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash:2].js",
      path: paths.build,
      clean: true
    },
    module: {rules: getLoaders(options)},
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: getPlugins(paths),
    devtool: isDev ? 'inline-source-map': undefined,
    devServer: isDev ? getDevServer(options): undefined
  }
}