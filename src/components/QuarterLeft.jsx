import * as React from "react";

import Metric from "./Metric";

export default class YearLeft extends React.Component {
  state = { value: 0 };

  daysLeftInQuarter(d) {
    d = d || new Date();
    var qEnd = new Date(d);
    qEnd.setMonth(qEnd.getMonth() + 3 - (qEnd.getMonth() % 3), 0);
    return Math.floor((qEnd - d) / 8.64e7);
  }

  daysInQuarter(d) {
    d = d || new Date();
    var qBegin = new Date(d);
    var qEnd = new Date(d);
    qBegin.setMonth(qEnd.getMonth() - (qEnd.getMonth() % 3), 0);
    qEnd.setMonth(qEnd.getMonth() + 3 - (qEnd.getMonth() % 3), 0);

    return Math.floor((qEnd - qBegin) / 8.64e7);
  }

  componentDidMount() {
    this.setState({
      value: Math.floor(
        ((this.daysInQuarter() - this.daysLeftInQuarter()) /
          this.daysInQuarter()) *
          100
      )
    });
  }
  render() {
    return <Metric displayName="Quarter" value={this.state.value} />;
  }
}
