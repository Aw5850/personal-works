// 启用 fis-spriter-csssprites 插件
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});
// 加 md5
fis.match('*.{js,css,png}', {
  useHash: true
});
// 所有的 js
fis.match('*.js', {
//发布到/static/js/js目录下
  release : '/static/js$0',
  optimizer: fis.plugin('uglify-js')
});

// 所有的 css
fis.match('*.css', {
  useSprite: true,
  //发布到/static/css/css目录下
  release : '/static/css$0',
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')
});