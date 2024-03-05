import React from "react";
import { Grid } from "@mui/material";
import Wave from "../Wave";
import LastFilled from "../LastFilled";
import Logo from "../Logo";
import TextLogo from "../TextLogo";

// const Circular = styled.div`
//   position: relative;
//   width: 300px;
//   height: 150px;
//   border-radius: 40px;
//   overflow: hidden;
//   margin: 0 auto;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
//   border: 2px #ffff;
// `;

const Home = () => {
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
        <Grid container justifyContent={"space-evenly"}>
          <Grid item xs={6}>
            <LastFilled />
            <Wave />
          </Grid>
          <Grid item xs={6}>
            <Logo />
            <TextLogo />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
