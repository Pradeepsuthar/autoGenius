import React from "react";
import TextField from "@atlaskit/textfield";
import PropTypes from "prop-types";

export default function AGInput({ propstate }) {
  return (
    <TextField
      name={propstate.name}
      placeholder={propstate.placeholder}
      style={propstate.style}
      type={propstate.type}
      isDisabled={propstate.isDisable}
      isInvalid={propstate.isInvalid}
      required={propstate.required}
      id={propstate.id}
      className={propstate.className}
    />
  );
}

AGInput.propTypes = {
  propstate: PropTypes.objectOf(PropTypes.any).isRequired,
};
