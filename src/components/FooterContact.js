import { Link } from "@mui/material";
import React from "react";

const FooterContact = () => {
  return (
    <div>
      <Link
        href="https://github.com/amirahnasihah/contact-manager-app-context-api"
        underline="hover"
        alt="github repo link"
        target="_blank"
        rel="noreferrer"
      >
        {"GitHub Repo"}
      </Link>
    </div>
  );
};

export default FooterContact;
