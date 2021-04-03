import React from 'react';
import {appState} from '../../data-mockup';
import DefaultUserBox from 'components/Elements/Avatars/DefaultUserBox';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

function WarppedComponent(props) {
  return (
    <div id="__next" className={`${props.class}`}>
      <DefaultUserBox
        title={props.title}
        size={props.size}
        src={'uploads/user/0C83D106-0218-F746-4B0F-66E6A98D631D/' + props.src}
        content={props.content}
      />
    </div>
  );
}

export default {
  title: 'Elements/Cards/Mention',
  component: WarppedComponent,
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

storiesOf('Elements/Cards/Mention', module).add(
  'Mention',
  withPropsCombinations(
    // provide your component
    WarppedComponent,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      size: [50, 100],
      src: [appState.user.customerPhoto, false],
      title: ['Dominik Haid'],
      content: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit accusamus facilis recusandae suscipit nemo laborum amet optio ipsam libero perspiciatis, praesentium, eligendi nihil corrupti porro voluptatibus possimus ratione at totam. ',
      ],
    },
    {showSource: false},
  ),
);
