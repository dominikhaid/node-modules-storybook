import {appState} from '../data-mockup';
import DefaultHeader from 'components/Layout/DefaultHeader.jsx';
import React from 'react';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {};

function WarppedComponent(props) {
  return <DefaultHeader {...props.appState} />;
}

export default {
  title: 'Sections/Header',
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

storiesOf('Sections/Header', module).add(
  'Header',
  withPropsCombinations(
    WarppedComponent,
    {appState: [appState]},
    {
      showSource: false,
    },
  ),
);
