import gulp from 'gulp'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import rev from 'gulp-rev'
import tildeImporter from 'node-sass-tilde-importer'
import del from 'del'
import browserSync from 'browser-sync'

const distPath = 'dist'
const paths = {
    styles: {
        src: 'resources/assets/styles',
        mainEntry: 'main.scss',
        fileEnding: `scss`,
        dest: `styles/main.css`,
    },
    scripts: {
        src: 'resources/assets/scripts',
        mainEntry: 'main.js',
        fileEnding: `js`,
        dest: `scripts/main.js`,
    },
    images: {
        src: 'resources/assets/images',
        dest: `images`,
    },
    revManifest: 'dist/assets.json',
}

/*
 * For small tasks you can export arrow functions
 */
export const clean = () => del([distPath])

/*
 * You can also declare named functions and export them as tasks
 */
export function styles() {
    return gulp
        .src(`${paths.styles.src}/${paths.styles.mainEntry}`)
        .pipe(sass({ importer: tildeImporter }))
        .pipe(concat(paths.styles.dest))
        .pipe(rev())
        .pipe(gulp.dest(distPath))
        .pipe(browserSync.stream())
        .pipe(
            rev.manifest({
                path: paths.revManifest,
                merge: true,
            })
        )
        .pipe(gulp.dest('.'))
}

export function scripts() {
    return gulp
        .src(`${paths.scripts.src}/${paths.scripts.mainEntry}`, {
            sourcemaps: true,
        })
        .pipe(babel())
        .pipe(concat(paths.scripts.dest))
        .pipe(rev())
        .pipe(gulp.dest(distPath))
        .pipe(
            rev.manifest({
                path: paths.revManifest,
                merge: true,
            })
        )
        .pipe(gulp.dest('.'))
}

export function images() {
    return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dest))
}

export function watch() {
    gulp.watch(
        `${paths.scripts.src}/**/*.${paths.scripts.fileEnding}`,
        { ignoreInitial: false },
        scripts
    )
    gulp.watch(
        `${paths.styles.src}/**/*.${paths.styles.fileEnding}`,
        { ignoreInitial: false },
        styles
    )
    gulp.watch(`${paths.images.src}/**`, { ignoreInitial: false }, images)
}

export function serve() {
    browserSync.create()

    browserSync.init({
        injectChanges: true,
        proxy: 'http://localhost:15001',
    })

    gulp.watch(
        `${paths.scripts.src}/**/*.${paths.scripts.fileEnding}`,
        { ignoreInitial: false },
        scripts
    ).on('change', browserSync.reload)
    gulp.watch(
        `${paths.styles.src}/**/*.${paths.styles.fileEnding}`,
        { ignoreInitial: false },
        styles
    ).on('change', browserSync.reload)
    gulp.watch(`${paths.images.src}/**`, { ignoreInitial: false }, images)
}

export const build = gulp.series(clean, gulp.parallel(styles, scripts, images))

export default build
