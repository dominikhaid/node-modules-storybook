import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import DBError from 'src/pages/500';

export default {
  title: 'Pages/500',
  component: DBError,
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

storiesOf('Pages/500', module)
  .addDecorator(story => {
    document.body.classList.add('error-500');
    return story();
  })
  .add(
    '500',
    withPropsCombinations(
      DBError,
      {},
      {
        showSource: false,
      },
    ),
  );
