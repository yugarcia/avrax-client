import * as React from "react";
import { Stack, Stepper, Step, StepLabel, Typography } from "@mui/material";
import {
  ColorlibStepIconRoot,
  ColorlibConnector,
} from "./styled-components.jsx";

import CallIcon from "@mui/icons-material/Call";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

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

const steps = [
  {
    label: "Step 1: Call Us",
    description:
      "Call us and one our specialist will be more than glad to assist you. This is a really important step and is the right time to make the necessary questions concerning you the most",
    icon: <CallIcon sx={{ fontSize: 30 }} color="secondary.dark" />,
  },
  {
    label: "Step 2: Schedule a Free Estimate",
    description:
      "Schedule in-home consultation will allow you to ask questions and get a sense of our company's expertise and customer service. The project Manager addresses about noise reduction, what is the best for your home and most important thing we adjust the project to your budget. (Check our online profile in Google and read our customers’ reviews)",
    icon: <MoneyOffIcon sx={{ fontSize: 30 }} color="secondary.dark" />,
  },
  {
    label: "Step 3: Sign the Contract",
    description:
      "After ready carefully and discuss all terms and conditions both parties sign the Agreement in order to place the order. After this we submit the permit to the local building department and you don’t have to do anything, we navigate through the entire process until the permit is granted and approve it. (Check your HOA rules and regulations before proceeding).",
    icon: (
      <LibraryAddCheckOutlinedIcon
        sx={{ fontSize: 30 }}
        color="secondary.dark"
      />
    ),
  },
  {
    label: "Step 4: Schedule and complete the installation",
    description:
      "Once necessary permits are ready and HOA approval letter is released (if required), one of our Project Manager will be in touch with you to schedule a date for the installation as your best convenience. The company will remove your existing windows and doors, install the new ones, and ensure proper sealing and weatherproofing.",
    icon: (
      <CalendarMonthOutlinedIcon sx={{ fontSize: 30 }} color="secondary.dark" />
    ),
  },
];

const CustomizedSteppers = ({ isTablet }) => {
  return (
    <Stack sx={{ width: "100%", marginTop: "100px" }} spacing={4}>
      <Stepper
        alternativeLabel={isTablet}
        activeStep={3}
        connector={<ColorlibConnector />}
        orientation={isTablet ? "horizontal" : "vertical"}
      >
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={ColorlibStepIcon} icon={step.icon}>
              <Typography variant="menu" color="primary">
                {step.label}
              </Typography>
              <Typography sx={{ marginTop: "10px" }}>
                {step.description}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default CustomizedSteppers;
