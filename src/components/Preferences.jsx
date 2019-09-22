import * as React from "react";
import { Radio, RadioGroup } from "baseui/radio";
import { connect } from "react-redux";
import { setRemaining } from "../actions";

const Prefs = ({ showRemaining, setRemaining }) => {
  return (
    <RadioGroup
      name="radio group"
      onChange={e => setRemaining(e.target.value)}
      value={showRemaining}
    >
      <Radio value="0">Time Left</Radio>
      <Radio value="1">Time Used</Radio>
    </RadioGroup>
  );
};

const mapStateToProps = state => {
  return {
    showRemaining: state.prefs.showRemaining
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setRemaining: val => {
      dispatch(setRemaining(val));
    }
  };
};

const SavedPrefs = connect(
  mapStateToProps,
  mapDispatchToProps
)(Prefs);

export default SavedPrefs;
