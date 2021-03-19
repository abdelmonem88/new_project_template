const gulp = require("gulp"),
 concat = require("gulp-concat"),
 autoprefixer = require("gulp-autoprefixer"),
 sass = require("gulp-sass"),
sourcemaps = require("gulp-sourcemaps");

//css task
gulp.task("css", function () {
 return gulp
  .src(["stage/css/**/*.css", "stage/css/**/*.scss"])
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: "compressed" }))
  .pipe(autoprefixer("last 2 versions"))
  .pipe(concat("main.css"))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("dist/css"))
});

//Watch Tasks
gulp.task("watch", function () {
 require("./server.js");
 gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], gulp.series("css"));
});
