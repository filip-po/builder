'use strict';

module.exports = () => {
  $.gulp.task('pug', () => {
    return $.gulp.src('./src/template/pages/*.pug')
      .pipe($.gp.pug({ pretty: true }))
      .on('error', $.gp.notify.onError(error => ({
        title: 'Pug error',
        message: error.message
      })))
      .pipe($.gulp.dest($.config.output));
  });
};
