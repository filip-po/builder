'use strict';

module.exports = () => {
  $.gulp.task('fonts', () => {
    return $.gulp.src('./src/fonts/**')
      .pipe($.gulp.dest(`${$.config.output}/fonts`));
  });
};
