module.exports = {
  plugins: [
    require('postcss-mixins')(),
    require('postcss-import')(),
    require('postcss-cssnext')(),
    require('postcss-extend')(),
    require('css-mqpacker')()
  ]
}
