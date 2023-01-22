import React from "react";
import Button from "@atlaskit/button";
import PropTypes from "prop-types";

export default function AGButton(propstate) {
  return (
    <Button appearance={propstate.type} isDisabled={propstate.isDisable}>
      Button
    </Button>
  );
}

AGButton.propTypes = {
  propstate: PropTypes.objectOf(PropTypes.any).isRequired,
};
