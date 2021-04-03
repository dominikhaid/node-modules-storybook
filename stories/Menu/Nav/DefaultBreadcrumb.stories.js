import React from 'react';
import DefaultBreadcrumb from 'components/Elements/Breadcrumbs/DefaultBreadcrumb';
import {appState} from '../../data-mockup';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {};

function WarppedComponent(props) {
  return (
    <div id="__next" className={`${props.class}`}>
      <header className="w-100 max-w-full border-2 border-gray-lightest pt-6xl pb-6xl">
        <aside
          style={{backgroundColor: '#f9f9f9'}}
          className={
            'w-100 sm:p-lg md:p-lg align-center place-items-center py-2xl lg:px-2xl xl:px-2xl place-content-start  inline-flex flex-wrap'
          }
        >
          <DefaultBreadcrumb {...appState} />
        </aside>
      </header>
    </div>
  );
}

export default {
  title: 'Menu/Nav/Breadcrumb',
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

storiesOf('Menu/Nav/Breadcrumb', module).add(
  'Breadcrumb',
  withPropsCombinations(
    WarppedComponent,
    {},
    {
      showSource: true,
    },
  ),
);
