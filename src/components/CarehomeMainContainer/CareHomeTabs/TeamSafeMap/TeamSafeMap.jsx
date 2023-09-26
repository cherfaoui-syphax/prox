import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MapTab from "./MapTab";
import "../style.css";


function formatDate(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${dayOfWeek}, ${month} ${day} ${year}`;
}

// Example usage:
const inputDate = new Date("2023-06-30");
const formattedDate = formatDate(inputDate);

const containerStyle = {
  width: "90%",
  margin: "130px auto 0",
};

const goBackStyle = {
    color: "#8f9ab5",
    fontSize: 14,
    marginBottom: 1.5,
    display: "inline-flex",
    alignItems: "center",
  };
  



export default function TeamSafeSummary() {


  return (
    <div>
      <Box style={containerStyle}>
          <Typography sx={goBackStyle}>
            {formattedDate}
          </Typography>
        <br></br>
        <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", color: "rgb(43 , 52 ,83)" , marginBottom: "29px" }}
        >
              Team Safe Summary
        </Typography>


        <div style={{
          height : "80%",
          width : "100%",
        }} >
          <MapTab></MapTab>

        </div>



        

      </Box>

     
    </div>
  );
}
