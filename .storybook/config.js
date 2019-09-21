import { configure, addDecorator } from '@storybook/react';
import React from "react";
import { LightTheme, BaseProvider, styled } from "baseui";
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';

const engine = new Styletron();

addDecorator(story => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
      {story}
      </BaseProvider>
    </StyletronProvider>
  );
});


// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);