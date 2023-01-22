import React from "react";
import { ToggleButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ShortcutNavigation = () => {
  return (
    <div className="my-4">
      <NavLink to="/manageleadentries">
        <ToggleButton type="radio" variant="outline-success" name="radio" value="Value 1">
          Leads
        </ToggleButton>
      </NavLink>
      <ToggleButton
        className="mx-2"
        type="radio"
        variant="outline-success"
        name="radio"
        value="Value 1"
      >
        Followup
      </ToggleButton>
      <ToggleButton type="radio" variant="outline-success" name="radio" value="Value 1">
        Un Assigned
      </ToggleButton>
      <ToggleButton
        className="mx-2"
        type="radio"
        variant="outline-success"
        name="radio"
        value="Value 1"
      >
        Campaign
      </ToggleButton>
      <ToggleButton type="radio" variant="outline-success" name="radio" value="Value 1">
        Last 24 Hrs
      </ToggleButton>
      <ToggleButton
        className="mx-2"
        type="radio"
        variant="outline-success"
        name="radio"
        value="Value 1"
      >
        Dropper Leads
      </ToggleButton>
    </div>
  );
};

export default ShortcutNavigation;
