import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <Box
        sx={{
          gridArea: "header",
          bgcolor: "primary.main",
          textAlign: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ backgroundColor: "white" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, color: "black", fontWeight: "bold" }}
              >
                Contact Manager
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
