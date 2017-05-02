'use strict';

module.exports = () => {
  $.gulp.task('server', () => {
    $.browserSync.init({
      server: $.config.output
    });

    $.browserSync.watch([`${$.config.output}/**/*.*`, '!**/*.css'], $.browserSync.reload);
  });
};
