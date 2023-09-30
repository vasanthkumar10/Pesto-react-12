import { QueryClient, QueryClientProvider } from "react-query";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { LoadingSkeleton } from "./components/LoadingSkeleton";

const Home = lazy(() => import("./pages/Home"));
const HotelInfo = lazy(() => import("./pages/HotelInfo"));

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel/:slug" element={<HotelInfo />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
