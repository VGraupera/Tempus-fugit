import * as React from "react";
import { connect } from "react-redux";

import Metric from "./Metric";

class YearLeft extends React.Component {
  state = { value: 0 };
  componentDidMount() {
    var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
    var yearFirstDay = Math.floor(timestmp / 86400000);
    var today = Math.ceil(new Date().getTime() / 86400000);
    var dayOfYear = today - yearFirstDay;

    this.setState({ value: Math.floor((dayOfYear / 365) * 100) });
  }
  render() {
    return (
      <Metric
        displayName="Year"
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

const YearContainer = connect(
  mapStateToProps,
  null
)(YearLeft);

export default YearContainer;
