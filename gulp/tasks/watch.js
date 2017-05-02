'use strict';

module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('./src/styles/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./src/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./src/js/**/*.js', $.gulp.series('scripts'));
  });
};
