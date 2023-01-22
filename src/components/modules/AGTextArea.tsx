import TextArea from "@atlaskit/textarea";
import React from "react";
import PropTypes from "prop-types";

export default function AGTextArea({ propstate }) {
  return (
    <TextArea
      name={propstate.name}
      cols={propstate.column}
      rows={propstate.row}
      isDisabled={propstate.isDisabled}
      style={propstate.style}
      isRequired={propstate.isRequired}
    />
  );
}

AGTextArea.propTypes = {
  propstate: PropTypes.objectOf(PropTypes.any).isRequired,
};
