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

const containerStyle = {
  width: "90%",
  margin: "200px auto 0",
  paddingRight: "40px",
};

export default function BasicCard() {
  return (
    <div>
      <Box style={containerStyle}>
        <Typography sx={{ mb: 1.5, color: "gray" }}>
          <ArrowBackIosNewIcon sx={{ fontSize: "12px", color: "gray" }} />
          Go back
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          Infection Control Consequences
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ mb: 1.5, color: "#059cfa" }}>
            Type : {"respiratory"} | Definition of exposed contact :
          </Typography>
          <div className="pill">
            <div className="drop-menu-label" for="cars1">
              Proximity
            </div>
            <select className="drop-menu" name="cars1" id="cars">
              <option value="volvo">1 m</option>
              <option value="saab">10 m</option>
              <option value="opel">20 m</option>
              <option value="audi">50 m</option>
            </select>
            <div className="drop-menu-label" for="cars2">
              Duration of contact
            </div>
            <select className="drop-menu" name="cars2" id="cars">
              <option value="volvo">1 min</option>
              <option value="saab">5 min</option>
              <option value="opel">15 min</option>
              <option value="audi">1 h</option>
            </select>
            <button className="search-button"> Search </button>
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
        <Grid container justifyContent="center" spacing={5}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" component="div">
              Case
            </Typography>
            <br />
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Name of case
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  Elsa peter
                </Typography>

                <div class="horizontal-line"></div>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Status
                </Typography>
                <Typography variant="body2">staff</Typography>

                <div class="horizontal-line"></div>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Time and date of onset
                </Typography>
                <Typography variant="body2">Jun 30, 2021 10:00 AM</Typography>

                <div class="horizontal-line"></div>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Action for case
                </Typography>
                <Typography variant="body2">Cohorting</Typography>

                <div class="horizontal-line"></div>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  No of exposed contacts
                </Typography>
                <Typography variant="body2">8</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="h6" component="div">
              List of contacts
            </Typography>
            <br />
            <Card sx={{ minWidth: 275 }}>
              <Grid
                container
                style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
              >
                <Grid item xs={2}>
                  List of all contacts
                </Grid>
                <Grid item xs={2}>
                  Status
                </Grid>
                <Grid item xs={2}>
                  Duration of contact
                </Grid>
                <Grid item xs={2}>
                  Proximity of contact
                </Grid>
                <Grid item xs={2}>
                  Action for contact
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>

              {Array.from({ length: 4 }, (_, index) => index).map((number) => (
                <div>
                  <Grid container style={{ padding: "20px" }}>
                    <Grid item xs={2}>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        Elsa peter
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body2">staff</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body2">5 min</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body2">3 m</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "top",
                          flexWrap: "wrap",
                        }}
                      >
                        <KeyboardArrowDownIcon />
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
                            Isolate
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
                        <span>
                          <Typography
                            sx={{
                              mb: 1.5,
                              color: "blue",
                              textDecoration: "underline",
                            }}
                          >
                            View replay
                          </Typography>
                        </span>
                        <ArrowForwardIosIcon sx={{ color: "blue" }} />
                      </div>
                    </Grid>
                  </Grid>
                  <div class="horizontal-line-no-margin"></div>
                </div>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
