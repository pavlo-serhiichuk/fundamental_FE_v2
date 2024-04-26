import { type ConfigOptions } from './types'
import { type Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function getDevServer ({ port }: ConfigOptions): DevServerConfiguration {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
