import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./style.css";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

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

  return `${dayOfWeek},${month} ${day} ${year}`;
}

// Example usage:
const inputDate = new Date("2023-06-30");
const formattedDate = formatDate(inputDate);

const containerStyle = {
  width: "90%",
  margin: "200px auto 0",
  paddingRight: "40px",
};

export default function InfectionControlSummary() {
  return (
    <div>
      <Box style={containerStyle}>
        <Typography sx={{ mb: 1.5, color: "gray" }}>{formattedDate}</Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
            Infection Control Consequences
          </Typography>
          <button className="add-new-infection-button">
            <div
              style={{
                display: "flex",
                alignItems: "top",
                flexWrap: "wrap",
              }}
            >
              <AddCircleRoundedIcon sx={{ color: "white" }} />
              <span>
                <Typography
                  sx={{
                    mb: 1.5,
                    color: "white",
                    textDecoration: "underline",
                    fontWeight: "bold",
                    marginLeft: "5px",
                  }}
                >
                  Add new infection case
                </Typography>
              </span>
            </div>
          </button>

          <button className="view-action-button">View Actions</button>
          <button className="view-map-button">Map View</button>

          <div class="search-wrapper">
            <input placeholder="Search this page" type="text" />
            <button>
              <SearchRoundedIcon sx={{ color: "gray" }} />
            </button>
          </div>

          <div style={{ display: "inline-block" }}>
            <div style={{ position: "relative" }}>
              <Typography
                sx={{
                  mb: 1.5,
                  color: "#435282",
                  textDecoration: "underline",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                Download report
                <div
                  className="icon-container"
                  style={{ display: "inline-block" }}
                >
                  <DownloadIcon
                    className="download-icon"
                    sx={{ color: "#435282" }}
                  />
                </div>
              </Typography>
            </div>
          </div>
        </div>

        <br></br>

        <Card sx={{ minWidth: 275 }}>
          <Grid
            container
            style={{ backgroundColor: "#F0F2F6", padding: "20px" }}
          >
            <Grid item xs={1}>
              Name of case
            </Grid>
            <Grid item xs={1}>
              Status
            </Grid>
            <Grid item xs={2}>
              Time and date of ofset
            </Grid>
            <Grid item xs={2}>
              Infections type
            </Grid>
            <Grid item xs={2}>
              Action for case
            </Grid>
            <Grid item xs={2}>
              No of exposed contacts
            </Grid>
            <Grid item xs={2}>
              No of exposed rooms
            </Grid>
          </Grid>

          {Array.from({ length: 4 }, (_, index) => index).map((number) => (
            <div>
              <Grid container style={{ padding: "20px" }} alignItems="center">
                <Grid item xs={1}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Elsa peter
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="body2">staff</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2">{formattedDate}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2">Respiratory</Typography>
                </Grid>
                <Grid item xs={2}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "top",
                      flexWrap: "wrap",
                    }}
                  >
                    <KeyboardArrowDownIcon sx={{ color: "#919191" }} />
                    <span>
                      <Typography
                        sx={{
                          mb: 1.5,
                          color: "#57BEC8",
                          textDecoration: "underline",
                          fontWeight: "bold",
                          marginLeft: "20px",
                        }}
                      >
                        Cohorting
                      </Typography>
                    </span>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "top",
                      flexWrap: "wrap",
                    }}
                  >
                    8
                    <span>
                      <Typography
                        sx={{
                          mb: 1.5,
                          color: "blue",
                          textDecoration: "underline",
                          marginLeft: "8px",
                        }}
                      >
                        List of contacts
                      </Typography>
                    </span>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "top",
                      flexWrap: "wrap",
                    }}
                  >
                    8
                    <span>
                      <Typography
                        sx={{
                          mb: 1.5,
                          color: "blue",
                          textDecoration: "underline",
                          marginLeft: "8px",
                        }}
                      >
                        Location history
                      </Typography>
                    </span>
                  </div>
                </Grid>
              </Grid>
              <div class="horizontal-line-no-margin"></div>
            </div>
          ))}
        </Card>
      </Box>
    </div>
  );
}
