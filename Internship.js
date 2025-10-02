import React from "react";
import { Box, Typography, Paper, Link, Grid } from "@mui/material";
import ContactMarquee from "./Contact";

// Internship data
const internships = [
  {
    company: "YASHVITECH IT SOLUTION PVT. LTD",
    role: "Full Stack Web Developer Intern",
    duration: "Sep 2024 – Oct 2025",
    description:
      "Worked on diverse real-world projects including ERP systems for business operations, DDC consultancy portal, EV charging management, and Info-Fix CCTV/desktop sales platform. Contributed in both frontend and backend development, including UI design, REST APIs, database integration, and responsive layouts.",
    skills: [
      "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS",
      "Ant Design", "React", "Python", "Django", "SQLite"
    ],
  },
];

// Skill badge
const SkillTag = ({ skill }) => (
  <Box
    sx={{
      px: 2,
      py: 0.5,
      borderRadius: 2,
      background: "linear-gradient(135deg, #42a5f5, #1976d2)",
      color: "#fff",
      fontWeight: 600,
      fontSize: "0.8rem",
      display: "inline-block",
      mr: 1,
      mb: 1,
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "scale(1.12)",
        boxShadow: "0px 6px 20px rgba(66,165,245,0.6)",
      },
    }}
  >
    {skill}
  </Box>
);

// Internship Card
const InternshipCard = ({ internship }) => (
  <Paper
    className="fade-up"
    sx={{
      p: { xs: 3, md: 5 },
      borderRadius: 4,
      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.15)",
      boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
      maxWidth: 900,
      mx: "auto",
      mb: 6,
      color: "#eee",
      transition: "all 0.4s ease",
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: "0 25px 50px rgba(0,0,0,0.75)",
      },
    }}
  >
    <Grid container spacing={4} alignItems="flex-start">
      {/* LEFT side – Company & Role */}
      <Grid item xs={12} md={4}>
        <Typography
          variant="h6"
          sx={{ color: "#64b5f6", fontWeight: "bold", mb: 1 }}
        >
          {internship.company}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#90caf9", fontWeight: "bold", mb: 1 }}
        >
          {internship.role}
        </Typography>
        <Typography variant="body2" sx={{ color: "#bbb", fontStyle: "italic" }}>
          {internship.duration}
        </Typography>
      </Grid>

      {/* RIGHT side – Work & Skills */}
      <Grid item xs={12} md={8}>
        <Typography
          variant="body1"
          sx={{ color: "#ddd", mb: 2, lineHeight: 1.8 }}
        >
          {internship.description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {internship.skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </Box>
      </Grid>
    </Grid>
  </Paper>
);

// ===== FOOTER =====
const Footer = () => (
  <Box
    sx={{
      py: 6,
      backgroundColor: "#fff",
      color: "#333",
      textAlign: "center",
      mt: 6,
    }}
  >
    <Typography variant="body1" sx={{ mb: 1 }}>
      &copy; {new Date().getFullYear()} All Rights Reserved.
    </Typography>
    <Typography variant="body2">
      Designed by{" "}
      <Link href="#" sx={{ color: "#333", textDecoration: "none" }}>
        Ashirwad Sharma
      </Link>
    </Typography>
  </Box>
);

const Internship = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)", // same as Projects theme
      }}
    >
      {/* INTERNSHIP SECTION */}
      <Box sx={{ py: 12 }} id="internship">
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 8,
            background: "linear-gradient(90deg,#42a5f5,#90caf9,#64b5f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: 1.5,
            textShadow: "0px 4px 15px rgba(0,0,0,0.6)",
          }}
        >
          Internship Experience
        </Typography>
        {internships.map((internship, index) => (
          <InternshipCard key={index} internship={internship} />
        ))}
      </Box>

      {/* CONTACT SECTION */}
      <ContactMarquee />

      {/* FOOTER */}
      <Footer />

      {/* Animation Keyframes */}
      <style>
        {`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          animation: fadeUp 1s ease both;
        }
        `}
      </style>
    </Box>
  );
};

export default Internship;