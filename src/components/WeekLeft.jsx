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

class WeekLeft extends React.Component {
  state = { isOpen: false };

  setOpen(value) {
    this.setState({ isOpen: value });
  }

  render() {
    var dayOfWeek = new Date().getDay();
    // Sunday - Saturday : 0 - 6

    let value = this.props.weekDaysOnly
      ? Math.max(0, (5 - dayOfWeek)) / 5
      : (7 - dayOfWeek) / 7;
    value = Math.floor(value * 100);

    return (
      <React.Fragment>
        <Metric
          displayName="Week"
          invert={!this.props.timeUsed}
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

const WeekContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekLeft);

export default WeekContainer;
