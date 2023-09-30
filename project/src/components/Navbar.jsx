import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";

export function Navbar({ hotels = [], setHotels, search = true }) {
  const navigate = useNavigate();
  const [searchValue, setSearchvalue] = useState("");

  const handleSearch = () => {
    console.log(hotels);
    const filteredHotels = hotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        hotel.address.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    console.log("filtered hotels", filteredHotels);
    setHotels(filteredHotels);
  };

  return (
    <>
      <AppBar position="static" color="inherit">
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
              }}
              variant="h6"
              color="inherit"
              component="div"
              fontWeight={"bold"}
            >
              BookStay
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {search && (
                <TextField
                  value={searchValue}
                  onChange={(e) => {
                    setSearchvalue(e.target.value);
                  }}
                  variant="outlined"
                  label="Search hotels"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={handleSearch}>
                        <SearchOutlinedIcon />
                      </IconButton>
                    ),
                  }}
                />
              )}
              <Typography
                sx={{
                  cursor: "pointer",
                }}
                variant="h6"
                color="inherit"
                component="div"
                fontWeight={"bold"}
              >
                Home
              </Typography>
              <IconButton>
                <Avatar
                  src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="
                  sx={{ width: 40, height: 40 }}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
