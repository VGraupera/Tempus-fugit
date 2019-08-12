import * as React from "react";

import Metric from "./Metric";

export default class MonthLeft extends React.Component {
  state = { value: 0 };

  daysInMonth(anyDateInMonth) {
    return new Date(
      anyDateInMonth.getFullYear(),
      anyDateInMonth.getMonth() + 1,
      0
    ).getDate();
  }

  componentDidMount() {
    var dayOfMonth = new Date().getDate();
    var daysInMonth = this.daysInMonth(new Date());

    this.setState({ value: Math.floor((dayOfMonth / daysInMonth) * 100) });
  }
  render() {
    return <Metric displayName="Month" value={this.state.value} />;
  }
}
