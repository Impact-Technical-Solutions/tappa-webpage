import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import restaurant from "../../public/restaurant.png";

export default function AboutApp() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        p: 4,
      }}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          p: 4,
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" color="white">
          Mikä siis on Täppä?
        </Typography>
        <Typography variant="body1" color="white">
          Täppä on kirjaussovellus, joka mahdollistaa kirjausprosessin
          helpottamisen. Täppä mahdollistaa kirjausprosessin helpottamisen.
          Täppä mahdollistaa kirjausprosessin helpottamisen. Täppä mahdollistaa
          kirjausprosessin helpottamisen.
        </Typography>
      </Paper>
    </Box>
  );
}
