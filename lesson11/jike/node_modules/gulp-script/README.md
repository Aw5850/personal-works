
Gulp CirruScript
----

Gulp plugin for compiling CirruScript.

### Usage

```text
npm i --save-dev gulp-cirru-script
```

```coffee
gulp.task 'script', ->
  script = require 'gulp-cirru-script'

  gulp
  .src 'source/**/*.cirru'
  .pipe script()
  .pipe gulp.dest('build/')
```

### Options

* es6(outputs ES6)

```
gulp
.src 'source/**/*.cirru'
.pipe script(es6: true)
.pipe gulp.dest('build/')
```

### Development

* build with `gulp script`

### License

MIT
