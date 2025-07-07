import React, { FunctionComponent } from "react";
import { Toolbar, Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer: FunctionComponent = () => {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        padding: "4px",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "16px",
        }}
      >
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/emmanuel-rosa-sarachini-de-oliveira-4a7b4874/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ fill: "#6428e9" }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/maanursc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ fill: "#6428e9" }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com/maanusc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon sx={{ fill: "#6428e9" }} />
        </IconButton>
      </Box>
    </Toolbar>
  );
};
