import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Index from 'src/pages/index';
import {appState} from '../data-mockup';

function Warpped(props) {
  return <Index {...props.appState} />;
}

export default {
  title: 'Pages/Home',
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

storiesOf('Pages/Home', module)
  .addDecorator(story => {
    document.body.classList.add('home');
    return story();
  })
  .add(
    'Home',
    withPropsCombinations(
      Warpped,
      {appState: [appState]},
      {
        showSource: false,
      },
    ),
  );
