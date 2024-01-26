'use strict';

const {src, dest, watch, series} = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const clean = require('gulp-clean');

function deleteFiles() {
    return src('dist', {read: false})
        .pipe(clean());

}
function convertLess() {
    return src('./src/styles/style.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist/styles'));

}

function fonts() {
    return src('./src/fonts/*.ttf')
        .pipe(dest('./dist/fonts'));

}

watch('src/styles/*.less', convertLess);

exports.clean = deleteFiles;
exports.default = series(convertLess, fonts);

