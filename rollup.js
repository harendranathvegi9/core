import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import uglify      from 'rollup-plugin-uglify'


export default {
  entry: 'aot/demo/src/main.js',
  dest: 'aot/bundle.min.js', // output a single application bundle
  sourceMap: true,
  format: 'iife',
  plugins: [
    alias({
    '@ng-bootstrap/ng-bootstrap': 'aot/src/index.js'
    }),
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: 'node_modules/rxjs/**',
    }),
    uglify()
  ]
}
