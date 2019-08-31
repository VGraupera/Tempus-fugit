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

export default class Metric extends React.Component {
  render() {
    const metricValue = 100 - this.props.value;
    return (
      <FlexGrid
        flexGridColumnCount={2}
        flexGridColumnGap="scale500"
        flexGridRowGap="scale800"
      >
        <FlexGridItem {...itemProps}>
          <ProgressBar
            value={metricValue}
            successValue={100}
            overrides={{
              BarProgress: {
                style: ({ $theme, $value }) => {
                  let color = $theme.colors.positive;
                  if ($value < 20) {
                    color = $theme.colors.warning;
                  }
                  if ($value < 10) {
                    color = $theme.colors.negative;
                  }
                  return {
                    backgroundColor: color
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
          <label>{`${this.props.displayName}: ${metricValue}%`}</label>
        </FlexGridItem>
      </FlexGrid>
    );
  }
}
