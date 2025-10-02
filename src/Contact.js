import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const contacts = [
  {
    type: "Email",
    value: "ashirwads9111@gmail.com",
    icon: "📧",
    href: "mailto:ashirwads9111@gmail.com",
  },
  {
    type: "Phone",
    value: "+91 7987109120",
    icon: "📞",
    href: "tel:+917987109120",
  },
  {
    type: "GitHub",
    value: "github.com/yourusername",
    icon: "💻",
    href: "https://github.com/Ashirward1312",
  },
];

const ContactCard = ({ contact, visible, from }) => (
  <Paper
    className={`contact-card ${visible ? from : ""}`}
    onClick={() => window.open(contact.href, "_blank")}
    sx={{
      p: 5,
      textAlign: "center",
      borderRadius: 4,
      boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
      background: "#ffffffdd",
      backdropFilter: "blur(8px)",
      cursor: "pointer",
      transition: "all 0.5s ease",
      opacity: 0, // initially invisible
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
        backgroundColor: "#f0f4f8",
      },
    }}
  >
    <Typography
      variant="h5"
      sx={{
        fontWeight: "bold",
        mb: 2,
        fontSize: "1.5rem",
        color: "#0d47a1",
      }}
    >
      {contact.icon} {contact.type}
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontSize: "1rem",
        wordWrap: "break-word",
        color: "#1976d2",
      }}
    >
      {contact.value}
    </Typography>
  </Paper>
);

const ContactMe = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setVisibleCards((prev) => [...new Set([...prev, Number(index)])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        py: 12,
        px: 2,
        background: "linear-gradient(135deg,#e3f2fd,#f9f9f9)", // About section theme
      }}
      id="contact"
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 8,
          background: "linear-gradient(90deg,#1e88e5,#26a69a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          position: "relative",
          "&::after": {
            content: '""',
            width: 80,
            height: 4,
            backgroundColor: "#26a69a",
            display: "block",
            margin: "12px auto 0",
            borderRadius: 2,
          },
        }}
      >
        Contact Me
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {contacts.map((contact, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            ref={(el) => (refs.current[index] = el)}
            data-index={index}
            display="flex"
            justifyContent="center"
          >
            <ContactCard
              contact={contact}
              visible={visibleCards.includes(index)}
              from={index % 2 === 0 ? "slide-up" : "slide-down"}
            />
          </Grid>
        ))}
      </Grid>

      {/* Animations */}
      <style>
        {`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(120px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-120px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .slide-up {
            animation: slideUp 0.9s ease forwards;
          }
          .slide-down {
            animation: slideDown 0.9s ease forwards;
          }
        `}
      </style>
    </Box>
  );
};

export default ContactMe;