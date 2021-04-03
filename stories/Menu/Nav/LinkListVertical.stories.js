import React from 'react';
import DefaultVerticalLinkList from 'components/Elements/Lists/DefaultVerticalLinkList';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {};

function WarppedVerticalLinkList(props) {
  return (
    <div id="__next" className={`${props.class}`}>
      <footer className="gradient-primary w-100" style={innerStyle} id="main">
        <DefaultVerticalLinkList />
      </footer>
    </div>
  );
}

export default {
  title: 'Menu/Nav/Links',
  component: WarppedVerticalLinkList,
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

storiesOf('Menu/Nav/Links', module).add(
  'Liste vertikal',
  withPropsCombinations(
    WarppedVerticalLinkList,
    {},
    {
      showSource: true,
    },
  ),
);
