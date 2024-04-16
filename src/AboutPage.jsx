import React from "react";
import { Typography, colors } from "@mui/material";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <Typography variant="h2">This is about page.</Typography>

      <Link to="/" style={{ color: "success" }}>
        Go to Home Page
      </Link>
    </div>
  );
};

export default AboutPage;
