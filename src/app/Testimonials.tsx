'use client';
import React, { useEffect, useState } from "react";
import EmblaCarousel from "@/embla-carousel/tsx/EmblaCarousel";
import { Box, Fade, Typography } from "@mui/material";
export default function Testimonials() {

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 5000);
  }, []);
    
  const slides = [1, 2, 3, 4, 5];

  return (
    <Fade in={fadeIn} timeout={1000}>
      <Box sx={{ width: "100%", height: "100%", mt: 3 }}>
        <Typography variant="h5" color="white" textAlign="center">
         Asiakkaiden kokemuksia
        </Typography>
        <EmblaCarousel slides={slides} options={{ loop: true }} />
      </Box>
    </Fade>
  );
}
