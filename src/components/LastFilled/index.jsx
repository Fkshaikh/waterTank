import React from "react";
import { Card, useTheme } from "@mui/material";
import styled from "@emotion/styled";

import "../Wave/style.css";
const StyledCard = styled(Card)`
  position: relative;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-radius: 30px;
  height: 150px;
  width: 80%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

const Text = styled.div`
  width: 100%;
  color: #fdfeff;
  font-size: 15px;
  text-align: center;
  color: #183563;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
`;
const Text2 = styled.div`
  width: 100%;
  color: #fdfeff;
  font-size: 20px;
  text-align: center;
  color: #183563;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
  margin-top: 50px;
`;
// Function to convert 24-hour time format to 12-hour format
const convertTo12Hour = (time24h) => {
  const [hours, minutes, seconds] = time24h.split(":");
  let formattedHours = parseInt(hours, 10);
  let modifier = "AM";
  if (formattedHours === 0) {
    formattedHours = 12;
  } else if (formattedHours >= 12) {
    formattedHours = formattedHours === 12 ? 12 : formattedHours - 12;
    modifier = "PM";
  }
  return `${formattedHours}:${minutes}:${seconds} ${modifier}`;
};

const LastFilled = ({ lastChecked }) => {
  const theme = useTheme();
  const formattedTime = lastChecked
    ? convertTo12Hour(lastChecked)
    : "Loading...";
  return (
    <div>
      <StyledCard
        style={{
          backgroundColor: theme.palette.primary200,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Text2 style={{ color: theme.palette.text200, top: "20px" }}>
          {formattedTime}
        </Text2>
        <Text style={{ color: theme.palette.text100 }}>Last Checked</Text>
      </StyledCard>
    </div>
  );
};

export default LastFilled;
