import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

export default {
  title: 'Elements/Buttons/Button',
  component: DefaultButton,
};

storiesOf('Elements/Buttons/Button', module).add(
  'Button',
  withPropsCombinations(
    // provide your component
    DefaultButton,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      type: ['primary', 'secondary', 'outline', 'ghost'],
      title: ['Click me'],
      disabled: [true, false],
    },
    {
      showSource: true,
      style: {margin: '1rem'},
    },
  ),
);
