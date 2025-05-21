import React from "react";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth={false}
      sx={{
        background: "linear-gradient(to top right, #200D5EFF, #4005FF)",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">Täppä</Typography>
    </Container>
  );
}
