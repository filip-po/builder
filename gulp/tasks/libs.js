'use strict';

module.exports = () => {
  $.gulp.task('libs', () => {
    return $.gulp.src($.path.libs)
      .pipe($.gp.concat('plugins.min.js'))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest(`${$.config.output}/js`));
  });
};
