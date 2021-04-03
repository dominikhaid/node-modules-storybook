import React from 'react';
import MailOutlined from 'public/icons/phosphor-icons/assets/duotone/envelope-duotone.svg';
import LockOutlined from 'public/icons/phosphor-icons/assets/duotone/lock-duotone.svg';
import UserIcon from 'public/icons/phosphor-icons/assets/duotone/user-circle-duotone.svg';
import DefaultInput from 'components/Elements/Inputs/DefaultInput';
import PhooneIcon from 'public/icons/phosphor-icons/assets/duotone/phone-duotone.svg';
import {storiesOf} from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const email = {
  name: 'email',
  type: 'email',
  aria: 'user email',
  prefix: <MailOutlined />,
  placeholder: 'E-Mail',
  value: '',
  required: true,
};

const password = {
  name: 'password',
  required: true,
  aria: 'user password',
  type: 'password',
  clear: false,
  prefix: <LockOutlined />,
  placeholder: 'Password',
  value: '',
};

const checkbox = {
  aria: 'Keep me signed in',
  name: 'remember',
  type: 'checkbox',
  label: 'Keep me signed in',
};

const text = {
  name: 'contactFirstName',
  aria: 'input your first name',
  prefix: <UserIcon />,
  type: 'text',
  placeholder: 'First Name',
  required: true,
  value: '',
};

const phone = {
  name: 'phone',
  aria: 'input your phone number',
  prefix: <PhooneIcon />,
  placeholder: 'Phone',
  type: 'tel',
  value: '',
};

const innerStyle = {};

function WarppedComponent(props) {
  return (
    <div className="max-w-full">
      <DefaultInput {...props.input} />
    </div>
  );
}

export default {
  title: 'Forms/Inputs',
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

storiesOf('Forms/Inputs', module).add(
  'Inputs',
  withPropsCombinations(
    WarppedComponent,
    {input: [phone, text, checkbox, email, password]},
    {
      showSource: true,
    },
  ),
);
