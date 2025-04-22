// gatsby-node.js
const path = require('path')

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  const config = getConfig()
  
  actions.setWebpackConfig({
    // Базовые настройки кэширования
    cache: {
      type: 'filesystem',
      cacheDirectory: path.join(__dirname, '.webpack-cache'),
      buildDependencies: {
        config: [__filename],
      },
    },

    // Оптимизации для разных стадий сборки
    optimization: {
      ...(stage === 'build-javascript'
        ? {
            runtimeChunk: 'single',
            splitChunks: {
              chunks: 'all',
              maxSize: 256 * 1024, // 256 KB
              cacheGroups: {
                vendors: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                  chunks: 'all',
                },
                styles: {
                  name: 'styles',
                  test: /\.(css|scss)$/,
                  chunks: 'all',
                  enforce: true,
                },
              },
            },
          }
        : {}),
    },

    // Настройки resolve для ускорения сборки
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'react-dom': '@hot-loader/react-dom',
      },
      symlinks: false,
      cacheWithContext: false,
    },

    // Плагины для кэширования
    plugins: [
      ...(stage === 'develop'
        ? [
            new webpack.CachePlugin({
              type: 'filesystem',
              cacheDirectory: path.resolve(__dirname, '.cache/webpack'),
            }),
          ]
        : []),
    ],

    // Настройки для persistent caching
    ...(stage === 'build-javascript'
      ? {
          recordsPath: path.join(__dirname, 'webpack.records.json'),
          output: {
            ...config.output,
            filename: '[name].[contenthash].js',
            chunkFilename: '[name].[contenthash].js',
          },
        }
      : {}),
  })

  // Дополнительные оптимизации для production
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.ids.HashedModuleIdsPlugin({
          context: __dirname,
          hashFunction: 'sha256',
        }),
      ],
    })
  }
}