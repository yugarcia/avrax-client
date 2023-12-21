import * as React from "react";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  ColorlibStepIconRoot,
  ColorlibConnector,
} from "./styled-components.jsx";

const ColorlibStepIcon = (props) => {
  const { active, completed, className } = props;
  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {props.icon}
    </ColorlibStepIconRoot>
  );
};

const steps = ["Step 1", "Step 2", "Step 3"];

const CustomizedSteppers = ({ isTablet }) => {
  return (
    <Stack sx={{ width: "100%", marginTop: "100px" }} spacing={4}>
      <Stepper
        alternativeLabel={isTablet}
        activeStep={2}
        connector={<ColorlibConnector />}
        orientation={isTablet ? "horizontal" : "vertical"}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default CustomizedSteppers;
