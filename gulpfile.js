const { src, dest } = require('gulp')
const postcss = require('gulp-postcss')

function css() {
  return src('assets/css/**/*.css')
    .pipe(postcss())
    .pipe(dest('assets/output/css/'))
}

exports.default = css
