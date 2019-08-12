import * as React from "react";
import { ProgressBar } from "baseui/progress-bar";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

const itemProps = {
  height: "scale1000",
  display: "flex",
  alignItems: "left",
  justifyContent: "center",
  flexDirection: "column"
};

const narrowItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      style: ({ $theme }) => ({
        width: $theme.sizing.scale2400,
        flexGrow: 0
      })
    }
  }
};

const SUCCESS_VALUE = 100;

export default class Metric extends React.Component {
  render() {
    return (
      <FlexGrid
        flexGridColumnCount={2}
        flexGridColumnGap="scale500"
        flexGridRowGap="scale800"
      >
        <FlexGridItem {...itemProps}>
          <ProgressBar
            value={this.props.value}
            successValue={SUCCESS_VALUE}
            overrides={{
              BarProgress: {
                style: ({ $theme, $value }) => {
                  return {
                    backgroundColor: $theme.colors.positive
                  };
                }
              },
              Bar: {
                style: ({ $theme }) => ({
                  height: $theme.sizing.scale800
                })
              }
            }}
          />
        </FlexGridItem>
        <FlexGridItem {...narrowItemProps}>
          <label>{`${this.props.displayName}: ${this.props.value}%`}</label>
        </FlexGridItem>
      </FlexGrid>
    );
  }
}
