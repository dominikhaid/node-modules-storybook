import React from 'react';
import DefaultH1 from 'components/Elements/Titles/DefaultH1';

export default {
  title: 'Elements/Headlines/Headline1',
  component: DefaultH1,
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

export const Headline1 = () => <DefaultH1 title={'Sample Headline'} />;
