import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Product from 'src/pages/products/[productCode]';
import {appState} from '../data-mockup';

function Warpped(props) {
  return <Product {...props.appState} />;
}

export default {
  title: 'Pages/Product',
  component: Warpped,
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

storiesOf('Pages/Product', module)
  .addDecorator(story => {
    document.body.classList.add('product-single');
    return story();
  })
  .add(
    'Product',
    withPropsCombinations(
      Warpped,
      {appState: [appState]},
      {
        showSource: false,
      },
    ),
  );
