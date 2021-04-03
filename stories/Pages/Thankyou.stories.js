import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import ThankYou from 'src/pages/products/thank-you';
import {appState} from '../data-mockup';

function Warpped(props) {
  return <ThankYou {...props.appState} />;
}

export default {
  title: 'Pages/Thank-you',
  component: Warpped,
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

storiesOf('Pages/Thank-you', module)
  .addDecorator(story => {
    document.body.classList.add('thank-you');
    return story();
  })
  .add(
    'Thank-you',
    withPropsCombinations(
      Warpped,
      {appState: [appState]},
      {
        showSource: false,
      },
    ),
  );
