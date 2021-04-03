import React, {useContext} from 'react';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import {MessageContext} from 'context/MessageProvider';

const DefaultMessages = props => {
  const addMessage = useContext(MessageContext);
  addMessage({
    content: `Message`,
    type: props.type,
  });
  return (
    <DefaultButton
      title={props.type}
      type="primary"
      onClick={() =>
        addMessage({
          content: `Message`,
          type: props.type,
        })
      }
    />
  );
};

export default {
  title: 'Elements/Messages',
  component: DefaultMessages,
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

storiesOf('Elements/Messages', module).add(
  'Messages',
  withPropsCombinations(
    // provide your component
    DefaultMessages,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      type: ['success', 'error', 'info', 'loading'],
    },
    {
      showSource: true,
    },
  ),
);
