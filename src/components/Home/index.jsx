import React, { useEffect, useState } from "react";
import { Card, Grid, keyframes, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import Wave from "../Wave";
import database from "../../Database";
import { off, onValue, ref } from "firebase/database";

const StyledH1 = styled.h1`
  text-align: center;
  color: #183563;
`;

const StyledCard = styled(Card)`
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-radius: 30px;
`;

const Circular = styled.div`
  position: relative;
  width: 300px;
  height: 150px;
  border-radius: 40px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border: 2px #ffff;
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
  font-size: 40px;
  font-weight: bold;
  font-family: Arial;
  text-align: center;
  z-index: 10000;
  color: #183563;
  animation: ${scoreAnimation} 2s infinite;
`;

const Home = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const databaseRef = ref(database, "waterLevel");
    const handleData = (snapshot) => {
      const newLevel = snapshot.child("currentLevel").val();
      setCurrentLevel(newLevel);
    };

    onValue(databaseRef, handleData);

    // Cleanup
    return () => {
      off(databaseRef, handleData);
    };
  }, []);

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
    }, 100); // Adjust the speed of the counter here (milliseconds)

    return () => clearInterval(interval);
  }, [currentLevel]);

  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        height: "100vh",
        // backgroundColor: theme.palette.text100,
      }}
    >
      <Grid item xs={12}>
        <StyledCard elevation={2} sx={{ backgroundColor: theme.palette.bg300 }}>
          <StyledH1 style={{ color: theme.palette.text100 }}>
            Water Level
          </StyledH1>

          <Circular>
            <Wave />
            <Score style={{ color: theme.palette.primary300 }}>
              {animatedScore}%
            </Score>
          </Circular>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default Home;
