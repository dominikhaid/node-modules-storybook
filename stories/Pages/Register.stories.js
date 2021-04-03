import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Register from 'src/pages/register';
import {appState} from '../data-mockup';

function Warpped(props) {
  return <Register {...props.appState} />;
}

export default {
  title: 'Pages/Register',
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

storiesOf('Pages/Register', module)
  .addDecorator(story => {
    document.body.classList.add('register');
    return story();
  })
  .add(
    'Register',
    withPropsCombinations(
      Warpped,
      {appState: [appState]},
      {
        showSource: false,
      },
    ),
  );
