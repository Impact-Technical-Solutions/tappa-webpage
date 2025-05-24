import React from "react";
import { Container, Box, Typography, Fade } from "@mui/material";
import logo from "../../public/täppä_logo.png";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import AboutApp from "./AboutApp";
import restaurant from "../../public/restaurant.png";
import Testimonials from "./Testimonials";
import InfoCards from "./InfoCards";
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
      <Fade in={true} timeout={1500}>
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
      <InfoCards />
      <AboutApp />
      <Testimonials />
      <ContactForm />
      <Footer />
    </Container>
  );
}
