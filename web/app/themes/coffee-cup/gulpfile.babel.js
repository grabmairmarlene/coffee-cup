import gulp from "gulp";
import sass from "gulp-sass";
import babel from "gulp-babel";
import concat from "gulp-concat";
import rename from "gulp-rename";
import tildeImporter from "node-sass-tilde-importer";
import del from "del";
import browserSync from "browser-sync";

const distPath = "dist";
const paths = {
  styles: {
    src: "resources/assets/styles",
    mainEntry: "main.scss",
    fileEnding: `scss`,
    dest: `${distPath}/styles`,
  },
  scripts: {
    src: "resources/assets/scripts",
    mainEntry: "main.js",
    fileEnding: `js`,
    dest: `${distPath}/scripts`,
  },
  images: {
    src: "resources/assets/images",
    dest: `${distPath}/images`,
  },
};

/*
 * For small tasks you can export arrow functions
 */
export const clean = () => del([distPath]);

/*
 * You can also declare named functions and export them as tasks
 */
export function styles() {
  return gulp
    .src(`${paths.styles.src}/${paths.styles.mainEntry}`)
    .pipe(
      sass({
        importer: tildeImporter,
      })
    )
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

export function scripts() {
  return gulp
    .src(`${paths.scripts.src}/${paths.scripts.mainEntry}`, {
      sourcemaps: true,
    })
    .pipe(babel())
    .pipe(gulp.dest(paths.scripts.dest));
}

export function images() {
  return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dest));
}

export function watch() {
  browserSync.init({
    proxy: "http://localhost:15001",
  });

  gulp.watch(`${paths.scripts.src}/**/*.${paths.scripts.fileEnding}`, { ignoreInitial: false }, scripts);
  gulp.watch(`${paths.styles.src}/**/*.${paths.styles.fileEnding}`, { ignoreInitial: false }, styles);
  gulp.watch(`${paths.images.src}/**`, { ignoreInitial: false }, images);
}

export const build = gulp.series(clean, gulp.parallel(styles, scripts, images));

export default build;
