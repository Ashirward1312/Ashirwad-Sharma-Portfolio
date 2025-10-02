// // Home.js
// import React from "react";
// import { Box, Typography, Button, Container } from "@mui/material";

// const Home = () => {
//     const handleScroll = (id) => {
//         const element = document.getElementById(id);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         <Box
//             id="home"
//             sx={{
//                 minHeight: "100vh",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 background: "#f5f5f5", // soft grey background
//                 color: "#333",          // dark grey text
//                 textAlign: "center",
//                 position: "relative",
//                 overflow: "hidden",
//             }}
//         >
//             <Container>
//                 <Typography
//                     variant="h2"
//                     sx={{
//                         fontWeight: "bold",
//                         mb: 2,
//                         letterSpacing: "1px",
//                         color: "#222",
//                         textShadow: "1px 1px 5px rgba(0,0,0,0.05)",
//                     }}
//                 >
//                     Hi, I’m Ashirwad Sharma
//                 </Typography>

//                 <Typography
//                     variant="h5"
//                     sx={{
//                         mb: 4,
//                         color: "#555",
//                         textShadow: "1px 1px 5px rgba(0,0,0,0.03)",
//                     }}
//                 >
//                     Frontend Developer | React & Modern Web
//                 </Typography>

//                 <Button
//                     variant="contained"
//                     sx={{
//                         backgroundColor: "#fff",  // white button
//                         color: "#555",             // grey text
//                         fontWeight: "bold",
//                         px: 6,
//                         py: 1.5,
//                         fontSize: "1rem",
//                         borderRadius: 4,
//                         boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
//                         textTransform: "uppercase",
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                             backgroundColor: "#555", // grey hover
//                             color: "#fff",           // white text
//                             transform: "scale(1.08)",
//                             boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//                         },
//                     }}
//                     onClick={() => handleScroll("projects")}
//                 >
//                     View My Work
//                 </Button>
//             </Container>

//             {/* Floating circles */}
//             <Box
//                 sx={{
//                     position: "absolute",
//                     width: "150px",
//                     height: "150px",
//                     borderRadius: "50%",
//                     background: "rgba(200,200,200,0.2)", // soft grey
//                     top: "15%",
//                     left: "10%",
//                     filter: "blur(70px)",
//                     animation: "float1 7s ease-in-out infinite alternate",
//                 }}
//             />
//             <Box
//                 sx={{
//                     position: "absolute",
//                     width: "200px",
//                     height: "200px",
//                     borderRadius: "50%",
//                     background: "rgba(180,180,180,0.15)", // lighter grey
//                     bottom: "10%",
//                     right: "5%",
//                     filter: "blur(90px)",
//                     animation: "float2 9s ease-in-out infinite alternate",
//                 }}
//             />

//             {/* Keyframes */}
//             <style>
//                 {`
//           @keyframes float1 {0%{transform:translateY(0);}100%{transform:translateY(-20px);}}
//           @keyframes float2 {0%{transform:translateY(0);}100%{transform:translateY(25px);}}
//         `}
//             </style>
//         </Box>
//     );
// };

// export default Home;

// Home.js
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const Home = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // dramatic theme
        color: "#fff",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        {/* Main Heading */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            letterSpacing: "1px",
            background: "linear-gradient(90deg,#64b5f6,#90caf9,#42a5f5)", // gradient text
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 4px 15px rgba(0,0,0,0.5)",
          }}
        >
          Hi, I’m Ashirwad Sharma
        </Typography>

        {/* Sub Heading */}
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            color: "#ddd",
            textShadow: "0px 3px 10px rgba(0,0,0,0.6)",
            fontWeight: 300,
          }}
        >
          Frontend Developer | React & Modern Web
        </Typography>

        {/* CTA Button */}
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #1e88e5, #64b5f6)",
            color: "#fff",
            fontWeight: "bold",
            px: 6,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: "50px",
            textTransform: "uppercase",
            boxShadow: "0 8px 25px rgba(30,136,229,0.4)",
            transition: "all 0.4s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #1565c0, #42a5f5)",
              transform: "scale(1.1)",
              boxShadow: "0 12px 40px rgba(66,165,245,0.6)",
            },
          }}
          onClick={() => handleScroll("projects")}
        >
          View My Work
        </Button>
      </Container>

      {/* Glowing Orbs */}
      <Box
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(33,150,243,0.25)", // blue glow
          top: "15%",
          left: "10%",
          filter: "blur(90px)",
          animation: "float1 7s ease-in-out infinite alternate",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(255,111,0,0.25)", // orange glow
          bottom: "10%",
          right: "5%",
          filter: "blur(120px)",
          animation: "float2 9s ease-in-out infinite alternate",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(156,39,176,0.3)", // purple glow
          bottom: "20%",
          left: "20%",
          filter: "blur(100px)",
          animation: "float3 12s ease-in-out infinite alternate",
        }}
      />

      {/* Keyframes */}
      <style>
        {`
          @keyframes float1 { 0%{transform:translateY(0);}100%{transform:translateY(-25px);} }
          @keyframes float2 { 0%{transform:translateY(0);}100%{transform:translateY(35px);} }
          @keyframes float3 { 0%{transform:translateY(0);}100%{transform:translateY(-30px);} }
        `}
      </style>
    </Box>
  );
};

export default Home;