const dotenv = require('dotenv')
dotenv.config()

const path = require('path')
const context = path.resolve(__dirname, 'src')

module.exports = {
  stats: {
    children: true,
  },
  output: {
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    mainFields: ['module', 'browser', 'main'],
    modules: [
      'node_modules',
    ],
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@': path.resolve(__dirname, 'src'),
      src: path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: context,
        options: {
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
              },
            ],
          ],
        },
      },
    ],
  },

  plugins: [
  ],
}
