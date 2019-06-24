import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import del from 'del';

const distPath = 'dist';
const paths = {
  styles: {
    src: 'resources/assets/styles/main.scss',
    dest: `${distPath}/styles/`
  },
  scripts: {
    src: 'resources/assets/scripts/main.js',
    dest: `${distPath}/scripts/`
  },
  images: {
    src: 'resources/assets/images',
    dest: `${distPath}/images/`
  }
};

/*
 * For small tasks you can export arrow functions
 */
export const clean = () => del([ distPath ]);

/*
 * You can also declare named functions and export them as tasks
 */
export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass({
      importer: tildeImporter
    }))
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

export function images() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}

 /*
  * You could even use `export as` to rename exported tasks
  */
function watchFiles() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.images.src, images)
}
export { watchFiles as watch };

export const build = gulp.series(clean, gulp.parallel(styles, scripts, images));
/*
 * Export a default task
 */
export default build;