import React from 'react';
import {appState} from '../../data-mockup';
import DefaultAvatar from 'components/Elements/Avatars/DefaultAvatar';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

export default {
  title: 'Elements/User/Avatar',
  component: DefaultAvatar,
};

storiesOf('Elements/User/Avatar', module).add(
  'Avatar',
  withPropsCombinations(
    // provide your component
    DefaultAvatar,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      size: [50, 150],
      src: [
        'uploads/user/0C83D106-0218-F746-4B0F-66E6A98D631D/' +
          appState.user.customerPhoto,
        false,
      ],
    },
    {showSource: true, style: {display: 'inline-flex', margin: '1rem'}},
  ),
);
