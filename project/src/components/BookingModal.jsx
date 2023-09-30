import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { DateRange } from "react-date-range";

export function BookingModal({ open, data, handleClose }) {
  const [selectedCount, setSelectedCount] = useState(2);
  const today = new Date();
  const tomorrow = new Date().setDate(today.getDate() + 1);
  const [dateRange, setDateRange] = useState([
    {
      startDate: today,
      endDate: tomorrow,
      key: "selection",
    },
  ]);

  const getNumberOfNights = () => {
    const { startDate, endDate } = dateRange[0];
  };

  const getGuests = () => {
    return Number(data?.rooms[0].content.split(" ")[0]);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          bgcolor: "white",
          borderRadius: "5px",
          padding: 3,
        }}
      >
        <Typography variant="h6" fontWeight={"bold"} sx={{ margin: "5px 0" }}>
          ${data.pricePerNight} / night
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Number of Guests</InputLabel>
          <Select
            label="Number of Guests"
            value={selectedCount}
            onChange={(e) => setSelectedCount(e.target.value)}
          >
            {[...Array(getGuests())].map((guest, index) => (
              <MenuItem value={index + 1}>{index + 1}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography variant="h6" fontWeight={"bold"} color={"gray"}>
          Select Dates
        </Typography>
        <DateRange
          ranges={dateRange}
          onChange={({ selection }) => setDateRange([selection])}
          minDate={today}
        />
      </Box>
    </Modal>
  );
}
