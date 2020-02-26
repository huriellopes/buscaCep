const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');

// Junta o JS
gulp.task('pack-js', function () {
    return gulp.src('assets/js/scripts.js')
               .pipe(concat('bundle.min.js'))
               .pipe(minify({
                   ext: {
                    min: '.js'
                   },
                   noSource: true
                }))
                .pipe(gulp.dest('assets/js'));
});

// Junta o CSS
gulp.task('pack-css', function () {
    return gulp.src(['assets/css/style.css'])
               .pipe(concat('style.min.css'))
               .pipe(cleanCss())
               .pipe(gulp.dest('assets/css'));
});

// Compila o Scss/Sass
gulp.task('sass', function () {
    return gulp.src(['assets/scss/*.scss'])
               .pipe(sass())
               .pipe(gulp.dest('assets/css'))
               .pipe(browserSync.stream());
});

// Mover JS para assets/js
gulp.task('js', function () {
    return gulp.src(['node_modules/axios/dist/axios.min.js'])
               .pipe(gulp.dest("assets/js"))
               .pipe(browserSync.stream());
});

// Servidor para compilar HTML/SCSS
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "."
    });

    gulp.watch(['node_modules/bulma/bulma.sass', 'assets/scss/*.scss'], ['sass']);
    gulp.watch('assets/js/*.js', ['pack-js']);
    gulp.watch('assets/css/*.css', ['pack-css']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

// Executa todas as tarefas
gulp.task('default', ['js', 'serve','pack-js','pack-css']);