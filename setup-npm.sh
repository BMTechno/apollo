#!/bin/bash
# opinionated npm package downloader
# @author rezki

packages=(
    acorn
    babel-core
    browser-sync
    chai
    chai-jquery
    del
    drool
    escodegen
    google-closure-compiler
    gulp
    gulp-autoprefixer
    gulp-cache
    gulp-closure-compiler
    gulp-concat
    gulp-connect
    gulp-css-inline-images
    gulp-csso
    gulp-file
    gulp-flatten
    gulp-front-matter
    gulp-header
    gulp-if
    gulp-iife
    gulp-imagemin
    gulp-jscs
    gulp-jshint
    gulp-load-plugins
    gulp-marked
    gulp-mocha-phantomjs
    gulp-open
    gulp-rename
    gulp-replace
    gulp-sass
    gulp-shell
    gulp-size
    gulp-sourcemaps
    gulp-subtree
    gulp-tap
    gulp-uglify
    gulp-util
    gulp-zip
    humanize
    jshint-stylish
    merge-stream
    mocha
    prismjs
    run-sequence
    swig
    through2
    vinyl-paths
)

is_npm()
{
    echo 'npm command does not exists.'
    exit 1
}

create_package_json()
{
    npm init
}

install_packages()
{
    npm i -D ${packages[@]}
}

if ! npm_var="$(type -p "npm")" || [ -z $npm_var ]; then
    is_npm; exit 1;
else
    if [ -e package.json ]; then
        install_packages
    else
        create_package_json && install_packages
    fi
fi