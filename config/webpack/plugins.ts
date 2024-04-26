import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { type ConfigOptions } from './types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const getPlugins = ({ paths, isDev }: ConfigOptions) => {
  return [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
