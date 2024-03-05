import React from "react";
import { useTheme } from "@mui/material";
import styled from "@emotion/styled";

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-radius: 30px;
  height: 400px;
  width: 80%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;
const StyledH1 = styled.h1`
  width: 100vh;
  color: #fdfeff;
  font-size: 60px;
  text-align: center;
  color: #183563;
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
  transform: rotate(-90deg);
`;

const TextLogo = () => {
  const theme = useTheme();

  return (
    <div>
      <StyledSection
        className="section"
        style={{
          backgroundColor: theme.palette.primary200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledH1 style={{ color: theme.palette.text100 }}>WaterMan</StyledH1>
      </StyledSection>
    </div>
  );
};

export default TextLogo;
