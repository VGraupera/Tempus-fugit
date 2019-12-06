import * as React from "react";
import { connect } from "react-redux";

import Metric from "./Metric";

class HalfLeft extends React.Component {
  state = { value: 0 };
  componentDidMount() {
    let currentDate = new Date();
    let startDate = new Date();
    let endDate = new Date();

    if (currentDate.getMonth() <= 5) {
      startDate.setMonth(0);
      startDate.setDate(1);
      endDate.setMonth(5);
      endDate.setDate(30);
    } else {
      startDate.setMonth(5);
      startDate.setDate(30);
      endDate.setMonth(11);
      endDate.setDate(31);
    }

    var diffInTime = currentDate.getTime() - startDate.getTime();
    var timePeriod = endDate.getTime() - startDate.getTime();

    this.setState({ value: Math.floor((diffInTime / timePeriod) * 100) });
  }
  render() {
    return (
      <Metric
        displayName="Half"
        invert={this.props.timeUsed}
        value={this.state.value}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    timeUsed: "1" === state.prefs.timeUsed
  };
};

const HalfContainer = connect(mapStateToProps, null)(HalfLeft);

export default HalfContainer;
