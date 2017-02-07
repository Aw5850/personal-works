var gulp = require('gulp'); //获取gulp
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
        port: 8888
    });
});
//编译less
gulp.task('less', function() {
    return gulp.src('./less/index.less')
        .pipe(less())
        .pipe(gulp.dest('./dest'))

});
gulp.task('watch', function() {
    gulp.watch('./less/*.less', ['less']); //监控css文件
    gulp.watch('./js/*.js', ['script']); //监控js文件
    gulp.watch(['./*.html'], ['html']); //监控html文件
}); //执行gulp server开启服务器
gulp.task('server', ['connect', 'watch']);
// 在命令行使用 gulp auto 启动此任务

gulp.task('default', ['webserver', 'less', 'watch'], function() {
    var processors = [
        autoprefixer({
            browsers: ['last 5 version']
        }),
        mqpacker,
        csswring
    ];
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'))
});
