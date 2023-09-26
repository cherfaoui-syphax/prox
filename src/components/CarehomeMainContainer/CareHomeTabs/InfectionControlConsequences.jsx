import * as React from "react";
import "./style.css";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  ArrowBackIosNew as ArrowBackIosNewIcon,
  Download as DownloadIcon,
  South as SouthIcon,
  North as NorthIcon,
} from "@mui/icons-material";
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
  margin: "130px auto",
  paddingBottom: "70px",
};

const goBackStyle = {
  color: "#8f9ab5",
  fontSize: 14,
  marginBottom: 1.5,
  display: "inline-flex",
  alignItems: "center",
};

const goBackArrowStyle = {
  fontSize: "12px",
  color: "#909090",
  marginRight: "10px",
};

const consequencesTypeStyle = {
  padding: 0,
  mb: 1.1,
  color: "#1763f7",
  fontWeight: 600,
  fontSize: 14,
  fontFamily: "Open Sans !important",
};

const typeDropdownButtonStyle = {
  margin: 0,
  padding: 0,
};

const downloadLinkText = {
  marginBottom: "7px",
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
  marginRight: 27,
};

const downloadContainerStyle = {
  display: "inline-flex",
  alignItems: "center",
  position: "relative",
  marginTop: "6px",
};

const titleRowStyle = {
  display: "inline-flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
};

const caseNameStyle = {
  fontWeight: 600,
  fontSize: 12,
  color: "#333333",
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

const tableCaretDownIconStyle = {
  color: "#919191",
};

const tableArrowIconStyle = {
  color: "#919191",
  fontSize: "11px",
  marginLeft: "2px",
  marginTop: "4px",
  paddingTop: "2px",
};

const tableCaretRightIconStyle = {
  color: "#919191",
  fontSize: 12,
  marginLeft: "9px",
  marginTop: "4px",
};

const tableReplayStyle = {
  mb: 1.5,
  color: "#1763F7",
  textDecoration: "underline",
  marginLeft: "8px",
  fontWeight: 500,
  fontSize: 12,
  fontFamily: "Open Sans",
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
          <Typography sx={goBackStyle}>
            <ArrowBackIosNewIcon sx={goBackArrowStyle} />
            Go back
          </Typography>
          <div style={titleRowStyle}>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", color: "rgb(43 , 52 ,83)" }}
            >
              Infection Control Consequences
            </Typography>

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
          <div
          className="flex-bar"
          >
            <Button
              aria-controls={typeMenuOpen ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={typeMenuOpen ? "true" : undefined}
              onClick={handleTypeMenuClick}
              style={typeDropdownButtonStyle}
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
              <h5 className="table-title case-title">Case</h5>
              <br />
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <div className="left-card-title">Name of Case</div>
                  <Typography variant="body2" sx={caseNameStyle}>
                    Elsa peter
                  </Typography>

                  <div class="horizontal-line"></div>

                  <div className="left-card-title">Status</div>
                  <div variant="body2" className="left-card-content">
                    staff
                  </div>

                  <div class="horizontal-line"></div>

                  <div className="left-card-title">Time and date of onset</div>
                  <div variant="body2" className="left-card-content">
                    Jun 30, 2021 10:00 AM
                  </div>

                  <div class="horizontal-line"></div>

                  <div className="left-card-title">Infection type</div>
                  <div variant="body2" className="left-card-content">
                    Gastrointestinal
                  </div>

                  <div class="horizontal-line"></div>

                  <div className="left-card-title">Action for case</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "top",
                      flexWrap: "wrap",
                    }}
                  >
                    <KeyboardArrowDownIcon style={tableCaretDownIconStyle} />
                    <span>
                      <Typography sx={tableLinkStyle}>Cohorting</Typography>
                    </span>
                  </div>
                  <div class="horizontal-line"></div>

                  <div className="left-card-title">No of contaminated room</div>

                  <div className="left-card-content">4</div>

                  <div class="horizontal-line"></div>

                  <div className="left-card-title">No of exposed contacts</div>

                  <div className="left-card-content">8</div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h6 className="table-title">Contaminated rooms</h6>
              <br />
              <Card sx={{ minWidth: 275 }}>
                <Grid container className="table-header">
                  <Grid item xs={3}>
                    List of contaminated rooms
                    <SouthIcon style={tableArrowIconStyle} />
                  </Grid>
                  <Grid item xs={2}>
                    Type of room
                    <SouthIcon style={tableArrowIconStyle} />
                  </Grid>
                  <Grid item xs={2}>
                    Time in room
                    <NorthIcon style={tableArrowIconStyle} />
                  </Grid>
                  <Grid item xs={3}>
                    Action for room
                    <NorthIcon style={tableArrowIconStyle} />
                  </Grid>
                  <Grid item xs={2}></Grid>
                </Grid>

                {Array.from({ length: 4 }, (_, index) => index).map(
                  (number) => (
                    <div>
                      <Grid container style={{ padding: "20px" }}>
                        <Grid item xs={3}>
                          <Typography variant="body2" sx={caseNameStyle}>
                            Room 201
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <div className="table-content left-card-content">
                            Office
                          </div>
                        </Grid>
                        <Grid item xs={2}>
                          <div className="table-content left-card-content">
                            10 min
                          </div>
                        </Grid>
                        <Grid item xs={3}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "top",
                              flexWrap: "wrap",
                            }}
                          >
                            <KeyboardArrowDownIcon
                              style={tableCaretDownIconStyle}
                            />
                            <span>
                              <Typography sx={tableLinkStyle}>
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
                            <span>
                              <Typography sx={tableReplayStyle}>
                                View replay on map
                              </Typography>
                            </span>
                            <ArrowForwardIosIcon
                              sx={tableCaretRightIconStyle}
                            />
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
              <h5 className="table-title">Exposed people</h5>
              <br />
              <Card sx={{ minWidth: 275 }}>
                <Grid container className="table-header">
                  <Grid item xs={2.5}>
                    List of exposed people
                    <SouthIcon style={tableArrowIconStyle} />
                  </Grid>
                  <Grid item xs={3}>
                    Type of contaminated room
                    <SouthIcon style={tableArrowIconStyle} />
                  </Grid>
                  <Grid item xs={1.5}>
                    Time in room
                    <NorthIcon style={tableArrowIconStyle} />
                  </Grid>
                  <Grid item xs={3}>
                    Action for exposed contact
                    <NorthIcon style={tableArrowIconStyle} />
                  </Grid>
                  <Grid item xs={2}></Grid>
                </Grid>

                {Array.from({ length: 4 }, (_, index) => index).map(
                  (number) => (
                    <div>
                      <Grid container style={{ padding: "20px" }}>
                        <Grid item xs={2.5}>
                          <Typography variant="body2" sx={caseNameStyle}>
                            Room 201
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <div className="table-content left-card-content ">
                            Bathroom
                          </div>
                        </Grid>
                        <Grid item xs={1.5}>
                          <div className="table-content left-card-content">
                            10 min
                          </div>
                        </Grid>
                        <Grid item xs={3}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "top",
                              flexWrap: "wrap",
                            }}
                          >
                            <KeyboardArrowDownIcon
                              style={tableCaretDownIconStyle}
                            />
                            <span>
                              <Typography sx={tableLinkStyle}>
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
                              <Typography sx={tableReplayStyle}>
                                View replay on map
                              </Typography>
                            </span>
                            <ArrowForwardIosIcon
                              sx={tableCaretRightIconStyle}
                            />
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
          <Typography sx={goBackStyle}>
            <ArrowBackIosNewIcon sx={goBackArrowStyle} />
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
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={12} sm={3}>
              <h6 className="table-title case-title">Case</h6>
              <br />
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <div className="left-card-title">Name of case</div>
                  <Typography variant="body2" sx={caseNameStyle}>
                    Elsa peter
                  </Typography>

                  <div class="horizontal-line"></div>

                  <div className="left-card-title">Status</div>
                  <Typography variant="body2">staff</Typography>

                  <div class="horizontal-line"></div>

                  <div className="left-card-title">Time and date of onset</div>
                  <Typography variant="body2">Jun 30, 2021 10:00 AM</Typography>

                  <div class="horizontal-line"></div>

                  <div className="left-card-title">Action for case</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "top",
                      flexWrap: "wrap",
                    }}
                  >
                    <KeyboardArrowDownIcon style={tableCaretDownIconStyle} />
                    <span>
                      <Typography sx={tableLinkStyle}>Cohorting</Typography>
                    </span>
                  </div>
                  <div class="horizontal-line"></div>

                  <div className="left-card-title">No of exposed contacts</div>
                  <Typography variant="body2">8</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h5 className="table-title">List of contacts</h5>

              <br />
              <Card sx={{ minWidth: 275 }}>
                <Grid container className="table-header">
                  <Grid item xs={2}>
                    List of all contacts
                    <SouthIcon style={tableArrowIconStyle} />
                  </Grid>
                  <Grid item xs={2}>
                    Status
                    <SouthIcon style={tableArrowIconStyle} />
                  </Grid>
                  <Grid item xs={2}>
                    Duration of contact
                    <NorthIcon style={tableArrowIconStyle} />
                  </Grid>
                  <Grid item xs={2}>
                    Proximity of contact
                    <NorthIcon style={tableArrowIconStyle} />
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
                          <Typography variant="body2" sx={caseNameStyle}>
                            Elsa peter
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body2 left-card-content">
                            staff
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body2 left-card-content">
                            5 min
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body2 left-card-content">
                            3 m
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "top",
                              flexWrap: "wrap",
                            }}
                          >
                            <KeyboardArrowDownIcon
                              style={tableCaretDownIconStyle}
                            />
                            <span>
                              <Typography sx={tableLinkStyle}>
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
                              <Typography sx={tableReplayStyle}>
                                View replay on map
                              </Typography>
                            </span>
                            <ArrowForwardIosIcon
                              sx={tableCaretRightIconStyle}
                            />
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
