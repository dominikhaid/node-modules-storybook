import React from 'react';
import {appState} from '../../data-mockup';
import DeafultCardActions from 'components/Elements/Buttons/DeafultCardActions';

export default {
  title: 'Sections/Products/Actions',
  component: DeafultCardActions,
};

export const Actions = () => (
  <div className="p-6xl">
    <DeafultCardActions item={appState.card.products[0]} />
  </div>
);
