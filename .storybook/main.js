const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.js',
    // '../src/pages/**/*.stories.js',
    // '../src/components/**/*.stories.js',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    'storycap',
    'storybook-addon-designs',
    '@storybook/addon-controls',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: false,
            localIdentName: '[local]___[hash:base64:5]',
          },
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });
    return config;
  },
};
