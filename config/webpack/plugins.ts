import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import {WebpackPaths} from './types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const getPlugins = (paths: WebpackPaths) => {

  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:2].css',

    })
  ]
}