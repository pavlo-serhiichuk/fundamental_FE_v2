import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { type ConfigOptions } from './types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export const getPlugins = ({ paths, isDev, apiUrl }: ConfigOptions) => {
  const plugins = [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl)
    }),
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css'
    })
  ]

  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  return plugins
}
