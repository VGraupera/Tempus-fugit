import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList
} from "baseui/header-navigation";
import { Provider } from 'react-redux'

import DayLeft from "./components/DayLeft";
import WeekLeft from "./components/WeekLeft";
import MonthLeft from "./components/MonthLeft";
import QuarterLeft from "./components/QuarterLeft";
import YearLeft from "./components/YearLeft";
import Preferences from "./components/Preferences";

import store from './store/store';

const engine = new Styletron();
const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const Centered = styled("div", {
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
});


export default function App() {
  return (
    <Provider store={store}>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <BaseProvider theme={LightTheme}>
        <HeaderNavigation>
          <NavigationList $align={ALIGN.left}>
            <NavigationItem>Tempus Fugit</NavigationItem>
          </NavigationList>
        </HeaderNavigation>
        <Centered>
          <DayLeft />
          <WeekLeft />
          <MonthLeft />
          <QuarterLeft />
          <YearLeft />
          <Preferences />
        </Centered>
      </BaseProvider>
    </StyletronProvider>
    </Provider>
  );
}
