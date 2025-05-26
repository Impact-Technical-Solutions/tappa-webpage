'use client';
import React,{ useEffect, useState } from "react";
import { Box, Typography, Divider, Slide } from "@mui/material";
import {
  DescriptionOutlined,
  EditCalendarOutlined,
  InsertChartOutlined,
} from "@mui/icons-material";

export default function InfoCards() {
  const [firstCard, setFirstCard] = useState(false);
  const [secondCard, setSecondCard] = useState(false);
  const [thirdCard, setThirdCard] = useState(false);

useEffect(() => {
  setTimeout(() => {
    setFirstCard(true);
  }, 1000);
  setTimeout(() => {
    setSecondCard(true);
  }, 2000);
  setTimeout(() => {
    setThirdCard(true);
  }, 3000);
  
}, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-evenly",
        mt: 4,
        p: 2,
        // bgcolor: "#110634F9",
        width: {xs:"100%", md:"80%"},
      }}
    >
      <Slide in={firstCard} timeout={1000} direction="left">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "240px",
            maxWidth: {xs: "100%", md: "33%"},
            p: 2,
            bgcolor: "#110634F4",
            borderTopLeftRadius: { xs: 10, md: 10 },
            borderTopRightRadius: { xs: 10, md: 0 },
            borderBottomLeftRadius: { xs: 0, md: 10 },
            borderBottomRightRadius: { xs: 0, md: 0 },
          }}
        >
          <DescriptionOutlined sx={{ fontSize: 40, color: "white" }} />
          <Typography variant="h6" color="white" textAlign="center">
            Inventaario
          </Typography>
          <Divider sx={{ width: "100%", my: 1, background: "#3E3E3EFF" }} />
          <Typography variant="body1" color="white" textAlign="center">
            Täpällä teet inventaarion hetkessä - lisää tai poista tuotteita
            tarpeen mukaan, tarkastele tehtyjä inventaarioita ja lähetä uusimmat
            tiedot napin painalluksella.
          </Typography>
        </Box>
      </Slide>
      <Slide in={secondCard} timeout={1000} direction="left">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "240px",
            maxWidth: {xs: "100%", md: "33  %"},
            px: 4,
            py: 2,
            bgcolor: "#110634F4",
          }}
        >
          <EditCalendarOutlined sx={{ fontSize: 40, color: "white" }} />
          <Typography variant="h6" color="white" textAlign="center">
            Omavalvonta
          </Typography>
          <Divider sx={{ width: "100%", my: 1, background: "#3E3E3EFF" }} />
          <Typography variant="body1" color="white" textAlign="center">
            Pidätpä sitten kirjaa siivouksista, päivämääristä tai lämpötiloista,
            Täpällä teet kirjaukset parilla painalluksella.
          </Typography>
        </Box>
      </Slide>
      <Slide in={thirdCard} timeout={1000} direction="left">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "240px",
            maxWidth: {xs: "100%", md: "34%"},
            p: 2,
            bgcolor: "#110634F4",
            borderTopLeftRadius: { xs: 0, md: 0 },
            borderTopRightRadius: { xs: 0, md: 10 },
            borderBottomLeftRadius: { xs: 10, md: 0 },
            borderBottomRightRadius: { xs: 10, md: 10 },
          }}
        >
          <InsertChartOutlined sx={{ fontSize: 40, color: "white" }} />
          <Typography variant="h6" color="white" textAlign="center">
            Data
          </Typography>
          <Divider sx={{ width: "100%", my: 1, background: "#3E3E3EFF" }} />
          <Typography variant="body1" color="white" textAlign="center">
            Hyvästi Excel-tiedostojen ja paperilappujen etsimiselle - Täppä
            pitää tietosi tallessa ja löydät ne aina kun tarvitset.
          </Typography>
        </Box>
      </Slide>
    </Box>
  );
}
