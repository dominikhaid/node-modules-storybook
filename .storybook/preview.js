//import Tailwind from "../public/css/global.css";
import StorbookCss from "./stroybook.css";

import React from "react";
import { withNextRouter } from "storybook-addon-next-router";
import { addDecorator } from "@storybook/react";
import "@storybook/addon-console";
import { setConsoleOptions } from "@storybook/addon-console";
import { withConsole } from "@storybook/addon-console";
import { withScreenshot } from "storycap";
import { configure } from "@storybook/react";

// import {setDefaults} from 'react-storybook-addon-props-combinations';

// setDefaults({
//   // overwrite global defaults here
// });

// configure(() => {
//   // ...
// }, module);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

setConsoleOptions({
  panelExclude: [],
});

addDecorator(
  withNextRouter({
    path: "/",
    asPath: "/",
    query: {},
    push() {},
  })
);

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px",
    },
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px",
    },
  },
};

export const decorators = [
  withScreenshot,
  (Story) => (
    <>
      <Story />
    </>
  ),
];

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#fff",
      },
      {
        name: "dark",
        value: "#041E34",
      },
    ],
  },
  screenshot: {
    viewports: {
      large: {
        width: 2560,
        height: 1440,
      },
      medium: "Kindle Fire HDX landscape",
      small: "iPad",
      xsmall: "iPhone 5",
    },
    delay: 500,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: "#root",
    // sets the execution mode for the addon
    manual: false,
  },
};
