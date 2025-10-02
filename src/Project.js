// // Projects.js
// import React from "react";
// import { Box, Typography, Grid, Paper, Button } from "@mui/material";
// import LinkIcon from "@mui/icons-material/Link"; // MUI icon

// // Local images (replace these with correct logos/screenshots)
// import erpImg from "./download.png";
// import ddcImg from "./a.jpeg";
// import evImg from "./b.jpeg";
// import infoFixImg from "./images.jpeg"; // make sure you have a separate image for Info-Fix

// // Array of projects
// const projects = [
//   {
//     title: "ERP System",
//     description: "Business management system for enterprises.",
//     screenshot: erpImg,
//     link: "#",
//   },
//   {
//     title: "DDC System",
//     description: "Consultancy services for analytics and reporting.",
//     screenshot: ddcImg,
//     link: "https://ddcconsultancy.in/",
//   },
//   {
//     title: "EV Charging Project",
//     description: "Electric Vehicle charging station management.",
//     screenshot: evImg,
//     link: "#",
//   },
//   {
//     title: "Info-Fix",
//     description: "CCTV and Desktop products for IT solutions.",
//     screenshot: infoFixImg,
//     link: "#",
//   },
// ];

// // const ProjectCard = ({ title, description, screenshot, link }) => (
// //   <Paper
// //     sx={{
// //       borderRadius: 3,
// //       overflow: "hidden",
// //       position: "relative",
// //       transition: "all 0.4s ease",
// //       cursor: "pointer",
// //       width: 280, // fixed width for logo style
// //       "&:hover": {
// //         transform: "translateY(-8px)",
// //         boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
// //       },
// //     }}
// //     onClick={() => window.open(link, "_blank")}
// //   >
// //     {/* Screenshot */}
// //     <Box
// //       component="img"
// //       src={screenshot}
// //       alt={title}
// //       sx={{
// //         width: "80%",        // smaller logo type
// //         height: 120,         // fixed height
// //         objectFit: "contain", // logo style
// //         display: "block",
// //         margin: "20px auto 10px auto",
// //         transition: "transform 0.3s ease",
// //         "&:hover": { transform: "scale(1.05)" },
// //       }}
// //     />

// //     {/* Content */}
// //     <Box sx={{ p: 2, backgroundColor: "#fff", textAlign: "center" }}>
// //       <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#0d47a1" }}>
// //         {title}
// //       </Typography>
// //       <Typography variant="body2" sx={{ color: "#555", mb: 2 }}>
// //         {description}
// //       </Typography>
// //       <Button
// //         variant="contained"
// //         sx={{
// //           mt: 1,
// //           background: "linear-gradient(45deg, #1976d2, #64b5f6)",
// //           color: "#fff",
// //           textTransform: "none",
// //           "&:hover": {
// //             background: "linear-gradient(45deg, #1565c0, #42a5f5)",
// //           },
// //         }}
// //         onClick={(e) => {
// //           e.stopPropagation();
// //           window.open(link, "_blank");
// //         }}
// //       >
// //         View Project
// //       </Button>
// //     </Box>
// //   </Paper>
// // );

// const ProjectCard = ({ title, description, screenshot, link }) => (
//   <Paper
//     sx={{
//       borderRadius: 3,
//       overflow: "hidden",
//       position: "relative",
//       transition: "all 0.4s ease",
//       cursor: "pointer",
//       width: 280,
//       "&:hover": {
//         transform: "translateY(-8px)",
//         boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
//       },
//     }}
//     onClick={() => window.open(link, "_blank")}
//   >
//     {/* Screenshot */}
//     <Box
//       component="img"
//       src={screenshot}
//       alt={title}
//       sx={{
//         width: "80%",
//         height: 120,
//         objectFit: "contain",
//         display: "block",
//         margin: "20px auto 10px auto",
//         transition: "transform 0.3s ease",
//         "&:hover": { transform: "scale(1.05)" },
//       }}
//     />

//     {/* Overlay (hidden by default, shown on hover) */}
//     <Box
//       className="overlay"
//       sx={{
//         position: "absolute",
//         inset: 0,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         pointerEvents: "none", // clicks go through to card
//         opacity: 0,
//         transition: "opacity 0.3s ease",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: "50%",
//           transform: "translateX(-50%)",
//           width: "200%",
//           height: "140%",
//           borderRadius: "50% / 100%", // creates the arc look
//           background: "rgba(0,0,0,0.45)",
//         },
//         ".MuiSvgIcon-root": {
//           position: "relative",
//           color: "#fff",
//           fontSize: 40,
//           zIndex: 1,
//         },
//       }}
//     >
//       <LinkIcon />
//     </Box>

//     {/* Show overlay on hover */}
//     <style>
//       {`
//         .MuiPaper-root:hover .overlay {
//           opacity: 1;
//         }
//       `}
//     </style>

//     {/* Content */}
//     <Box sx={{ p: 2, backgroundColor: "#fff", textAlign: "center" }}>
//       <Typography
//         variant="h6"
//         sx={{ fontWeight: "bold", mb: 1, color: "#0d47a1" }}
//       >
//         {title}
//       </Typography>
//       <Typography variant="body2" sx={{ color: "#555", mb: 2 }}>
//         {description}
//       </Typography>
//     </Box>
//   </Paper>
// );
// const Projects = () => {
//   return (
//     <Box sx={{ py: 10, backgroundColor: "#f9f9f9" }} id="projects">
//       <Typography
//         variant="h3"
//         sx={{ fontWeight: "bold", textAlign: "center", mb: 6, color: "#222" }}
//       >
//         My Projects
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         {projects.map((project, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
//             <ProjectCard {...project} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Projects;
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

import erpImg from "./download.png";
import ddcImg from "./a.jpeg";
import evImg from "./b.jpeg";
import infoFixImg from "./images.jpeg";

const projects = [
  { title: "ERP System", description: "Business management system for enterprises.", screenshot: erpImg, link: "https://erp.kpgrandsons.in/" },
  { title: "DDC System", description: "Consultancy services for analytics and reporting.", screenshot: ddcImg, link: "https://ddcconsultancy.in/" },
  { title: "EV Charging Project", description: "Electric Vehicle charging station management.", screenshot: evImg, link: "#" },
  { title: "Info-Fix", description: "CCTV and Desktop products for IT solutions.", screenshot: infoFixImg, link: "#" },
];

const ProjectCard = ({ title, description, screenshot, link, visible, from }) => (
  <Paper
    className={`project-card ${visible ? from : ""}`}
    sx={{
      borderRadius: 4,
      overflow: "hidden",
      position: "relative",
      transition: "all 0.4s ease",
      cursor: "pointer",
      width: 300,
      opacity: 0,
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
      },
    }}
    onClick={() => window.open(link, "_blank")}
  >
    <Box
      component="img"
      src={screenshot}
      alt={title}
      sx={{
        width: "80%",
        height: 120,
        objectFit: "contain",
        display: "block",
        margin: "20px auto 10px auto",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.05)" },
      }}
    />

    {/* Overlay */}
    <Box
      className="overlay"
      sx={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        opacity: 0,
        transition: "opacity 0.3s ease",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200%",
          height: "140%",
          borderRadius: "50% / 100%",
          background: "rgba(0,0,0,0.55)",
        },
        ".MuiSvgIcon-root": {
          position: "relative",
          color: "#fff",
          fontSize: 42,
          zIndex: 2,
          opacity: 0,
          transform: "translateY(-15px)",
          transition: "all 0.3s ease",
        },
      }}
    >
      <LinkIcon />
    </Box>

    <style>
      {`
        .MuiPaper-root:hover .overlay {
          opacity: 1;
        }
        .MuiPaper-root:hover .overlay .MuiSvgIcon-root {
          opacity: 1;
          transform: translateY(0);
        }
      `}
    </style>

    {/* Content */}
    <Box sx={{ p: 2, backgroundColor: "#fff", textAlign: "center" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#0d47a1" }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#555" }}>
        {description}
      </Typography>
    </Box>
  </Paper>
);

const Projects = () => {
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
        background: "linear-gradient(135deg,#e3f2fd,#f9f9f9)", // light About theme
      }}
      id="projects"
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
          letterSpacing: 1.5,
          textShadow: "0px 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        My Projects
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            display="flex"
            justifyContent="center"
            ref={(el) => (refs.current[index] = el)}
            data-index={index}
          >
            <ProjectCard
              {...project}
              visible={visibleCards.includes(index)}
              from={index % 2 === 0 ? "slide-up" : "slide-down"}
            />
          </Grid>
        ))}
      </Grid>

      {/* Animations */}
      <style>{`
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
      `}</style>
    </Box>
  );
};

export default Projects;