"use client";

import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { SendOutlined } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    setCurrentDate(formattedDate);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.phone
    ) {
      setError(true);
      setErrorMessage("Täytäthän kaikki kentät ennen viestin lähettämistä.");
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        date: currentDate,
      };

      await emailjs.send(
        "service_snetasb",
        "template_88noocz",
        templateParams,
        "MEZEAv6JeItjSyw0q"
      );
      setSuccess(true);
      setSuccessMessage(
        "Kiitos yhteydenotostasi! Vastaamme mahdollisimman pian."
      );
      setError(false);
      setErrorMessage("");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setErrorMessage("Viestin lähetys epäonnistui. Yritä uudelleen.");
      setError(true);
    } finally {
      setIsLoading(false);
    }
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
          Kiinnostuitko? Ota yhteyttä!
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
        {error && (
          <Typography variant="body1" color="red">
            {errorMessage}
          </Typography>
        )}
        {success && (
          <Typography
            variant="body1"
            sx={{
              background: "linear-gradient(to right, #73FFD7FF, #01f6fe)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {successMessage}
          </Typography>
        )}
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
          {isLoading ? (
            <Box sx={{ maxHeight: 24, px: 2 }}>
              <CircularProgress size={24} sx={{ color: "white" }} />
            </Box>
          ) : (
            "Lähetä"
          )}
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
          pb: 2,
        }}
      >
        <Typography variant="h6" color="white" textAlign="center">
          Miten käytämme yhteystietojasi?
        </Typography>
        <Typography variant="body1" color="white" textAlign="center">
          Täpällä ei tykätä sähköpostilistoista tai markkinointispämmistä.
          Olemme sitoutuneita käyttämään meille annettuja yhteystietoja
          vastuullisesti. Käytämmekin antamiasi yhteystietoja vain
          yhteydenottoja varten, emmekä jaa tietojasi kolmannelle osapuolelle
          missään tapauksessa.
        </Typography>
      </Box>
    </Box>
  );
}
