import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Products from 'src/pages/products/index';
import {appState} from '../data-mockup';

function Warpped(props) {
  return <Products {...props.appState} />;
}

export default {
  title: 'Pages/Products',
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

storiesOf('Pages/Products', module)
  .addDecorator(story => {
    document.body.classList.add('products');
    return story();
  })
  .add(
    'Products',
    withPropsCombinations(
      Warpped,
      {appState: [appState]},
      {
        showSource: false,
      },
    ),
  );
