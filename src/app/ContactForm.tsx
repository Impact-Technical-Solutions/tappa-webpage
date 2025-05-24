"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { SendOutlined } from "@mui/icons-material";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "90%", md: "100%" },
        height: "100%",
        bgcolor: "#110634F6",
        p: 1,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: { xs: "100%", md: "800px" },
          minHeight: "500px",
          p: 4,
          gap: 2,
        }}
      >
        <SendOutlined sx={{ fontSize: 40, color: "white" }} />
        <Typography variant="h6" color="white" textAlign="center">
          Ota yhteyttä
        </Typography>

        <TextField
          fullWidth
          name="name"
          label="Nimi"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
            },
            "& .MuiInputLabel-root": { color: "white" },
          }}
        />

        <TextField
          fullWidth
          name="phone"
          label="Puhelin"
          value={formData.phone}
          onChange={handleChange}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
            },
            "& .MuiInputLabel-root": { color: "white" },
          }}
        />

        <TextField
          fullWidth
          name="email"
          label="Sähköposti"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
            },
            "& .MuiInputLabel-root": { color: "white" },
          }}
        />

        <TextField
          fullWidth
          name="message"
          label="Viesti"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
            },
            "& .MuiInputLabel-root": { color: "white" },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "#4005FF",
            color: "white",
            "&:hover": {
              bgcolor: "#3004CC",
            },
          }}
        >
          Lähetä
        </Button>
      </Box>
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "90%", md: "50%" },
        height: "100%",
      }}>
        <Typography variant="h6" color="white" textAlign="center">
          Miten käytämme yhteystietojasi?
        </Typography>
        <Typography variant="body1" color="white" textAlign="center">
          Täpällä ei tykätä sähköpostilistoista tai markkinointispämmistä.
          Olemme sitoutuneita käyttämään meille annettuja yhteystietoja vastuullisesti.
          Käytämmekin antamiasi yhteystietoja vain yhteydenottoja varten, emmekä jaa tietojasi 
          kolmannelle osapuolelle missään tapauksessa.   
        </Typography>
      </Box>
    </Box>
  );
}
