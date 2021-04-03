import {appState} from '../../data-mockup';
import DeafultAddToCardButton from 'components/Elements/Buttons/DeafultAddToCardButton';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

export default {
  title: 'Elements/Buttons/Add to card',
  component: DeafultAddToCardButton,
};

storiesOf('Elements/Buttons/Add to card', module).add(
  'Add to card',
  withPropsCombinations(
    // provide your component
    DeafultAddToCardButton,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      item: [appState.products[0]],
      updateCard: [appState.updateCard],
      activeColor: [appState.card.products[0].color],
    },
    {showSource: true, style: {margin: '1rem'}},
  ),
);
