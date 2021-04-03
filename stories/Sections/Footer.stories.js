import {appState} from '../data-mockup';
import DefaultFooter from 'components/Layout/DefaultFooter.jsx';
import React from 'react';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {};

function WarppedComponent(props) {
  return (
    <div id="__next" className={`${props.class}`}>
      <DefaultFooter {...appState} />
    </div>
  );
}

export default {
  title: 'Sections/Footer',
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

storiesOf('Sections/Footer', module).add(
  'Footer',
  withPropsCombinations(
    WarppedComponent,
    {},
    {
      showSource: false,
    },
  ),
);
