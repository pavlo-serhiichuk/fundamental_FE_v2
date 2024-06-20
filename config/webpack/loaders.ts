import { type ConfigOptions } from './types'
import { getCssLoader } from './loaders/getCssLoader'
import { getSvgLoader } from './loaders/getSvgLoader'

export const getLoaders = ({ isDev }: ConfigOptions) => {
  const svgLoader = getSvgLoader()

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

  const cssLoader = getCssLoader(isDev)

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    tsLoader,
    cssLoader
  ]
}
