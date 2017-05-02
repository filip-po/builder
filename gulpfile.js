'use strict';

global.$ = {
  dev: true,
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    tasks: require('./gulp/paths/tasks.js'),
    libs: require('./gulp/paths/libs-js.js'),
    sass: require('./gulp/paths/libs-sass.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')({

  })
};

$.path.tasks.forEach(taskPath => require(taskPath)());

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'fonts',
    'libs',
    'scripts',
    'imgmin'
  ),
  $.gulp.parallel(
    'watch',
    'server'
  )
));

$.gulp.task('build', $.gulp.series(
  cb => {$.dev = false; cb()},
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'fonts',
    'libs',
    'scripts',
    'imgmin'
  )
));
