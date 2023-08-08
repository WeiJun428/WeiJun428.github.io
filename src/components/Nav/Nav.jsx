import * as React from "react";

import LinkTab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      orientation="vertical"
      value={value}
      onChange={handleChange}
      sx={{ width: 150 }}
    >
      <LinkTab label="About" href="#about" />
      <LinkTab label="Experience" href="#experience" />
      <LinkTab label="Project" href="#project" />
    </Tabs>
  );
}
