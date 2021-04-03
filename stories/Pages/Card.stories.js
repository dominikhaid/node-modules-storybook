import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Card from 'src/pages/card';
import {appState} from '../data-mockup';

function Warpped(props) {
  return <Card {...props.appState} />;
}

export default {
  title: 'Pages/Card',
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

storiesOf('Pages/Card', module)
  .addDecorator(story => {
    document.body.classList.add('card');
    return story();
  })
  .add(
    'Card',
    withPropsCombinations(
      Warpped,
      {appState: [appState]},
      {
        showSource: false,
      },
    ),
  );
