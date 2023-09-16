import React from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { About } from "./components/About";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id/:user" element={<Profile />} />
        <Route path="/profile/user" element={<h2>Profile user</h2>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h3>Page not found</h3>} />

        {/* <Route path="/admin" element={<h1>Admin page</h1>} />
        <Route path="/admin/login" element={<h1>Admin login page</h1>} />
      <Route path="/admin/signup" element={<h1>Admin signup page</h1>} /> */}

        <Route path="/admin">
          <Route index element={<h1>Admin page</h1>} />
          <Route path="login" element={<h1>Admin login page</h1>} />
          <Route path="signup" element={<h1>Admin signup page</h1>} />
          <Route path="main">
            <Route index element={<h1>admin main page</h1>} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
