import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
      <Typography variant="h2">This is contact page.</Typography>
      <Link to="/" style={{ color: "primary" }}>
        Go to Home Page
      </Link>

      <Link to="/about" style={{ color: "secondary", padding: "1rem" }}>
        Go to About Page
      </Link>
    </div>
  );
};

export default ContactPage;
