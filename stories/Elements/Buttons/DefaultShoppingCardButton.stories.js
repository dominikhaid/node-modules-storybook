import React from 'react';
import {appState} from '../../data-mockup';
import DefaultShoppingCardButton from 'components/Elements/Buttons/DefaultShoppingCardButton';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {};

function WarppedComponent(props) {
  return (
    <div className="min-h-full">
      <DefaultShoppingCardButton {...appState} />
    </div>
  );
}

export default {
  title: 'Elements/Buttons/Shopping Card',
  component: WarppedComponent,
};

storiesOf('Elements/Buttons/Shopping Card', module).add(
  'Shopping Card',
  withPropsCombinations(
    WarppedComponent,
    {},
    {
      showSource: true,
    },
  ),
);
