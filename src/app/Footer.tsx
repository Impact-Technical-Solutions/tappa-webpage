"use client";

import { Box, Container, Typography, IconButton} from "@mui/material";
import { LinkedIn, Instagram } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: 8,
        py: 4,

      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography variant="h6" color="white" gutterBottom>
            Täppä
          </Typography>
          <Typography variant="body2" color="white">
            © {new Date().getFullYear()} Täppä. Kaikki oikeudet pidätetään.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-end" },
          }}
        >
          <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <Instagram />
            </IconButton>
          </Box>
          <Typography variant="body2" color="white">
            info@tappa.fi
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
