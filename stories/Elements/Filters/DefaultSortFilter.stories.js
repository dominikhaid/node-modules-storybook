import DefaultSortFilter from 'components/Elements/Filters/DefaultSortFilter';
import {appState} from '../../data-mockup';
import React from 'react';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {};

function WarppedComponent(props) {
  return (
    <div id="__next" className={`${props.class}`}>
      <div style={{maxWidth: '320px'}}>
        <DefaultSortFilter
          products={appState.products}
          setDatalist={() => {}}
          visible={true}
        />
      </div>
    </div>
  );
}

export default {
  title: 'Elements/Filters/Sort',
  component: WarppedComponent,
};

storiesOf('Elements/Filters/Sort', module).add(
  'Sort',
  withPropsCombinations(
    WarppedComponent,
    {},
    {
      showSource: true,
    },
  ),
);
