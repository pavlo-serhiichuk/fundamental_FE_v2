export type WebpackMode = 'production' | 'development'

export interface WebpackPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface ConfigOptions {
  mode: WebpackMode
  paths: WebpackPaths
  isDev: boolean
  port: number
  apiUrl: string
}

export interface EnvOptions {
  mode: WebpackMode
  port: number
  goal: string
  apiUrl: string
}
