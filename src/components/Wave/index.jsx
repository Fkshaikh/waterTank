import React, { useEffect, useState } from "react";
import { keyframes, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import database from "../../Database";
import { off, onValue, ref } from "firebase/database";
import "../Wave/style.css";
const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-radius: 30px;
  height: 300px;
  width: 80%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;
const StyledH1 = styled.h3`
  width: 100%;
  color: #fdfeff;
  font-size: 20px;
  text-align: center;
  color: #183563;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
`;

const scoreAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Score = styled.div`
  position: absolute;
  width: 100%;
  line-height: 0;
  top: 50%;
  color: #fdfeff;
  text-align: center;
  z-index: 10000;
  color: #183563;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
  font-size: 40px;
  animation: ${scoreAnimation} 2s infinite;
`;

const Wave = ({ setLastChecked }) => {
  const [currentLevel, setCurrentLevel] = useState(0);

  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const databaseRef = ref(database, "waterLevel");
    const handleData = (snapshot) => {
      const newLevel = snapshot.child("currentLevel").val();
      const newLastChecked = snapshot.child("lastChecked").val();
      setCurrentLevel(newLevel);
      setLastChecked(newLastChecked);
    };
    onValue(databaseRef, handleData);
    // Cleanup
    return () => {
      off(databaseRef, handleData);
    };
  }, [setLastChecked]);

  useEffect(() => {
    let animationCounter = animatedScore;
    const interval = setInterval(() => {
      if (animationCounter < currentLevel) {
        animationCounter++;
        setAnimatedScore(animationCounter);
      } else if (animationCounter > currentLevel) {
        animationCounter--;
        setAnimatedScore(animationCounter);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentLevel, animatedScore]);

  const theme = useTheme();

  return (
    <div>
      <StyledSection
        className="section"
        style={{ backgroundColor: theme.palette.primary200 }}
      >
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>

        <Score style={{ color: theme.palette.text100 }}>{animatedScore}%</Score>
        <StyledH1 style={{ color: theme.palette.text100 }}>
          Water Level
        </StyledH1>
      </StyledSection>
    </div>
  );
};

export default Wave;
