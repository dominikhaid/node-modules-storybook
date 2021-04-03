import DefaultLoginFrom from 'components/Forms/DefaultLoginFrom';
import React from 'react';
import {appState} from '../data-mockup';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const innerStyle = {};

function WarppedComponent(props) {
  return (
    <div id="__next" className={`${props.class}`}>
      <main className="w-full max-w-full border-2 border-gray-lightest pt-6xl pb-6xl">
        <div
          className="w-100 max-w-full sm:p-lg md:p-4xl lg:p-6xl xl:p-6xl sm:mx-none md:mx-xl lg:mx-xl xl:mx-xl"
          style={{maxWidth: '900px'}}
        >
          <DefaultLoginFrom
            user={appState.user}
            updateCard={appState.updateCard}
          />
        </div>
      </main>
    </div>
  );
}

export default {
  title: 'Forms/Login',
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

storiesOf('Forms/Login', module).add(
  'Login',
  withPropsCombinations(
    WarppedComponent,
    {},
    {
      showSource: true,
    },
  ),
);
