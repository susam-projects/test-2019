import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import htmlTemplate from 'html-webpack-template'
import HtmlWebpackPlugin from 'html-webpack-plugin'

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
  alias: {
    '@frontend/auth': '@frontend/auth/src',
    '@frontend/common': '@frontend/common/src',
    '@frontend/users': '@frontend/users/src',
    '@frontend/utils': '@frontend/utils/src',
    '@frontend/profile': '@frontend/profile/src',
    // '@ui/button': '@ui/button/src',
    // '@ui/header': '@ui/header/src',
    // '@ui/input': '@ui/input/src',
    // '@ui/layout': '@ui/layout/src',
    // '@ui/link': '@ui/link/src',
    // '@ui/text': '@ui/text/src',
    // '@ui/theme': '@ui/theme/src',
  },
}

export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Atlantis United',
    inject: false,
    template: htmlTemplate,
    appMountId: 'app',
  }),
]
