import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Login from 'src/pages/login';
import {appState} from '../data-mockup';

function Warpped(props) {
  return <Login {...props.appState} />;
}

export default {
  title: 'Pages/Login',
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

storiesOf('Pages/Login', module)
  .addDecorator(story => {
    document.body.classList.add('login');
    return story();
  })
  .add(
    'Login',
    withPropsCombinations(
      Warpped,
      {appState: [appState]},
      {
        showSource: false,
      },
    ),
  );
