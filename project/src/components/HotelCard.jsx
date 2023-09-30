import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";

export function HotelCard({ hotel }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(`/hotel/${hotel.slug}`)}
    >
      <CardMedia
        component={"img"}
        sx={{ height: 240 }}
        image={hotel.thumbnail}
        title={hotel.name}
        alt="hotel"
      />
      <CardContent>
        <Typography sx={{ fontWeight: "bold" }}>{hotel.address}</Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          ${hotel.pricePerNight} per night
        </Typography>
      </CardContent>
    </Card>
  );
}
