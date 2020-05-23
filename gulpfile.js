var gulp = require ("gulp");
var postcss = require ("gulp-postcss");
var presetEnv = require ("postcss-preset-env");
var autoprefixer = require ("autoprefixer");
var cssnano = require ("cssnano");
var cssMixins = require ("postcss-mixins");
var easyImport = require("postcss-easy-import")
var sourcemaps = require ("gulp-sourcemaps");
var browserSync = require ("browser-sync");

var input = "./src/styles/*.css";
var output = "./dist/styles/";

var processors = [
    easyImport,
    cssMixins,
    presetEnv({stage: 0}),
    //autoprefixer({overrideBrowserslist: "last 3 versions"})
    //Nije maknuto iz package.json
]

// css task
gulp.task("css", function () {
  return gulp.src(input)
  .pipe(sourcemaps.init())
  .pipe(postcss(processors))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(output));
});

//css watch task
gulp.task("watch", function() {
  gulp.watch('src/styles/*.pcss', gulp.series("css"));
})

gulp.task("sync", function() {
  browserSync.init({
    server: {
      baseDir: "dist"
      },
  files: ["dist/styles/*.css", "dist/*.html", "dist/scripts/*.js"]
});
});



//defaul task
gulp.task('default', gulp.parallel("css", "watch", "sync"));
