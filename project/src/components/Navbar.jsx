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

import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
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
              <TextField
                variant="outlined"
                label="Search hotels"
                size="small"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlinedIcon />
                    </IconButton>
                  ),
                }}
              />
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
