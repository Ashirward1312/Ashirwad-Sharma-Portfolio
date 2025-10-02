
import React from "react";
import { Box, Typography, Grid, Avatar, Container } from "@mui/material";
import Image from "./c.webp"; // Replace with your actual image path

const AboutMe = () => {
  return (
    <Box
      sx={{
        py: 12,
        position: "relative",
        background: "linear-gradient(135deg,#e3f2fd,#f9f9f9)", // contrast bg
        overflow: "hidden",
      }}
      id="about"
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 8,
            textAlign: "center",
            background: "linear-gradient(90deg,#1e88e5,#26a69a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: 2,
            fontSize: { xs: "2.2rem", md: "3rem" },
            textShadow: "0px 3px 12px rgba(0,0,0,0.08)",
          }}
        >
          About Me
        </Typography>

        {/* Unified Glass Card */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            p: { xs: 4, md: 6 },
            borderRadius: 5,
            backdropFilter: "blur(18px)",
            background: "rgba(255,255,255,0.55)",
            border: "1px solid rgba(255,255,255,0.35)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          }}
        >
          {/* Avatar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: "0 0 auto",
              mr: { md: 6, xs: 0 },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                p: 2,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#1e88e5,#26a69a)",
                display: "inline-block",
              }}
            >
              <Avatar
                src={Image}
                alt="Ashirwad Sharma"
                sx={{
                  width: 200,   // bigger avatar
                  height: 200,  // bigger avatar
                  border: "6px solid #fff",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.08)",
                    filter: "brightness(1.1)",
                  },
                }}
              />
            </Box>
          </Box>

          {/* Details */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "1.6rem", md: "2rem" },
              }}
            >
              Frontend Web Developer
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "#333",
              }}
            >
              I build responsive and interactive web applications with modern
              frontend technologies. My focus is delivering smooth user
              experiences, intuitive UI, and visually engaging interfaces that
              connect design with code.
            </Typography>

            {/* Details grid */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Birthday:</strong> 13 Dec 2001
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Phone:</strong> 7987109120
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>City:</strong> Raipur, Chhattisgarh
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>BSc:</strong> Bachelor of Science
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Age:</strong> 23
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>MSc:</strong> MSc IT
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Email:</strong> ashirwads9111@gmail.com
                </Typography>
                {/* <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Freelance:</strong> Available
                </Typography> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;