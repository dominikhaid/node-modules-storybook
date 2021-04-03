import {storiesOf} from '@storybook/react';
import React from 'react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Auth from 'src/pages/auth/register';
import {appState} from '../data-mockup';

let appState2 = JSON.parse(JSON.stringify(appState));
appState2.user.registered = false;

function Warpped(props) {
  return <Auth {...props.appState} />;
}

export default {
  title: 'Pages/Auth',
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

storiesOf('Pages/Auth', module)
  .addDecorator(story => {
    document.body.classList.add('Auth');
    return story();
  })
  .add(
    'Auth',
    withPropsCombinations(
      Warpped,
      {appState: [appState, appState2]},
      {
        showSource: false,
      },
    ),
  );
