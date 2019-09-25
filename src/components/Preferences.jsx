import * as React from "react";
import { Radio, RadioGroup } from "baseui/radio";
import { Block } from "baseui/block";

import { connect } from "react-redux";
import { setTimeUsed } from "../actions";

const Prefs = ({ timeUsed, setTimeUsed }) => {
  return (
    <Block paddingLeft="20px">
      <RadioGroup
        name="radio group"
        onChange={e => setTimeUsed(e.target.value)}
        value={timeUsed}
      >
        <Radio value="0">Time Left</Radio>
        <Radio value="1">Time Used</Radio>
      </RadioGroup>
    </Block>
  );
};

const mapStateToProps = state => {
  return {
    timeUsed: state.prefs.timeUsed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTimeUsed: val => {
      dispatch(setTimeUsed(val));
    }
  };
};

const SavedPrefs = connect(
  mapStateToProps,
  mapDispatchToProps
)(Prefs);

export default SavedPrefs;
