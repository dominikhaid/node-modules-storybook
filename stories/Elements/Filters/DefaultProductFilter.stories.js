import DefaultProductFilter from 'components/Elements/Filters/DefaultProductFilter';
import {appState} from '../../data-mockup';
import React from 'react';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {};

function WarppedComponent(props) {
  return (
    <div id="__next" className={`${props.class}`}>
      <DefaultProductFilter
        products={appState.products}
        setDatalist={() => {}}
        visible={true}
      />
    </div>
  );
}

export default {
  title: 'Elements/Filters/Options',
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

storiesOf('Elements/Filters/Options', module).add(
  'Options',
  withPropsCombinations(
    WarppedComponent,
    {},
    {
      showSource: true,
    },
  ),
);
