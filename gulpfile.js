const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del')

// авто-обновление проекта в браузере
function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
}

// удаление папки  "dist"
function cleanDist() {
    return del('dist')
}

// минифицирование картинок
function images() {
    return src('app/images/**/*')
        .pipe(imagemin(
            [
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        { removeViewBox: true },
                        { cleanupIDs: false }
                    ]
                })
            ]
        ))
        .pipe(dest('dist/images'))
}

// скрипты
function scripts() {
    return src([
        'app/js/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

// разное в скрипте libs
function ajs() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

// стили
function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

// подключениие разных стилей в libs
function aStyles() {
    return src([
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css',

    ])
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('libs.min.css'))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}


// перекидывание конечных файлов в "dist"
function build() {
    return src([
        'app/css/*.min.css',
        'app/css/normalize.css',
        'app/fonts/**/*',
        'app/js/*.min.js',
        'app/*.html'
    ], { base: 'app' })
        .pipe(dest('dist'))
}

// наблюдение за проектом
function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}



exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.ajs = ajs;
exports.aStyles = aStyles;

exports.build = series(cleanDist, images, build); // действия по - очереди
exports.default = parallel(styles, aStyles, ajs, scripts, browsersync, watching); // паралельные действия при написании "gulp"