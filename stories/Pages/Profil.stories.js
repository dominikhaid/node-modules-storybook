import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Profil from 'src/pages/profil';
import {appState} from '../data-mockup';

function Warpped(props) {
  return <Profil {...props.appState} />;
}

export default {
  title: 'Pages/Profil',
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

storiesOf('Pages/Profil', module)
  .addDecorator(story => {
    document.body.classList.add('profil');
    return story();
  })
  .add(
    'Profil',
    withPropsCombinations(
      Warpped,
      {appState: [appState]},
      {
        showSource: false,
      },
    ),
  );
