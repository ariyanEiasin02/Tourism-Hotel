import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 40,
  },
  {
    value: 50,
  },
  {
    value: 60,
  },
  {
    value: 70,
  },
  {
    value: 80,
  },
  {
    value: 90,
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2 text-[#05264E] py-2">
        Pricing Range in US$
      </h2>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Restricted values"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          color="warning"
        />
      </Box>
    </div>
  );
}
