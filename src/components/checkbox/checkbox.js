import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function ControlledCheckbox(data, selected) {
  const [checked, setChecked] = React.useState(selected);

  const handleChange = (event) => {
    console.log(event);
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
