"use client";
import React, { useState, useEffect } from "react";
import { Box, Fade } from "@mui/material";

import { Typography } from "@mui/material";

export default function Testimonials() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 5000);
  }, []);

  return (
    <Fade in={fadeIn} timeout={2000}>
      <Box>
        <Typography variant="h1">Testimonials</Typography>
      </Box>
    </Fade>
  );
}
