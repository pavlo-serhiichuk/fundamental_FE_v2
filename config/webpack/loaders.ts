import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type ConfigOptions } from './types'

export const getLoaders = ({ isDev }: ConfigOptions) => {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: 'defaults' }]
        ]
      }
    }
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[local]_[hash:base64:4]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    tsLoader,
    cssLoader
  ]
}
