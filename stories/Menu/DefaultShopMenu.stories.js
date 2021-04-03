import React from 'react';
import {appState} from '../data-mockup';
import DefaultShopMenu from 'components/Elements/Menu/DefaultShopMenu';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {};
let appState2 = JSON.parse(JSON.stringify(appState));
delete appState2.user.customerPhoto;

let appState3 = JSON.parse(JSON.stringify(appState));
delete appState3.user;
appState3.user = {};

function WarppedComponent(props) {
  return <DefaultShopMenu {...props.appState} />;
}

export default {
  title: 'Menu/Shop User',
  component: WarppedComponent,
};

storiesOf('Menu/Shop User', module).add(
  'Shop User',
  withPropsCombinations(
    WarppedComponent,
    {appState: [appState, appState2, appState3]},
    {
      showSource: true,
      style: {margin: '1rem'},
    },
  ),
);
