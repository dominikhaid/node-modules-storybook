import antdStyles from '../src/antd/antd.less';
import React from 'react';
import {GlobalStyle} from '../src/shared/Global';
import {withNextRouter} from 'storybook-addon-next-router';
import {addDecorator} from '@storybook/react';
import '@storybook/addon-console';
import {setConsoleOptions} from '@storybook/addon-console';
import {withConsole} from '@storybook/addon-console';
import {withScreenshot} from 'storycap';
import {configure} from '@storybook/react';


addDecorator((storyFn, context) => withConsole()(storyFn)(context));

setConsoleOptions({
  panelExclude: [],
});

addDecorator(
  withNextRouter({
    path: '/',
    asPath: '/',
    query: {},
    push() {},
  }),
);

import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

export const decorators = [
  withScreenshot,
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#041E34',
      },
    ],
  },
  screenshot: {
    viewports: {
      large: {
        width: 2560,
        height: 1440,
      },
      medium: 'Kindle Fire HDX landscape',
      small: 'iPad',
      xsmall: 'iPhone 5',
    },
    delay: 200,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
  actions: {argTypesRegex: '^on[A-Z].*'},
  a11y: {
    element: '#root',
    manual: false,
  },
};
