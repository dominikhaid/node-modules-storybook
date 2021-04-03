import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import NotFound from 'src/pages/404';

export default {
  title: 'Pages/404',
  component: NotFound,
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

storiesOf('Pages/404', module)
  .addDecorator(story => {
    document.body.classList.add('error-404');
    return story();
  })
  .add(
    '404',
    withPropsCombinations(
      NotFound,
      {},
      {
        showSource: false,
      },
    ),
  );
