export function getSvgLoader () {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }
}
