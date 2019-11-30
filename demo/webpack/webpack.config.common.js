const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin')
module.exports = {
  entry: {
    'app': './demo/index',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [tsImportPluginFactory([{
            libraryDirectory: 'dist',
            camel2DashComponentName: false
          }])]
        }),
      }
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      src: path.resolve(__dirname, '../src')
    }
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  }
};
