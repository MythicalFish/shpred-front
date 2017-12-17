module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('postcss-import')(),
    require('postcss-simple-vars')(),
    require('postcss-extend')(),
    require('postcss-nested')(),
    require('postcss-mixins')(),
    require('postcss-custom-media')(),
    require('postcss-inherit')()
  ]
}
