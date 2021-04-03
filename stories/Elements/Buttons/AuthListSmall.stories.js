import AuthProvider from 'components/Auth/AuthListSmall';
import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import TextDivider from 'components/Elements/Divider/TextDivider';
import AddUserIcon from 'public/icons/phosphor-icons/assets/duotone/user-circle-plus-duotone.svg';
import React from 'react';
import {appState} from '../../data-mockup';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

function WarppedComponent(props) {
  return (
    <main className="w-100 max-w-full border-2 border-gray-lightest pt-6xl pb-6xl">
      <div
        style={{maxWidth: '500px'}}
        className="p-lg flex flex-row flex-wrap  place-content-center justify-self-center place-self-center w-100 h-100  rounded-md border-2 border-primary"
      >
        <TextDivider className="text-center" title={'Sign In  With'} />
        <div className="ml-lg items-center justify-center spaced flex-warp">
          <DefaultButton
            aria={`register`}
            className="small"
            type="icon"
            style={{
              width: '50px',
              height: '50px',
            }}
            icon={<AddUserIcon />}
            onClick={e => {
              e.preventDefault();
              setRender('register');
            }}
          />
          <AuthProvider
            className="flex-1 ml-lg"
            user={appState.user}
            updateState={appState.updateState}
          />
        </div>
      </div>
    </main>
  );
}

export default {
  title: 'Elements/Buttons/Social',
  component: WarppedComponent,
};

storiesOf('Elements/Buttons/Social', module).add(
  'Social',
  withPropsCombinations(
    // provide your component
    WarppedComponent,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {},
    {showSource: false},
  ),
);
