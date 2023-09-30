import { Container, Grid, Pagination } from "@mui/material";
import React, { Fragment, useState } from "react";

import { HotelCard } from "../components/HotelCard";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { Navbar } from "../components/Navbar";
import { getHotels } from "../api/request";
import { useQuery } from "react-query";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [page, setPage] = useState(1);
  const HOTELS_PER_PAGE = 5;

  const fetchHotels = async () => {
    const { data } = await getHotels();
    setHotels(data);
    setFilteredHotels(data);
    return data;
  };

  const { isLoading } = useQuery("hotels", fetchHotels);
  const startIndex = (page - 1) * HOTELS_PER_PAGE;
  const endIndex = page * HOTELS_PER_PAGE - 1;
  const paginatedHotels = filteredHotels.slice(startIndex, endIndex + 1);
  const totalHotels = filteredHotels.length;
  const totalPages = Math.ceil(totalHotels / HOTELS_PER_PAGE);

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <>
      <Navbar hotels={hotels} setHotels={setFilteredHotels} />
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop={3}>
          {paginatedHotels.length > 0 ? (
            paginatedHotels.map((hotel) => (
              <Grid key={hotel.id} item xs={12} sm={6} md={4} lg={4}>
                <HotelCard hotel={hotel} />
              </Grid>
            ))
          ) : (
            <h2>No hotels found</h2>
          )}
        </Grid>
        <Pagination
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      </Container>
    </>
  );
}

export default Home;

// Pagination logic
/**
 *
 * page number = 1
 * limit = 6
 * total images = 15
 * total pages = total images / limit = 15 / 6 = 3 pages (Math.ceil())
 *
 *
 *
 * 1 -> 0 to 5
 * 2 -> 6 to 11
 * 3 -> 12 to 14
 */
