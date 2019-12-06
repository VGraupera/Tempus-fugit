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
    const { invert, value } = this.props;
    const metricValue = invert ? value : 100 - value;
    const barColor = (theme, value) => {
      let color = theme.colors.positive;

      // invert means show amount used vs remaining
      if (invert) {
        if (value > 80) {
          color = theme.colors.warning;
        }
        if (value > 90) {
          color = theme.colors.negative;
        }
      } else {
        if (value < 20) {
          color = theme.colors.warning;
        }
        if (value < 10) {
          color = theme.colors.negative;
        }
      }

      return color;
    };
    return (
      <FlexGrid
        flexGridColumnCount={2}
        flexGridColumnGap="scale500"
        flexGridRowGap="scale800"
      >
        <FlexGridItem {...narrowItemProps} onClick={this.props.onClick}>
          <label>{`${this.props.displayName}: ${metricValue}%`}</label>
        </FlexGridItem>
        <FlexGridItem {...itemProps} onClick={this.props.onClick}>
          <ProgressBar
            value={metricValue}
            successValue={100}
            overrides={{
              BarProgress: {
                style: ({ $theme, $value }) => {
                  return {
                    backgroundColor: barColor($theme, $value)
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
      </FlexGrid>
    );
  }
}
