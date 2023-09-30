import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";

import { BookingModal } from "../components/BookingModal";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { Navbar } from "../components/Navbar";
import { getHotelBySlug } from "../api/request";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

function HotelInfo() {
  const { slug } = useParams();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchHotelData = async () => {
    const { data } = await getHotelBySlug(slug);
    return data;
  };

  const { isLoading, data } = useQuery("hotel-slug", fetchHotelData);

  return (
    <>
      <Navbar search={false} />
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <Container>
          {data?.rooms.map((room) => (
            <Typography variant="h6" fontWeight={"bold"} key={room.id}>
              {room.content}
            </Typography>
          ))}
          <Button onClick={handleOpen} variant="outlined">
            Reserve
          </Button>
          <BookingModal data={data} open={open} handleClose={handleClose} />
        </Container>
      )}
    </>
  );
}

export default HotelInfo;
