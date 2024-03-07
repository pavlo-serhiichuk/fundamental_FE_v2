import {ConfigOptions} from './types'
import {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function getDevServer({port}: ConfigOptions): DevServerConfiguration {
  return {
    port,
    open: true,
    historyApiFallback: true
  }
}