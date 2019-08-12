import * as React from "react";
import Metric from "./Metric";

export default class YearLeft extends React.Component {
  state = { value: 0 };
  componentDidMount() {
    var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
    var yearFirstDay = Math.floor(timestmp / 86400000);
    var today = Math.ceil(new Date().getTime() / 86400000);
    var dayOfYear = today - yearFirstDay;

    this.setState({ value: Math.floor((dayOfYear / 365) * 100) });
  }
  render() {
    return <Metric displayName="Year" value={this.state.value} />;
  }
}
