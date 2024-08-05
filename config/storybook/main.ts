import { type Configuration, DefinePlugin } from 'webpack'
import { type WebpackPaths } from '../webpack/types'
import path from 'path'
import { getCssLoader } from '../webpack/loaders/getCssLoader'

const config: { webpackFinal: (config: Configuration) => Promise<Configuration>, stories: string[], framework: { name: string, options: Record<string, unknown> }, addons: string[], swc: () => { jsc: { transform: { react: { runtime: string } } } } } = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  webpackFinal: async (config: Configuration) => {
    const paths: WebpackPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src')
      // locales: path.resolve(__dirname, 'public', 'locales'),
      // buildLocales: path.resolve(__dirname, 'build', 'locales')
    }
    // config.resolve.modules.push(paths.src)
    config.resolve?.modules?.push(path.relative(__dirname, paths.src), 'node_modules')
    config.resolve.extensions.push('.ts', '.tsx')
    config.module.rules.push(getCssLoader(true))
    // Find and remove the existing rule for handling SVGs
    const fileLoaderRule: any = config.module.rules.find((rule: any) => rule.test?.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/

    // Add new rule for handling SVGs with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    config.plugins.push(new DefinePlugin({
      __IS_DEV__: true
    }))
    return config
  }
}
export default config
