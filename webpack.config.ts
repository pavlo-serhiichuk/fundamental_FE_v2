import path from "path"
import webpack from "webpack"
import {getConfig} from './config/webpack/config'
import {EnvOptions, WebpackPaths} from './config/webpack/types'


export default (env: EnvOptions) => {

  const paths: WebpackPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const isDev = mode === 'development'

  const config: webpack.Configuration = getConfig({paths, mode, isDev, port: PORT})

  return config
}