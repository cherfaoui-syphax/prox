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

export default function ContaminatedRoom() {
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
            Type : {"Gastrointestinal"} 
          </Typography>

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

        <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={6}>
                <Typography sx={{ mb: 1.5, color: "#059cfa" }}>
                    Definition of Contaminated room :
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
            </Grid>
            <Grid item xs={6}>
                <Typography sx={{ mb: 1.5, color: "#059cfa" }}>
                    Definition of Contaminated room :
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
            </Grid>
        </Grid>

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
                  Infection type
                </Typography>
                <Typography variant="body2">Gastrointestinal</Typography>

                <div class="horizontal-line"></div>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Action for case
                </Typography>
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
                              marginLeft: "10px",
                            }}
                          >
                            Cohorting
                          </Typography>
                        </span>
                      </div>
                <div class="horizontal-line"></div>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  No of contaminated rooms
                </Typography>
                <Typography variant="body2">4</Typography>

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
              Contaminated rooms
            </Typography>
            <br />
            <Card sx={{ minWidth: 275 }}>
              <Grid
                container
                style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
              >
                <Grid item xs={3}>
                  List of contaminated rooms
                </Grid>
                <Grid item xs={2}>
                  Type of room
                </Grid>
                <Grid item xs={2}>
                  Time in room
                </Grid>
                <Grid item xs={3}>
                  Action for room
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>

              {Array.from({ length: 4 }, (_, index) => index).map((number) => (
                <div>
                  <Grid container style={{ padding: "20px" }}>
                    <Grid item xs={3}>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        Room 201
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body2">Office</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body2">10 min</Typography>
                    </Grid>
                    <Grid item xs={3}>
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
                            Clean
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
            <br/>
            <br/>
            <Typography variant="h6" component="div">
              Exposed people
            </Typography>
            <br />
            <Card sx={{ minWidth: 275 }}>
              <Grid
                container
                style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
              >
                <Grid item xs={3}>
                  List of exposed people
                </Grid>
                <Grid item xs={2}>
                  Type of contaminated room
                </Grid>
                <Grid item xs={2}>
                  Time in room
                </Grid>
                <Grid item xs={3}>
                  Action for exposed contact
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>

              {Array.from({ length: 4 }, (_, index) => index).map((number) => (
                <div>
                  <Grid container style={{ padding: "20px" }}>
                    <Grid item xs={3}>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        Room 201
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body2">Bathroom</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body2">10 min</Typography>
                    </Grid>
                    <Grid item xs={3}>
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
