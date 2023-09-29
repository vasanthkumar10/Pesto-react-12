import React, { Fragment, useState } from "react";

import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { Navbar } from "../components/Navbar";
import { getHotels } from "../api/request";
import { useQuery } from "react-query";

function Home() {
  const [hotels, setHotels] = useState([]);

  const fetchHotels = async () => {
    const { data } = await getHotels();
    setHotels(data);
    return data;
  };

  const { isLoading } = useQuery("hotels", fetchHotels);

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <>
      <Navbar />
      <h2>Home description</h2>
    </>
  );
}

export default Home;
