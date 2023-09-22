import * as React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./style.css";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Menu,
  MenuItem,
  CardContent,
  Typography,
  Button,
  Card,
  Grid,
  Box,
} from "@mui/material";

const containerStyle = {
  width: "90%",
  margin: "130px auto 0",
  paddingRight: "40px",
};

const consequencesTypeStyle = {
  mb: 1.5,
  color: "#1763f7",
  fontWeight: 600,
  fontSize: 14,
  fontFamily: "Open Sans !important",
};

export default function BasicCard() {
  const [consequencesType, setConsequencesType] = React.useState("Skin");

  /* Type menu */
  const [typeMenuAnchorEl, setTypeMenuAnchorEl] = React.useState(null);
  const typeMenuOpen = Boolean(typeMenuAnchorEl);

  const handleTypeMenuClick = (event) => {
    setTypeMenuAnchorEl(event.currentTarget);
  };

  const handleTypeMenuClose = () => {
    setTypeMenuAnchorEl(null);
  };

  const handleTypeMenuSelect = (type) => {
    setConsequencesType(type);
    setTypeMenuAnchorEl(null);
  };

  return (
    <div>
      {consequencesType === "Gastrointestinal" ? (
        <Box style={containerStyle}>
          <Typography sx={{ mb: 1.5, color: "gray" }}>
            <ArrowBackIosNewIcon sx={{ fontSize: "12px", color: "gray" }} />
            Go back
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold" ,  color: "rgb(43 , 52 ,83)" }}>
            Infection Control Consequences
          </Typography>
          <div
            className="flex-bar"
          >
            <Button
              aria-controls={typeMenuOpen ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={typeMenuOpen ? "true" : undefined}
              onClick={handleTypeMenuClick}
            >
              <Typography id="type-menu-label" sx={consequencesTypeStyle}>
                Type: {consequencesType}
              </Typography>
            </Button>
            <Menu
              id="type-menu"
              anchorEl={typeMenuAnchorEl}
              open={typeMenuOpen}
              onClose={handleTypeMenuClose}
              MenuListProps={{
                "aria-labelledby": "type-menu-label",
              }}

            >
              <MenuItem
                onClick={() => {
                  handleTypeMenuSelect("Skin");
                }}
              >
                Skin
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleTypeMenuSelect("Respiratory");
                }}
              >
                Respiratory
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleTypeMenuSelect("Gastrointestinal");
                }}
              >
                Gastrointestinal
              </MenuItem>
            </Menu>

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
              <Typography sx={consequencesTypeStyle}>
                Definition of Contaminated Room:
              </Typography>
              <div className="pill">
                <div className="drop-menu-label" for="cars1">
                  Time in room
                </div>
                <select className="drop-menu" name="cars1" id="cars">
                  <option value="volvo">1 m</option>
                  <option value="saab">5 m</option>
                  <option value="opel">15 m</option>
                  <option value="audi">1 h</option>
                </select>
                <div className="drop-menu-label" for="cars2">
                  Type of room
                </div>
                <select className="drop-menu" name="cars2" id="cars">
                  <option value="volvo">Office</option>
                  <option value="saab">Bathroom</option>
                  <option value="opel">Bedroom</option>
                </select>
                <button className="search-button"> Search </button>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={consequencesTypeStyle}>
                Definition of Exposed Person:
              </Typography>
              <div className="pill">
                <div className="drop-menu-label" for="cars1">
                  Time in contaminated room
                </div>
                <select className="drop-menu" name="cars1" id="cars">
                  <option value="volvo">1 m</option>
                  <option value="saab">5 m</option>
                  <option value="opel">15 m</option>
                  <option value="audi">1 h</option>
                </select>
                <div className="drop-menu-label" for="cars2">
                  Type of room
                </div>
                <select className="drop-menu" name="cars2" id="cars">
                  <option value="volvo">Office</option>
                  <option value="saab">Bathroom</option>
                  <option value="opel">Bedroom</option>
                </select>
                <button className="search-button"> Search </button>
              </div>
            </Grid>
          </Grid>

          <br></br>
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={12} sm={3}>
              <h5  className="left-card-title table-title">
                Case
              </h5>
              <br />
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <div
                    className="left-card-title"
                  >
                    Name of case
                  </div>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Elsa peter
                  </Typography>

                  <div class="horizontal-line"></div>

                  <div
                    className="left-card-title"
                  >
                    Status
                  </div>
                  <div variant="body2" className="left-card-content" >staff</div>

                  <div class="horizontal-line"></div>

                  <div
                    className="left-card-title"
                  >
                    Time and date of onset
                  </div>
                  <div variant="body2" className="left-card-content" >Jun 30, 2021 10:00 AM</div>

                  <div class="horizontal-line"></div>

                  <div
                    className="left-card-title"
                  >
                    Infection type
                  </div>
                  <div variant="body2" className="left-card-content" >Gastrointestinal</div>

                  <div class="horizontal-line"></div>

                  <div
                    className="left-card-title"
                  >
                    Action for case
                  </div>
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

                  <div
                    className="left-card-title"
                  >
                    No of contaminated room
                  </div>

                  <div className="left-card-content" >4</div>

                  <div class="horizontal-line"></div>

                  <div
                    className="left-card-title"
                  >
                    No of exposed contacts
                  </div>

                  <div className="left-card-content" >8</div>

                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h6  className="table-title">
                Contaminated rooms
              </h6>
              <br />
              <Card sx={{ minWidth: 275 }}>
                <Grid
                  container
                  className="table-header"
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

                {Array.from({ length: 4 }, (_, index) => index).map(
                  (number) => (
                    <div>
                      <Grid container style={{ padding: "20px" }}>
                        <Grid item xs={3}>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: "bold" }}
                          >
                            Room 201
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <div className="table-content">Office</div>
                        </Grid>
                        <Grid item xs={2}>
                          <div className="table-content">10 min</div>
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
                  )
                )}
              </Card>
              <br />
              <br />
              <h5  className="table-title" >
                Exposed people
              </h5>
              <br />
              <Card sx={{ minWidth: 275 }}>
                <Grid
                  container
                  className="table-header"
                >
                  <Grid item xs={2.5}>
                    List of exposed people
                  </Grid>
                  <Grid item xs={3}>
                    Type of contaminated room
                  </Grid>
                  <Grid item xs={1.5}>
                    Time in room
                  </Grid>
                  <Grid item xs={3}>
                    Action for exposed contact
                  </Grid>
                  <Grid item xs={2}></Grid>
                </Grid>

                {Array.from({ length: 4 }, (_, index) => index).map(
                  (number) => (
                    <div>
                      <Grid container style={{ padding: "20px" }}>
                        <Grid item xs={2.5}>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: "bold" }}
                          >
                            Room 201
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                        <div className="table-content">Bathroom</div>
                        </Grid>
                        <Grid item xs={1.5}>
                        <div className="table-content">10 min</div>
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
                  )
                )}
              </Card>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box style={containerStyle}>
          <Typography sx={{ mb: 1.5, color: "gray" }}>
            <ArrowBackIosNewIcon sx={{ fontSize: "12px", color: "gray" }} />
            Go back
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
            Infection Control Consequences
          </Typography>
          <div
            className="flex-bar"
          >
            <Button
              aria-controls={typeMenuOpen ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={typeMenuOpen ? "true" : undefined}
              onClick={handleTypeMenuClick}
            >
              <Typography id="type-menu-label" sx={consequencesTypeStyle}>
                Type: {consequencesType} | Definition Of Exposed Contact:
              </Typography>
            </Button>
            <Menu
              id="type-menu"
              anchorEl={typeMenuAnchorEl}
              open={typeMenuOpen}
              onClose={handleTypeMenuClose}
              MenuListProps={{
                "aria-labelledby": "type-menu-label",
              }}
            >
              <MenuItem
                onClick={() => {
                  handleTypeMenuSelect("Skin");
                }}
              >
                Skin
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleTypeMenuSelect("Respiratory");
                }}
              >
                Respiratory
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleTypeMenuSelect("Gastrointestinal");
                }}
              >
                Gastrointestinal
              </MenuItem>
            </Menu>
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
              <h5  className="left-card-title table-title">
                Case
              </h5>
              <br />

              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <div
                    className="left-card-title"
                  >
                    Name of case
                  </div>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Elsa peter
                  </Typography>

                  <div class="horizontal-line"></div>

                  <div
                    className="left-card-title"
                  >
                    Status
                  </div>
                  <div variant="body2" className="left-card-content" >staff</div>

                  <div class="horizontal-line"></div>

                  <div
                    className="left-card-title"
                  >
                    Time and date of onset
                  </div>
                  <div variant="body2" className="left-card-content" >Jun 30, 2021 10:00 AM</div>

                  <div class="horizontal-line"></div>

                  <div
                    className="left-card-title"
                  >
                    Action for case
                  </div>
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

                  <div
                    className="left-card-title"
                  >
                    No of exposed contacts
                  </div>

                  <div className="left-card-content" >8</div>

                </CardContent>
              </Card>

            </Grid>
            <Grid item xs={12} sm={9}>
              <h6  className="table-title">
                List of contacts
              </h6>
              <br />
              <Card sx={{ minWidth: 275 }}>
                <Grid
                  container
                  className="table-header"

                >
                  <Grid item xs={2}>
                    List of all contacts
                  </Grid>
                  <Grid item xs={1}>
                    Status
                  </Grid>
                  <Grid item xs={2.5}>
                    Duration of contact
                  </Grid>
                  <Grid item xs={2.5}>
                    Proximity of contact
                  </Grid>
                  <Grid item xs={2}>
                    Action for contact
                  </Grid>
                  <Grid item xs={2}></Grid>
                </Grid>

                {Array.from({ length: 4 }, (_, index) => index).map(
                  (number) => (
                    <div>
                      <Grid container style={{ padding: "20px" }}>
                        <Grid item xs={2}>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: "bold" }}
                          >
                            Elsa peter
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography variant="body2">staff</Typography>
                        </Grid>
                        <Grid item xs={2.5}>
                          <Typography variant="body2">5 min</Typography>
                        </Grid>
                        <Grid item xs={2.5}>
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
                  )
                )}
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}
