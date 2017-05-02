'use strict';

module.exports = () => {
  const options = {
    includePaths: $.path.sass
  };

  $.gulp.task('sass', () => {
    return $.gulp.src('./src/styles/main.scss')
      .pipe($.gp.if($.dev, $.gp.sourcemaps.init()))
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError({ title: 'SASS Error' }))
      .pipe($.gp.autoprefixer( $.config.autoprefixerConfig ))
      .pipe($.gp.if($.dev, $.gp.sourcemaps.write()))
      .pipe($.gp.if(!$.dev, $.gp.csso()))
      .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: '.min' })))
      .pipe($.gulp.dest(`${$.config.output}/css`))
      .pipe($.browserSync.stream());
  });
};
