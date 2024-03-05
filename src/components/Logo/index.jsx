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
  height: 100px;
  width: 80%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

const Logo = () => {
  const theme = useTheme();

  return (
    <div>
      <StyledCard
        style={{
          backgroundColor: theme.palette.primary200,
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/logo.jpg"}
          alt="logo"
          style={{
            width: "80px",
            height: "80px",
            marginTop: "10px",
            mixBlendMode: "color-burn",
          }}
        />
      </StyledCard>
    </div>
  );
};

export default Logo;
