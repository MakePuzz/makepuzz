module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
      ? '/makepuzz/'
      : '/',
  filenameHashing: false,
  productionSourceMap: false,
}