import { getLoaders } from './loaders'
import { getPlugins } from './plugins'
import type webpack from 'webpack'
import { type ConfigOptions } from './types'
import { getDevServer } from './devServer'

export function getConfig (options: ConfigOptions): webpack.Configuration {
  const { mode, paths, isDev } = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash:10].js',
      path: paths.build,
      clean: true,
      publicPath: '/'
    },
    module: { rules: getLoaders(options) },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      preferAbsolute: true,
      modules: [paths.src, 'node_modules'],
      alias: {}
    },
    plugins: getPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? getDevServer(options) : undefined
  }
}
