"use strict";

var gulp = require("gulp");

// Gulp...
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var watch = require("gulp-watch");

// Outros...
var banner = require("browserify-banner");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

gulp.task("browserify", function () {
  return browserify("src/index.js", {standalone: "Piii"})
    .plugin(banner, {file: ".banner.txt"})
    .bundle()
    .pipe(source("piii.js"))
    .pipe(gulp.dest("dist"));
});

gulp.task("uglify", ["browserify"], function () {
  return gulp.src("dist/piii.js")

    /**
     * Queria fazer toda essa porra toda somente pela linha
     * de comando, mas essas merdas de comentários não são
     * removidos corretamente com "--comments" no "uglify-js".
     *
     * PQP! Pq no <zenorocha/clipboard.js> ele funciona?
     */
    .pipe(uglify({output: {comments: "/^!/"}}))
    .pipe(rename("piii.min.js"))
    .pipe(gulp.dest("dist"));
});

gulp.task("default", [
  "uglify"
]);
