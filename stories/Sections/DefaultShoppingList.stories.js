import React from 'react';
import {appState} from '../data-mockup';
import DefaultShoppingList from 'components/Lists/DefaultShoppingList';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {};

function WarppedComponent(props) {
  return <DefaultShoppingList card={props.card} />;
}

export default {
  title: 'Sections/Shopping Card',
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

storiesOf('Sections/Shopping Card', module).add(
  'Shopping Card',
  withPropsCombinations(
    WarppedComponent,
    {card: ['', appState.card]},
    {
      showSource: false,
      style: {maxWidth: '100vw', width: '900px', margin: '0px'},
    },
  ),
);
