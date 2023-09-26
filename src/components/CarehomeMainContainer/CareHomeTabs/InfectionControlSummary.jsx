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

  return `${dayOfWeek}, ${month} ${day} ${year}`;
}

// Example usage:
const inputDate = new Date("2023-06-30");
const formattedDate = formatDate(inputDate);

const containerStyle = {
  width: "90%",
  margin: "130px auto 0",
  paddingRight: "40px",
};

const topDateStyle = {
  color: "#8f9ab5",
  fontSize: 14,
  marginBottom: 1.5,
};

const titleStyle = {
  color: "#283555",
  fontSize: 23,
  fontWeight: 700,
};

const buttonTextStyle = {
  marginBottom: 1.5,
  color: "white",
  textDecoration: "underline",
  fontWeight: 600,
  fontSize: 12,
  fontFamily: "Open Sans",
};

const buttonIconStyle = {
  fontSize: 20,
  marginLeft: "-9px",
  marginRight: "6px",
};

const buttonStyle = {
  padding: "9px 18px 9px 18px",
  margin: "0px 11px 0px 11px",
  height: 38,
};

const buttonGroupContainerStyle = {
  display: "inline-flex",
};

const searchWrapperStyle = {
  height: 38,
  fontSize: 12,
  fontWeight: 500,
  color: "#333333",
  padding: "9px 95px 11px 20px",
  display: "inline-flex",
  justifyContent: "space-between",
  position: "relative",
};

const searchWrapperInputStyle = {
  padding: 0,
};

const searchWrapperButtonStyle = {
  color: "#8f9ab5",
  padding: 0,
};

const searchWrapperButtonContainerStyle = {
  position: "absolute",
  right: 19,
  top: 7,
  padding: 0,
};

const downloadLinkText = {
  marginBottom: 1.5,
  color: "#283555",
  textDecoration: "underline",
  fontWeight: 600,
  display: "inline-block",
  fontSize: 12,
};

const downloadIconStyle = {
  color: "#283555",
  fontSize: 16,
  background: "transparent",
  margin: 0,
  padding: 0,
};

const downloadIconContainerStyle = {
  display: "inline-flex",
  background: "red",
  position: "relative",
  width: 25,
  height: 25,
  padding: 0,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#eaf0ff",
  marginTop: 2,
};

const downloadContainerStyle = {
  display: "inline-flex",
  alignItems: "center",
  position: "relative",
};

const mainContainerNavStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 20,
};

const tableCaretDownIconStyle = {
  color: "#919191",
};

const tableLinkStyle = {
  mb: 1.5,
  mt: "2px",
  textDecoration: "underline",
  color: "#01C1D3",
  fontWeight: 600,
  fontSize: 12,
  fontFamily: "Open Sans",
};

const tableReplayStyle = {
  mb: 1.5,
  color: "#1763F7",
  textDecoration: "underline",
  marginLeft: "8px",
  fontWeight: 600,
  fontSize: 12,
  fontFamily: "Open Sans",
};

export default function InfectionControlSummary() {
  return (
    <div>
      <Box style={containerStyle}>
        <Typography sx={topDateStyle}>{formattedDate}</Typography>

        <div style={mainContainerNavStyle}>
          <Typography variant="h5" component="div" sx={titleStyle}>
            Infection Control Summary
          </Typography>

          <div
            className="button-group-container"
            style={buttonGroupContainerStyle}
          >
            <button className="add-new-infection-button" style={buttonStyle}>
              <div
                style={{
                  display: "flex",
                  alignItems: "top",
                  flexWrap: "wrap",
                }}
              >
                <AddCircleRoundedIcon
                  sx={{ ...buttonTextStyle, ...buttonIconStyle }}
                />
                <Typography sx={buttonTextStyle}>
                  Add new infection case
                </Typography>
              </div>
            </button>

            <button className="view-action-button" style={buttonStyle}>
              <Typography sx={buttonTextStyle}>View Actions</Typography>
            </button>

            <button className="view-map-button" style={buttonStyle}>
              <Typography sx={buttonTextStyle}>Map View</Typography>
            </button>
          </div>

          <div class="search-wrapper" style={searchWrapperStyle}>
            <input
              placeholder="Search this page"
              type="text"
              style={searchWrapperInputStyle}
            />
            <button style={searchWrapperButtonContainerStyle}>
              <SearchRoundedIcon sx={searchWrapperButtonStyle} />
            </button>
          </div>

          <div style={{ display: "inline-flex" }}>
            <div style={downloadContainerStyle}>
              <Typography sx={downloadLinkText}>Download report</Typography>
              <div
                className="icon-container"
                style={downloadIconContainerStyle}
              >
                <DownloadIcon
                  className="download-icon"
                  style={downloadIconStyle}
                />
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <Card sx={{ minWidth: 275 }}>
          <Grid
            container
            style={{
              backgroundColor: "#F0F2F6",
              padding: "20px",
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "Open Sans",
              color: "#777F9E",
            }}
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
              <Grid
                container
                style={{
                  padding: "20px",
                  color: "#333",
                  fontWeight: 500,
                  fontSize: 12,
                  fontFamily: "Open Sans",
                }}
                alignItems="center"
              >
                <Grid item xs={1}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#333",
                      fontWeight: 600,
                      fontSize: 12,
                      fontFamily: "Open Sans",
                    }}
                  >
                    Elsa peter
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  staff
                </Grid>
                <Grid item xs={2}>
                  {formattedDate}
                </Grid>
                <Grid item xs={2}>
                  Respiratory
                </Grid>
                <Grid item xs={2}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "top",
                      flexWrap: "wrap",
                    }}
                  >
                    <KeyboardArrowDownIcon sx={tableCaretDownIconStyle} />
                    <span>
                      <Typography sx={tableLinkStyle}>Cohorting</Typography>
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
                          color: "#2800D0",
                          textDecoration: "underline",
                          marginLeft: "8px",
                          fontWeight: 600,
                          fontSize: 12,
                          fontFamily: "Open Sans",
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
                      <Typography sx={tableReplayStyle}>
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
