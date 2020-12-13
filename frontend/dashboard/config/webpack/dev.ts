import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import htmlTemplate from 'html-webpack-template'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

export const mode = 'development'

export const devtool = 'source-map'

export const entry = ['@babel/polyfill', './src/index']

export const output = {
  filename: '[name].js',
  publicPath: '/',
  path: '/',
}

export const module = {
  rules: [
    {
      test: /\.(js|ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: '> 0.25%, not dead',
                  },
                  useBuiltIns: 'usage',
                  corejs: 2,
                  modules: false,
                },
              ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              'react-hot-loader/babel',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
            ],
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                overrideBrowserslist: ['>2%', 'last 2 versions'],
              }),
            ],
          },
        },
      ],
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]',
    },
  ],
}

export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
  plugins: [
    new TsconfigPathsPlugin({
      configFile: './tsconfig.json',
      logLevel: 'INFO',
    }),
  ],
}

export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Atlantis United',
    inject: false,
    template: htmlTemplate,
    appMountId: 'app',
  }),
]
