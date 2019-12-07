import * as React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton
} from "baseui/modal";
import { Datepicker } from "baseui/datepicker";
import { Input } from "baseui/input";

import { connect } from "react-redux";
import Metric from "./Metric";
import { setCustom } from "../actions";

class CustomLeft extends React.Component {
  state = { isOpen: false };

  componentDidMount() {
    this.calculateValue();
  }

  calculateValue() {
    let currentDate = new Date();
    let startDate = this.getDateValue(this.props.dates[0]);
    let endDate = this.getDateValue(this.props.dates[1]);

    var diffInTime = currentDate.getTime() - startDate.getTime();
    var timePeriod = endDate.getTime() - startDate.getTime();

    let value = Math.floor((diffInTime / timePeriod) * 100);
    if (currentDate < startDate) {
      value = 0;
    }
    if (currentDate > endDate) {
      value = 100;
    }

    this.setState({ value });
  }

  setOpen(value) {
    this.setState({ isOpen: value });
  }

  setLabel(text) {
    this.props.setCustom({ dates: this.props.dates, label: text });
  }

  setDate(val, index) {
    let newDates = this.props.dates;
    newDates[index] = val;
    this.props.setCustom({ dates: newDates, label: this.props.label });
    this.calculateValue();
  }

  getDateValue(val) {
    if (typeof val === "string") return new Date(val);
    else return val;
  }

  render() {
    return (
      <React.Fragment>
        <Metric
          displayName={this.props.label}
          value={this.state.value}
          invert={this.props.timeUsed}
          onClick={() => this.setOpen(true)}
        />
        <Modal onClose={() => this.setOpen(false)} isOpen={this.state.isOpen}>
          <ModalHeader>Custom Countdown</ModalHeader>
          <ModalBody>
            <label>Name</label>
            <Input
              value={this.props.label}
              onChange={e => this.setLabel(e.target.value)}
              placeholder="Label"
            />
            <label>Start date</label>
            <Datepicker
              value={[this.getDateValue(this.props.dates[0])]}
              onChange={({ date }) => this.setDate(date, 0)}
              maxDate={this.getDateValue(this.props.dates[1])}
              formatString="MM/dd/yyyy"
            />
            <label>End date</label>
            <Datepicker
              value={[this.getDateValue(this.props.dates[1])]}
              onChange={({ date }) => this.setDate(date, 1)}
              minDate={this.getDateValue(this.props.dates[0])}
              formatString="MM/dd/yyyy"
            />
          </ModalBody>
          <ModalFooter>
            <ModalButton onClick={() => this.setOpen(false)}>OK</ModalButton>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    label: state.custom.label,
    dates: state.custom.dates,
    timeUsed: "1" === state.prefs.timeUsed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCustom: val => {
      dispatch(setCustom(val));
    }
  };
};

const CustomContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomLeft);

export default CustomContainer;
