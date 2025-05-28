"use client";

import React, { useState, useEffect } from "react";
import { Paper, Typography, Box, Fade } from "@mui/material";


export default function AboutApp() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 4000);
  }, []);

  return (
    <Fade in={fadeIn} timeout={2000}>
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "90%", md: "80%" },
        height: "100%",
        minWidth: { xs: "100%", md: "800px" },
        gap: 2,
      }}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          px: 2,
          mx: 2,
          textAlign: "center",
          maxWidth: { xs: "90%", md: "100%" },
          minHeight: "200px",
        }}
      >
        <Typography variant="h5" color="white">
          Mikä siis on Täppä?
        </Typography>
        <Typography variant="body1" color="white">
          Täppä on erityisesti ravintolayrityksille suunniteltu tehokas
          keskitetty järjestelmä omavalvonnan ja inventaarion ylläpitämiseen.
          Kaikki yrityksesi kirjaukset tapahtuvat Täpän sisältä ja myös jäävät sinne. 
        </Typography>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          p: 2,
          mx: 2,
          maxWidth: { xs: "90%", md: "100%" },
          textAlign: "center",
          minHeight: "200px",
        }}
      >
        <Typography variant="h5" color="white">
          Käyttöönotto helposti!
        </Typography>
        <Typography variant="body1" color="white">
          Täpän käyttöönottoa varten sinun ei tarvitse tehdä kalliita
          laitehankintoja tai värkätä sovelluslatausten kanssa. Toimitamme
          sinulle toimipisteeseesi valmiit laitteet, joissa Täppä on asennettuna
          juuri sinulle räätälöitynä.
        </Typography>
      </Paper>
    </Box>
    </Fade>
  );
}
