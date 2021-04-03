import React from 'react';
import DefaultMainMenu from 'components/Elements/Menu/DefaultMainMenu';

export default {
  title: 'Menu/Nav/Main',
  component: DefaultMainMenu,
  parameters: {
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
    },
  },
};

export const Primary = () => <DefaultMainMenu />;
