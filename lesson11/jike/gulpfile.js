var gulp = require('gulp'); //获取gulp
var htmlmin = require('gulp-htmlmin'); //html压缩
var imagemin = require('gulp-imagemin'); //图片压缩
var pngcrush = require('imagemin-pngcrush');
var minifycss = require('gulp-minify-css');//css压缩
var uglify = require('gulp-uglify'); //js压缩
var rename = require('gulp-rename');//文件更名
var connect = require('gulp-connect'); //使用connect启动一个Web服务器
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

var less = require('gulp-less'); // 获取 gulp-less 模块
var livereload = require('gulp-livereload');

var path = require('path');
gulp.task('webserver', function() {
    connect.server({
        livereload: true, //自动刷新
        port: 9999
    });
});
// 压缩html
gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dest'))
});
//编译less
gulp.task('less', function() {
    return gulp.src('./less/index.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))

});
// 压缩图片
gulp.task('img', function() {
    return gulp.src('./img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('./dest/img/'))
});
// 压缩css
gulp.task('css', function() {
  return gulp.src('css/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('dest/css'))
});
//压缩js文件
gulp.task('js', function() {
  return gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dest/js'))
});
gulp.task('watch', function() {
    gulp.watch('./less/*.less', ['less']); //监控less文件
    gulp.watch('./js/*.js', [ 'js']);
}); //执行gulp server开启服务器
gulp.task('server', ['connect', 'watch']);
// 在命令行使用 gulp auto 启动此任务

gulp.task('default', ['webserver','js','css','html','img', 'less', 'watch'], function() {
    var processors = [
        autoprefixer({
            browsers: ['last 2 version', 'Firefox < 20', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
        }),
        mqpacker,
        csswring
    ];
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest/css'))
});
