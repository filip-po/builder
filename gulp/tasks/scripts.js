'use strict';

module.exports = () => {
  $.gulp.task('scripts', () => {
    return $.gulp.src('./src/js/main.js')
      .pipe($.gp.uglify())
      .pipe($.gp.rename('main.min.js'))
      .pipe($.gulp.dest(`${$.config.output}/js`));
  });
};
