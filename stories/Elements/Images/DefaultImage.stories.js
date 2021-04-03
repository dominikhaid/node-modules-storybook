import React from 'react';
import {appState} from '../../data-mockup';
import DefaultImage from 'components/Elements/Images/DefaultImage';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

function Images(props) {
  return (
    <div style={{maxWidth: '500px'}} className="w-full m-auto">
      <DefaultImage
        layout="responsive"
        height={50}
        width={50}
        src={
          'uploads/user/0C83D106-0218-F746-4B0F-66E6A98D631D/' +
          props.appState.user.customerPhoto
        }
      />
    </div>
  );
}

export default {
  title: 'Elements/Images',
  component: Images,
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

storiesOf('Elements/Images', module).add(
  'Images',
  withPropsCombinations(
    Images,
    {appState: [appState]},
    {
      showSource: false,
    },
  ),
);
