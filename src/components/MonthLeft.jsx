import * as React from "react";
import { connect } from "react-redux";

import Metric from "./Metric";

class MonthLeft extends React.Component {
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

    this.setState({
      value: Math.floor(((dayOfMonth - 1) / daysInMonth) * 100)
    });
  }
  render() {
    return (
      <Metric
        displayName="Month"
        invert={this.props.timeUsed}
        value={this.state.value}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    timeUsed: '1' === state.prefs.timeUsed
  };
};

const MonthContainer = connect(
  mapStateToProps,
  null
)(MonthLeft);

export default MonthContainer;