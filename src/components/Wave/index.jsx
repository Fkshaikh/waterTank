import React from "react";
import "./style.css";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material";
const StyledSection = styled.section`
  position: relative;
  height: 150px;
  overflow: hidden;
`;
const Wave = () => {
  const theme = useTheme();

  return (
    <div>
      <StyledSection
        className="section"
        style={{ backgroundColor: theme.palette.primary100 }}
      >
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </StyledSection>
    </div>
  );
};

export default Wave;
