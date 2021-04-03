import React from 'react';
import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import SmileOutlined from 'public/icons/phosphor-icons/assets/duotone/smiley-duotone.svg';

function Warpped(props) {
  return (
    <DefaultButton
      style={{width: '45px', height: '45px'}}
      disabled={props.disabled}
      type={props.type}
      icon={props.icon}
      className={props.className}
    />
  );
}

export default {
  title: 'Elements/Buttons/Icon',
  component: Warpped,
};

storiesOf('Elements/Buttons/Icon', module).add(
  'Icon',
  withPropsCombinations(
    // provide your component
    Warpped,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      className: ['small'],
      icon: [<SmileOutlined />],
      type: ['icon'],
      disabled: [true, false],
    },
    {
      showSource: true,
      style: {margin: '1rem'},
    },
  ),
);
