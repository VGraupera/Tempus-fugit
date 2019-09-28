import * as React from "react";
import { connect } from "react-redux";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton
} from "baseui/modal";
import { Checkbox } from "baseui/checkbox";

import Metric from "./Metric";
import { setWeekdaysOnly } from "../actions";

class MonthLeft extends React.Component {
  state = { isOpen: false };

  setOpen(value) {
    this.setState({ isOpen: value });
  }

  daysInMonth(anyDateInMonth) {
    return new Date(
      anyDateInMonth.getFullYear(),
      anyDateInMonth.getMonth() + 1,
      0
    ).getDate();
  }

  render() {
    var dayOfMonth = new Date().getDate();
    var daysInMonth = this.daysInMonth(new Date());

    let workingDays = 0;
    let workingDaysLeft = 0;
    let testDay = new Date();
    for (let d = 1; d <= daysInMonth; d++) {
      testDay.setDate(d);
      const dayOfWeek = testDay.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        // weekend skip
      } else {
        workingDays++;
        if (d >= dayOfMonth) {
          workingDaysLeft++;
        }
      }
    }

    let value = this.props.weekDaysOnly
      ? (workingDays - workingDaysLeft) / workingDays
      : (dayOfMonth - 1) / daysInMonth;
    value = Math.floor(value * 100);

    return (
      <React.Fragment>
        <Metric
          displayName="Month"
          invert={this.props.timeUsed}
          value={value}
          onClick={() => this.setOpen(true)}
        />
        <Modal onClose={() => this.setOpen(false)} isOpen={this.state.isOpen}>
          <ModalHeader>Days in the Month</ModalHeader>
          <ModalBody>
            <Checkbox
              checked={this.props.weekDaysOnly}
              onChange={() =>
                this.props.setWeekdaysOnly(!this.props.weekDaysOnly)
              }
            >
              Count only Monday through Friday.
            </Checkbox>
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
    timeUsed: "1" === state.prefs.timeUsed,
    weekDaysOnly: state.prefs.weekDaysOnly
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setWeekdaysOnly: val => {
      dispatch(setWeekdaysOnly(val));
    }
  };
};

const MonthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthLeft);

export default MonthContainer;
