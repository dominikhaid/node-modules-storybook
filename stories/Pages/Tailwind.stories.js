import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Tailwind from 'src/pages/tailwind';
import {appState} from '../data-mockup';

export default {
  title: 'Pages/Tailwind',
  component: Tailwind,
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

storiesOf('Pages/Tailwind', module)
  .addDecorator(story => {
    document.body.classList.add('tailwind');
    return story();
  })
  .add(
    'Tailwind',
    withPropsCombinations(
      Tailwind,
      {appState: [appState]},
      {
        showSource: false,
      },
    ),
  );
