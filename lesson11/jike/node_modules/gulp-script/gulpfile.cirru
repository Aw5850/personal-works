
var
  gulp $ require :gulp
  cirru $ require :./src/index

gulp.task :script $ \ ()
  ... gulp
    src :src/*.cirru $ {} (:base :src)
    pipe $ cirru $ {} (:es6 false)
    pipe $ gulp.dest :lib/
