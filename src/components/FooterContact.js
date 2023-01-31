import { Box, Link } from "@mui/material";
import React from "react";

const FooterContact = () => {
  return (
    <div>
      <Box
        sx={{
          gridArea: "footer",
          bgcolor: "warning.dark",
          textAlign: "center",
        }}
      >
        <Link
          href="https://github.com/amirahnasihah/contact-manager-app-context-api"
          underline="hover"
          alt="github repo link"
          target="_blank"
          rel="noreferrer"
        >
          {"GitHub Repo"}
        </Link>
      </Box>
    </div>
  );
};

export default FooterContact;
