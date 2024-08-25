import { type ConfigOptions } from './types'
import { getCssLoader } from './loaders/getCssLoader'
import { getSvgLoader } from './loaders/getSvgLoader'
import { getBabelLoader } from './loaders/getBabelLoader'

export const getLoaders = (options: ConfigOptions) => {
  const { isDev } = options
  const svgLoader = getSvgLoader()

  const babelLoader = getBabelLoader(options)

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
