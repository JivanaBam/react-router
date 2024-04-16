import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const ProductPage = () => {
  const params = useParams();
  const productId = params.id;
  return (
    <div>
      <Typography variant="h2">Product Page for {productId}</Typography>
    </div>
  );
};

export default ProductPage;
