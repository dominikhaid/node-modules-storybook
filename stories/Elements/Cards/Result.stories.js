import React from 'react';
import {appState} from '../../data-mockup';
import DefaultResult from 'components/Elements/Results/DefaultResult';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import SmileOutlined from 'public/icons/phosphor-icons/assets/duotone/smiley-duotone.svg';

const innerStyle = {};

function WarppedComponent(props) {
  return (
    <div id="__next" className={`${props.class}`}>
      <DefaultResult
        className="text-secondary shadow-lg bg-white"
        icon={<SmileOutlined className="animate-popIn text-primary" />}
        title="The Demo Ends Here"
      >
        <p className="text-primary font-bold">
          visit us at&nbsp;
          <a
            href="https://www.dominikhaid.de"
            target="_blank"
            className="text-primary"
            rel="noopener noreferrer"
          >
            www.dominikhaid.de
          </a>
        </p>
      </DefaultResult>
    </div>
  );
}

export default {
  title: 'Elements/Cards/Result',
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

storiesOf('Elements/Cards/Result', module).add(
  'Result',
  withPropsCombinations(
    // provide your component
    WarppedComponent,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {},
    {showSource: false},
  ),
);
