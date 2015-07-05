var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var webpack = require('webpack');

gulp.task('build', function(callback) {
  webpack(
    {
      entry: [path.resolve(__dirname, 'index.js')],
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              optional: [
                'es7.exportExtensions',
                'es7.trailingFunctionCommas',
              ],
            },
          },
        ],
      },
    },
    function(err, stats) {
      if (err) {
        throw new gutil.PluginError('webpack', err);
      }
      gutil.log('[webpack]', stats.toString());
      callback();
    }
  );
});
