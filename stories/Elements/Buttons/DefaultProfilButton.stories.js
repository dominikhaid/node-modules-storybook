import React from 'react';
import {appState} from '../../data-mockup';
import DefaultProfilButton from 'components/Elements/Buttons/DefaultProfilButton';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {};
let user2 = JSON.parse(JSON.stringify(appState.user));

delete user2.customerPhoto;

function WarppedComponent(props) {
  return (
    <DefaultProfilButton
      user={props.user}
      size={props.size}
      updateCard={appState.updateCard}
      updateState={appState.updateState}
    />
  );
}

export default {
  title: 'Elements/Buttons/Profil',
  component: WarppedComponent,
  parameters: {
    // backgrounds: {
    //   default: 'dark',
    // },
  },
};

storiesOf('Elements/Buttons/Profil', module).add(
  'Profil',
  withPropsCombinations(
    // provide your component
    WarppedComponent,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      size: [50, 100],
      user: ['', appState.user, user2],
    },
    {
      showSource: true,
      style: {
        margin: '1rem',
      },
    },
  ),
);
