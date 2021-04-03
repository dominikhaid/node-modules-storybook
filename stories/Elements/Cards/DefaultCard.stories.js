import DefaultCard from 'components/Elements/Cards/DefaultCard';
import React from 'react';
import {appState} from '../../data-mockup';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

function WarppedComponent(props) {
  return (
    <div id="__next" className={`${props.class}`}>
      <main className="w-100 max-w-full border-2 border-gray-lightest pt-6xl pb-6xl">
        <DefaultCard
          style={{maxWidth: '350px'}}
          item={appState.products[0]}
          card={appState.card}
          updateCard={appState.updateCard}
        />
      </main>
    </div>
  );
}

export default {
  title: 'Elements/Cards/Product',
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

storiesOf('Elements/Cards/Product', module).add(
  'Product',
  withPropsCombinations(
    // provide your component
    WarppedComponent,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {},
    {showSource: false},
  ),
);
