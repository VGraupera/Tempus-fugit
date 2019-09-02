import * as React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton
} from "baseui/modal";
import { Slider } from "baseui/slider";
import Metric from "./Metric";

export default class DayLeft extends React.Component {
  state = { isOpen: false, wakingHours: [0, 24] };

  componentDidMount() {
    const wakingHours = JSON.parse(localStorage.getItem("wakingHours"));
    if (wakingHours) {
      this.setState({ wakingHours });
    }
  }
  setOpen(value) {
    this.setState({ isOpen: value });
  }
  setWakingHours(value) {
    this.setState({ wakingHours: value });
    localStorage.setItem("wakingHours", JSON.stringify(value));
  }

  render() {
    let hour = new Date().getHours();
    const { wakingHours } = this.state;
    if (hour < wakingHours[0]) hour = wakingHours[0];
    if (hour > wakingHours[1]) hour = wakingHours[1];
    const value = Math.floor(
      ((hour - wakingHours[0]) / (wakingHours[1] - wakingHours[0])) * 100
    );

    return (
      <React.Fragment>
        <Metric
          displayName="Day"
          value={value}
          onClick={() => this.setOpen(true)}
        />
        <Modal onClose={() => this.setOpen(false)} isOpen={this.state.isOpen}>
          <ModalHeader>Hours in the day</ModalHeader>
          <ModalBody>
            Enter the hours in the day you want to track.
            <Slider
              value={this.state.wakingHours}
              max={24}
              min={0}
              step={0.5}
              onChange={({ value }) => value && this.setWakingHours(value)}
            />
          </ModalBody>
          <ModalFooter>
            <ModalButton onClick={() => this.setOpen(false)}>Okay</ModalButton>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
