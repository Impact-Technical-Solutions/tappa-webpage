import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import restaurant from "../../public/restaurant.png";

export default function AboutApp() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "90%", md: "100%" },
        height: "100%",
        minWidth: { xs: "100%", md: "800px" },
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
          textAlign: "center",
          maxWidth: { xs: "90%", md: "100%" },
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
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          p: 4,
          maxWidth: { xs: "90%", md: "100%" },
          textAlign: "center",  
        }}
      >
        <Typography variant="h5" color="white">
          Käyttöönotto helposti!
        </Typography>
        <Typography variant="body1" color="white">
          Täpän käyttöönottoa varten sinun ei tarvitse tehdä
          kalliitta laitehankintoja tai värkätä sovelluslatausten kanssa.
          Toimitamme sinulle toimipisteeseesi valmiit laitteet, joissa Täppä on 
          asennettuna juuri sinulle räätälöitynä!
        </Typography>
      </Paper>
    </Box>
  );
}
