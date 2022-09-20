import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <Box sx={{ height: "10vh", padding: "0 5rem" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Button
            sx={{ textTransform: "uppercase", letterSpacing: ".25em" }}
            size="large"
          >
            mangaverse
          </Button>
        </Box>
        <Stack direction={"row"} spacing={5}>
          <Button startIcon={<LinkedInIcon />} size="small">
            LinkedIn
          </Button>
          <Button
            size="small"
            sx={{ color: "#fff" }}
            startIcon={<GitHubIcon />}
            variant="contained"
          >
            Github Repo
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;