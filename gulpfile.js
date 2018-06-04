const babel = require('gulp-babel');
const gulp = require('gulp');

gulp.task('build', () =>
  gulp.src([
    'lib/*.js',
    '!./{node_modules,node_modules/**}',
    '!./{build,build/**}'
  ])
  .pipe(babel())
  .pipe(gulp.dest('build')));
