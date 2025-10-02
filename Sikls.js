// // Skills.js
// import React from "react";
// import { Box, Typography, Grid, Paper } from "@mui/material";

// const frontendSkills = [
//   { name: "HTML", value: 95 },
//   { name: "CSS", value: 90 },
//   { name: "Bootstrap", value: 85 },
//   { name: "Tailwind CSS", value: 85 },
//   { name: "JavaScript", value: 85 },
//   { name: "React", value: 90 },
//   { name: "Ant Design", value: 85 },
// ];

// const toolsSkills = [
//   { name: "Git & GitHub", value: 85 },
//   { name: "VSCode", value: 90 },
//   { name: "AI Tools", value: 65 },
// ];

// // Skill card component
// const SkillCard = ({ name, value, hoverColor1, hoverColor2 }) => (
//   <Paper
//     sx={{
//       p: 2,
//       m: 1,
//       borderRadius: 2,
//       textAlign: "center",
//       width: 100,
//       background: "#f5f5f5", // default grey background
//       color: "#333",
//       transition: "all 0.3s ease",
//       "&:hover": {
//         background: `linear-gradient(135deg, ${hoverColor1}, ${hoverColor2})`,
//         color: "#fff",
//         transform: "translateY(-5px) scale(1.05)",
//         boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
//       },
//     }}
//   >
//     <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//       {value}%
//     </Typography>
//     <Typography variant="body2">{name}</Typography>
//   </Paper>
// );

// const Skills = () => {
//   return (
//     <Box sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
//       <Typography
//         variant="h3"
//         sx={{ fontWeight: "bold", textAlign: "center", mb: 6, color: "#222" }}
//       >
//         My Skills
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         {/* Frontend Skills */}
//         <Grid item xs={12} md={5}>
//           <Paper
//             sx={{
//               p: 3,
//               borderRadius: 4,
//               boxShadow: 3,
//               background: "#fff",
//               color: "#222",
//             }}
//           >
//             <Typography
//               variant="h5"
//               sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
//             >
//               Frontend
//             </Typography>
//             <Grid container justifyContent="center">
//               {frontendSkills.map((skill, index) => (
//                 <SkillCard
//                   key={index}
//                   name={skill.name}
//                   value={skill.value}
//                   hoverColor1="#1e88e5" // blue start
//                   hoverColor2="#64b5f6" // blue end
//                 />
//               ))}
//             </Grid>
//           </Paper>
//         </Grid>

//         {/* Tools Skills */}
//         <Grid item xs={12} md={5}>
//           <Paper
//             sx={{
//               p: 3,
//               borderRadius: 4,
//               boxShadow: 3,
//               background: "#fff",
//               color: "#222",
//             }}
//           >
//             <Typography
//               variant="h5"
//               sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
//             >
//               Tools
//             </Typography>
//             <Grid container justifyContent="center">
//               {toolsSkills.map((skill, index) => (
//                 <SkillCard
//                   key={index}
//                   name={skill.name}
//                   value={skill.value}
//                   hoverColor1="#ff6a00" // orange start
//                   hoverColor2="#ff8e53" // orange end
//                 />
//               ))}
//             </Grid>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Skills;
// Skills.js
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

// MUI Icons
import CodeIcon from "@mui/icons-material/Code";            // HTML
import CssIcon from "@mui/icons-material/Css";              // CSS
// import DataObjectIcon from "@mui/icons-material/DataObject"; // JS
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"; // Bootstrap
import WavesIcon from "@mui/icons-material/Waves";          // Tailwind
import JavascriptIcon from "@mui/icons-material/Javascript"; // JS
import ReactIcon from "@mui/icons-material/AllInclusive";   // React (closest spiral infinity)
import DesignServicesIcon from "@mui/icons-material/DesignServices"; // Ant Design

import GitHubIcon from "@mui/icons-material/GitHub";        // Git & GitHub
import TerminalIcon from "@mui/icons-material/Terminal";    // VSCode
import PsychologyIcon from "@mui/icons-material/Psychology"; // AI Tools

const frontendSkills = [
  { name: "HTML", value: 95, icon: <CodeIcon fontSize="large" /> },
  { name: "CSS", value: 90, icon: <CssIcon fontSize="large" /> },
  { name: "Bootstrap", value: 85, icon: <RocketLaunchIcon fontSize="large" /> },
  { name: "Tailwind CSS", value: 85, icon: <WavesIcon fontSize="large" /> },
  { name: "JavaScript", value: 85, icon: <JavascriptIcon fontSize="large" /> },
  { name: "React", value: 90, icon: <ReactIcon fontSize="large" /> },
  { name: "Ant Design", value: 85, icon: <DesignServicesIcon fontSize="large" /> },
];

const toolsSkills = [
  { name: "Git & GitHub", value: 85, icon: <GitHubIcon fontSize="large" /> },
  { name: "VSCode", value: 90, icon: <TerminalIcon fontSize="large" /> },
  { name: "AI Tools", value: 65, icon: <PsychologyIcon fontSize="large" /> },
];

// Skill card component
const SkillCard = ({ name, value, icon, hoverColor1, hoverColor2 }) => (
  <Paper
    sx={{
      p: 2,
      m: 1.5,
      borderRadius: 3,
      textAlign: "center",
      width: 120,
      height: 150,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(255,255,255,0.08)", // transparent glassy look
      color: "#fff",
      backdropFilter: "blur(6px)",
      border: "1px solid rgba(255,255,255,0.2)",
      transition: "all 0.35s ease",
      "&:hover": {
        background: `linear-gradient(135deg, ${hoverColor1}, ${hoverColor2})`,
        color: "#fff",
        transform: "translateY(-6px) scale(1.07)",
        boxShadow: "0px 10px 25px rgba(0,0,0,0.5)",
      },
    }}
  >
    <Box sx={{ fontSize: 40, mb: 1 }}>{icon}</Box>
    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
      {value}%
    </Typography>
    <Typography variant="body2">{name}</Typography>
  </Paper>
);

const Skills = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // dramatic gradient
        color: "#fff",
      }}
      id="skills"
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 6,
          color: "#fff",
          textShadow: "0px 3px 8px rgba(0,0,0,0.5)",
        }}
      >
        My Skills
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Frontend Skills */}
        <Grid item xs={12} md={7}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
              background: "rgba(255,255,255,0.05)",
              textAlign: "center",
              color: "#fff",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 3,
                textAlign: "center",
                color: "#90caf9",
              }}
            >
              Frontend
            </Typography>
            <Grid container justifyContent="center">
              {frontendSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  value={skill.value}
                  icon={skill.icon}
                  hoverColor1="#1e88e5"
                  hoverColor2="#64b5f6"
                />
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Tools Skills */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
              background: "rgba(255,255,255,0.05)",
              textAlign: "center",
              color: "#fff",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 3,
                textAlign: "center",
                color: "#ffb74d",
              }}
            >
              Tools
            </Typography>
            <Grid container justifyContent="center">
              {toolsSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  value={skill.value}
                  icon={skill.icon}
                  hoverColor1="#ff6a00"
                  hoverColor2="#ff8e53"
                />
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;