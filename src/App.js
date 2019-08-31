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

import DayLeft from "./components/DayLeft";
import MonthLeft from "./components/MonthLeft";
import QuarterLeft from "./components/QuarterLeft";
import YearLeft from "./components/YearLeft";

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
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <BaseProvider theme={LightTheme}>
        <HeaderNavigation>
          <NavigationList $align={ALIGN.left}>
            <NavigationItem>Tempus Fugit</NavigationItem>
          </NavigationList>
        </HeaderNavigation>
        <Centered>
          <DayLeft />
          <MonthLeft />
          <QuarterLeft />
          <YearLeft />
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}
