import * as React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton
} from "baseui/modal";
import { Slider } from "baseui/slider";
import { connect } from "react-redux";
import Metric from "./Metric";
import { setDailyHours } from "../actions";

class DayLeft extends React.Component {
  state = { isOpen: false };

  setOpen(value) {
    this.setState({ isOpen: value });
  }

  render() {
    let hour = new Date().getHours();
    const { wakingHours } = this.props;
    if (hour < wakingHours[0]) hour = wakingHours[0];
    if (hour > wakingHours[1]) hour = wakingHours[1];
    let value = Math.floor(
      ((hour - wakingHours[0]) / (wakingHours[1] - wakingHours[0])) * 100
    );

    return (
      <React.Fragment>
        <Metric
          displayName="Day"
          value={value}
          invert={this.props.timeUsed}
          onClick={() => this.setOpen(true)}
        />
        <Modal onClose={() => this.setOpen(false)} isOpen={this.state.isOpen}>
          <ModalHeader>Hours in the day</ModalHeader>
          <ModalBody>
            Enter the hours in the day you want to track.
            <Slider
              value={this.props.wakingHours}
              max={24}
              min={0}
              step={0.5}
              onChange={({ value }) => value && this.props.setDailyHours(value)}
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
    wakingHours: state.days.dailyHours,
    timeUsed: '1' === state.prefs.timeUsed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDailyHours: val => {
      dispatch(setDailyHours(val));
    }
  };
};

const DayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayLeft);

export default DayContainer;