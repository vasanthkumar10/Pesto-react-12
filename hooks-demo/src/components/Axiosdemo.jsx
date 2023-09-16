import React from "react";
import { useAxios } from "../hooks/useAxios";

export function Axiosdemo() {
  const { isLoading, apiData, error } = useAxios(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div>
      <h2>API data</h2>
      {isLoading && <h2>Loading....</h2>}
      {!isLoading && error && <h2>Error in fetching the data</h2>}
      {!isLoading && !error && <h2>{JSON.stringify(apiData)}</h2>}
    </div>
  );
}
