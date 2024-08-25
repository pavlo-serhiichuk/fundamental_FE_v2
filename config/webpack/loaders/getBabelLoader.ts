import { type ConfigOptions } from '../types'

export function getBabelLoader (options: ConfigOptions) {
  const { isDev } = options
  return {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: 'defaults' }]
        ],
        plugins: [
          ['i18next-extract', {
            locales: ['ua', 'en'],
            keyAsDefaultValue: true
          }, [isDev && require.resolve('react-refresh/babel')]].filter(Boolean)
        ]
      }
    }
  }
}
