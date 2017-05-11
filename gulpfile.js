"use strict";

var gulp = require("gulp");
var source = require("vinyl-source-stream");
var browserify = require("browserify");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var banner = require("browserify-banner");

gulp.task("browserify", function () {
  return browserify("./src/piii.js", {standalone: "piii"})
    .plugin(banner, {file: "./.banner.txt"})
    .bundle()
    .pipe(source("piii.js"))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("uglify", ["browserify"], function () {
  return gulp.src("./dist/piii.js")
    .pipe(uglify({output: {comments: "/^!.*$/"}}))
    .pipe(rename("piii.min.js"))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("default", ["uglify"]);
