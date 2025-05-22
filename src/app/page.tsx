import React from "react";
import { Container, Box, Typography, Divider, Fade, Slide } from "@mui/material";
import { DescriptionOutlined, EditCalendarOutlined, InsertChartOutlined } from "@mui/icons-material";
import logo from "../../public/täppä_logo.png";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import AboutApp from "./AboutApp";
import restaurant from "../../public/restaurant.png";
import Testimonials from "./Testimonials";
export default function Home() {
  return (
    <Container
      maxWidth={false}
      sx={{
        // background: "linear-gradient(to bottom left, #18074D, #2F1F61FF)",
        // background: "#110634FF",
        backgroundImage: `url(${restaurant.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        minHeight: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        pt: 3,
        overflowY: "auto",
        px: "0px !important",
      }}
    >
      <Fade in={true} timeout={2000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: { xs: "180px", md: "240px" },
              height: { xs: "180px", md: "240px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${logo.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Typography variant="h5" color="white">
            se parempi kirjaussovellus
          </Typography>
        </Box>
      </Fade>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-evenly",
          mt: 4,
          p: 2,
          // bgcolor: "#110634F9",
          width: { xs: "90%", md: "100%" },
        }}
      >
        <Slide in={true} timeout={3000} direction="right">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "220px",
              p: 2,
              bgcolor: "#110634F9",
              maxWidth: { md: "33%" },
            }}
          >
            <DescriptionOutlined sx={{ fontSize: 40, color: "white" }} />
            <Typography variant="h6" color="white" textAlign="center">
              Inventaario
            </Typography>
            <Divider sx={{ width: "100%", my: 1, background: "#3E3E3EFF" }} />
            <Typography variant="body1" color="white" textAlign="center">
              Täpällä teet inventaarion hetkessä - lisää tai poista tuotteita
              tarpeen mukaan, tarkastele tehtyjä inventaarioita ja lähetä
              uusimmat tiedot napin painalluksella.
            </Typography>
          </Box>
        </Slide>
        <Slide in={true} timeout={3000} direction="left">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "240px",
              px: 4,
              py: 2,
              bgcolor: "#110634F9",
            }}
          >
            <EditCalendarOutlined sx={{ fontSize: 40, color: "white" }} />
            <Typography variant="h6" color="white" textAlign="center">
              Omavalvonta
            </Typography>
            <Divider sx={{ width: "100%", my: 1, background: "#3E3E3EFF" }} />
            <Typography variant="body1" color="white" textAlign="center">
              Pidätpä sitten kirjaa siivouksista, päivämääristä tai
              lämpötiloista, Täpällä teet kirjaukset parilla painalluksella.
            </Typography>
          </Box>
        </Slide>
        <Slide in={true} timeout={3000} direction="right">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              px: 4,
              py: 2,
              minHeight: "240px",
              bgcolor: "#110634F9",
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
      <AboutApp />
      <Testimonials />
      <ContactForm />
      <Footer />
    </Container>
  );
}
