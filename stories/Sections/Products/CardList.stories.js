import DefaultCardList from 'components/Lists/DefaultCardList';
import {appState} from '../../data-mockup';
import React from 'react';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {};

function WarppedComponent(props) {
  return (
    <div id="__next">
      <main className="w-100 max-w-full border-2 border-gray-lightest pt-6xl pb-6xl">
        <DefaultCardList
          products={props.appState.products}
          card={props.appState.card}
          user={props.appState.user}
          updateCard={props.appState.updateCard}
        />
      </main>
    </div>
  );
}

export default {
  title: 'Sections/Products',
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
      delay: 2500,
    },
  },
};

storiesOf('Sections/Products', module).add(
  'List',
  withPropsCombinations(
    WarppedComponent,
    {appState: [appState]},
    {
      showSource: false,
    },
  ),
);
