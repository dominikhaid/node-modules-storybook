import React from 'react';
import {appState} from '../../data-mockup';
import DefaultDragger from 'components/Elements/Uploads/DefaultDragger';

export default {
  title: 'Elements/User/Dragger',
  component: DefaultDragger,
};

const DummyFrom = props => {
  delete appState.user.customerPhoto;
  return (
    <form>
      <DefaultDragger
        user={appState.user}
        style={{size: '250px'}}
        upload={{
          // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          multiple: false,
          showUploadList: true,
          name: 'files',
          accept: '.jpg,.png',
        }}
      />
    </form>
  );
};

export const Dragger = () => (
  <div className="p-6xl">
    <DummyFrom />
  </div>
);
