import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {ConfigOptions} from './types'

export const getLoaders = ({isDev}: ConfigOptions) => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  const cssLoader =  {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader": MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => resPath.includes('.module.'),
              localIdentName: isDev ? '[local]_[hash:base64:4]': '[hash:base64:8]'
            }
          },
        },
        "sass-loader",
      ],
    }

  return [
    tsLoader,
    cssLoader
  ]
}