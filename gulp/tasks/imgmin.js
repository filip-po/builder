'use strict';

module.exports = () => {
  $.gulp.task('imgmin', () => {
    return $.gulp.src('./src/img/**/*')
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest(`${$.config.output}/img`));
  });
};
