import * as React from "react";
import Metric from "./Metric";

export default class DayLeft extends React.Component {
  state = { value: 0 };
  componentDidMount() {
    var hour = new Date().getHours();
    this.setState({ value: Math.floor((hour / 24) * 100) });
  }
  render() {
    return <Metric displayName="Day" value={this.state.value} />;
  }
}
