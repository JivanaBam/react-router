import React from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="contained" color={"success"}>
        <h3>This is home page. You are welcome..</h3>
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        sx={{ marginRight: "1rem" }}
        onClick={() => {
          navigate("./contact");
        }}
      >
        Contact
      </Button>

      <Button
        variant="contained"
        color="success"
        sx={{ marginRight: "1rem" }}
        onClick={() => {
          navigate("./About");
        }}
      >
        About
      </Button>
    </div>
  );
};

export default HomePage;
