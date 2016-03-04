var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

// Settings
var settings = {
    destFolder: '.'
}

// Path map
var languages = {
    en: 'sources/electron/docs/**/*.*',
    translations:  'sources/electron/docs-translations/**/*.*'
};

// Copy en
gulp.task('copy-en', function() {
    return gulp.src(languages.en)
        .pipe(gulp.dest(settings.destFolder + '/en/'));
});

// Copy translations
gulp.task('copy-tr', function() {
    return gulp.src(languages.translations)
        .pipe(gulp.dest(settings.destFolder));
});

// Copy
gulp.task('copy', ['copy-en', 'copy-tr']);

// Rename todo: gulp-rename
gulp.task('rename', function() {

});

//Deploy
gulp.task('deploy', function() {
    return gulp.src('./_book/**/*')
        .pipe(ghPages());
});
