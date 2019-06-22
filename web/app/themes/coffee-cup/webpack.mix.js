let mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .setPublicPath("dist")
  .js("resources/assets/scripts/main.js", "scripts/")
  .sass("node_modules/bootstrap/scss/bootstrap.scss", "styles/")
  .sass("resources/assets/styles/main.scss", "styles/")
  .options({
    processCssUrls: false,
  });

mix.browserSync({
  proxy: "localhost",
  files: [
    'resources/views/**',
    'dist/**',
  ]
});

if (mix.inProduction()) {
  mix.version();
}
