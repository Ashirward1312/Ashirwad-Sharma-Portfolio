import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const Header = () => {
  const sections = ["Home", "About", "Skills", "Projects", "Internship", "Contact"];

  // Smooth scroll function
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff",color: "#333" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Portfolio Name / Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => handleScroll("home")}
        >
          Ashirwad Sharma
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {sections.map((section) => (
            <Button
              key={section}
              color="inherit"
              onClick={() => handleScroll(section.toLowerCase())}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
              }}
            >
              {section}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
