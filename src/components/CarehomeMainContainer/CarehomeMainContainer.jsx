import React, { useState } from "react";
import HomeTemplate from "../../components/HomeTemplate/HomeTemplate";
import InfectionSafe from "../../components/CarehomeInfectionSafe/CarehomeInfectionSafe";
import LiveMap from "../../components/LiveMap/LiveMap";
import IncidentsListTab from "../../components/IncidentsListTab/IncidentsListTab";
import InfectionControlConsequences from "./CareHomeTabs/InfectionControlConsequences";
import InfectionControlSummary from "./CareHomeTabs/InfectionControlSummary";
import { Grid, Avatar } from "@mui/material";
import {
  Error as ExclamationMarkIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Groups as GroupsIcon,
  ViewInAr as CubeIcon,
  InsertDriveFile as DocumentIcon,
  QuestionMark as QuestionMarkIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  KeyboardArrowDown as DownIcon,
} from "@mui/icons-material";
// import { Authenticator } from '@aws-amplify/ui-react';
import { Storage } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import dummyMetadata from "../MapTab/dummy_metadata.json";
import {
  Tabs,
  Tab,
  Menu,
  MenuItem,
  Toolbar,
  AppBar,
  CssBaseline,
  Box,
  Button,
} from "@mui/material";
import NewIncident from "../NewIncident/NewIncident";
import { styled, alpha } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CaseDetail from "../CaseDetail/CaseDetail";
import MapTab from "../MapTab/MapTab";
import { withLDConsumer, useFlags } from "launchdarkly-react-client-sdk";

function CarehomeMainContainer({ flags, ldClient, user, signOut }) {
  // const flags = useFlags();
  if (ldClient) {
    ldClient.identify({
      kind: "user",
      key: user.attributes.email,
      name: user.attributes.name,
    });
  }

  console.log(user.attributes);

  console.log(flags);
  const navigate = useNavigate();
  const location = useLocation();

  /* Location menu */

  const [locationMenuAnchorEl, setLocationMenuAnchorEl] = React.useState(null);
  const locationMenuOpen = Boolean(locationMenuAnchorEl);

  const handleLocationMenuClick = (event) => {
    setLocationMenuAnchorEl(event.currentTarget);
  };

  const handleLocationMenuClose = () => {
    setLocationMenuAnchorEl(null);
  };

  /* User menu */

  const [userMenuAnchorEl, setUserMenuAnchorEl] = React.useState(null);
  const userMenuOpen = Boolean(userMenuAnchorEl);

  const handleUserMenuClick = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  /* Infection safe menu */

  const [infectionSafeMenuAnchorEl, setInfectionSafeMenuAnchorEl] =
    React.useState(null);
  const infectionSafeMenuOpen = Boolean(infectionSafeMenuAnchorEl);

  const handleInfectionSafeMenuClick = (event) => {
    event.stopPropagation();
    setInfectionSafeMenuAnchorEl(event.currentTarget);
  };

  const handleInfectionSafeMenuClose = (event) => {
    if (event) {
      event.stopPropagation();
    }
    setInfectionSafeMenuAnchorEl(null);
  };

  /* Team safe menu */

  const [teamSafeMenuAnchorEl, setTeamSafeMenuAnchorEl] = React.useState(null);
  const teamSafeMenuOpen = Boolean(teamSafeMenuAnchorEl);

  const handleTeamSafeMenuClick = (event) => {
    setTeamSafeMenuAnchorEl(event.currentTarget);
  };

  const handleTeamSafeMenuClose = () => {
    setTeamSafeMenuAnchorEl(null);
  };

  /* Resident safe menu */

  const [residentSafeMenuAnchorEl, setResidentSafeMenuAnchorEl] =
    React.useState(null);
  const residentSafeMenuOpen = Boolean(residentSafeMenuAnchorEl);

  const handleResidentSafeMenuClick = (event) => {
    setResidentSafeMenuAnchorEl(event.currentTarget);
  };

  const handleResidentSafeMenuClose = () => {
    setResidentSafeMenuAnchorEl(null);
  };

  /* Asset safe menu */

  const [assetSafeMenuAnchorEl, setAssetSafeMenuAnchorEl] =
    React.useState(null);
  const assetSafeMenuOpen = Boolean(assetSafeMenuAnchorEl);

  const handleAssetSafeMenuClick = (event) => {
    setAssetSafeMenuAnchorEl(event.currentTarget);
  };

  const handleAssetSafeMenuClose = () => {
    setAssetSafeMenuAnchorEl(null);
  };

  const [currentLocation, setCurrentLocation] = useState(
    "Newton House, Building 4"
  );
  const [logoUrl, setLogoUrl] = useState(
    "https://proxximosamplifybucket133936-expstage.s3.eu-west-2.amazonaws.com/sunburst_care_services.png"
  );
  const [middleNavbarImage, setMiddleNavbarImage] = useState(
    "https://proxximosamplifybucket133936-expstage.s3.eu-west-2.amazonaws.com/proxximos_safer_care.png"
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("Home");
  const [alertsQty, setAlertsQty] = useState(12);
  const [mitigationsQty, setMitigationsQty] = useState(4);
  const [currentTab, setCurrentTab] = useState(
    location && location.pathname ? location.pathname : "/"
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mitigationText, setMitigationText] = useState("");
  const [mitigationInput1, setMitigationInput1] = useState("");
  const [mitigationInput2, setMitigationInput2] = useState("");
  const [mitigationInput3, setMitigationInput3] = useState("");
  const [mitigationInput4, setMitigationInput4] = useState("");
  const [incidentText, setIncidentText] = useState("");
  const [incidentInput1, setIncidentInput1] = useState("");
  const [incidentInput2, setIncidentInput2] = useState("");
  const [incidentInput3, setIncidentInput3] = useState(new Date());
  const [incidentInput4, setIncidentInput4] = useState("");
  const [wardsHovered, setWardsHovered] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        // main: "#1C54C1",
        main: "#01c1d3",
        contrastText: "#fff",
      },
      info: {
        main: "#fff",
        contrastText: "#666",
      },
    },
    components: {
      MuiToolbar: {
        styleOverrides: {
          dense: {
            height: 46,
            minHeight: 46,
          },
        },
      },
    },
    overrides: {
      MuiButton: {
        containedInfo: {
          color: "#4D6879",
        },
      },
    },
  });

  const navbarDropdownStyle = {
    marginLeft: "-42px",
    paddingLeft: "42px",
    color: "inherit",
    fontWeight: "inherit",
  };

  const appBarStyles = {
    //width: { sm: `calc(100% - ${drawerWidth}px)` },
    mt: { sm: `64px` },
    background: "#fff",
    color: "#283555",
    boxShadow: "0px 1px 10px 0px rgb(0 0 0 / 15%)",
    borderBottom: "1px solid #e3e3e3",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  };

  const logoStyle = {
    height: "37px",
    width: "154px",
  };

  const centerNavbarImageStyle = {
    height: "41px",
    width: "148px",
  };

  const upperRightUserMenuStyle = {
    display: "inline-flex",
    alignItems: "center",
    color: "#283555",
  };

  const downCaretStyle = {
    color: "#919191",
  };

  const lowerNavDownCaretStyle = {
    marginRight: "-11px",
    marginLeft: "11px",
  };

  const currentLocationStyle = {
    margin: 5,
    color: "#283555",
    display: "inline-flex",
    alignItems: "center",
  };

  const currentLocationTextStyle = {
    marginLeft: 2,
  };

  const navbarUserInfo = {
    margin: 8,
    marginLeft: 12,
    marginRight: 20,
    lineHeight: "1.3",
  };

  const navbarUserInfoFirstLine = {
    fontWeight: 600,
    fontSize: 14,
  };

  const navbarUserInfoSecondLine = {
    fontWeight: 400,
  };

  const upperNavbarIconStyle = {
    background: "#1763f7",
    borderRadius: 30,
    color: "#EAF0FF",
    padding: 5,
  };

  const upperNavbarIconContainerStyle = {
    background: "#EAF0FF",
    borderRadius: 30,
    width: 40,
    height: 40,
    padding: 8,
    margin: 5,
  };

  const upperAvatarContainerStyle = {
    background: "#EAF0FF",
    borderRadius: 30,
    width: 40,
    height: 40,
    margin: 5,
  };

  const toolbarStyle = {
    height: 58,
    borderTopWidth: 1,
    borderTopColor: "#F2F2F2",
    borderRightStyle: "solid",
    borderRightWidth: 1,
    borderRightColor: "#F2F2F2",
    borderRightStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
    borderBottomStyle: "solid",
  };

  const lastLowerTabStyle = {
    borderRightWidth: 0,
    borderRightColor: "#fff",
  };

  const lowerTabStyles = {
    display: "inline-flex",
    fontWeight: 600,
    height: 58,
    color: "#283555",
    paddingTop: 20,
    fontSize: "16px",
    textTransform: "none",
    fontSize: 15,
    letterSpacing: "-0.45px",
    borderRightWidth: 1,
    borderRightColor: "#F2F2F2",
    borderRightStyle: "solid",
    paddingRight: 24,
    paddingLeft: 24,
    minWidth: 0,
    minHeight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  };

  const navbarCenterColumn = {
    display: "inline-flex",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    marginLeft: "-185px",
  };

  const tabContainerStyle = {
    display: "inline-block",
    height: 58,
  };

  const tabIconStyle = {
    fontSize: 13,
    color: "#283555",
    width: 28,
    height: 28,
    background: "#EAF0FF",
    borderRadius: 30,
    padding: "6px",
    marginRight: "13px !important",
  };

  const topNavBarRight = {
    display: "flex",
    alignItems: "center",
  };

  const tabBoxStyle = {
    borderBottom: "none",
    borderColor: "divider",
    width: "100%",
    padding: "0px 0px 0px 20px",
    display: "flex",
    height: 58,
    justifyContent: "center",
    alignItems: "center",
  };

  const wardsMenuHidden = {
    display: "none",
  };

  const wardsMenuHovered = {
    display: "block",
    position: "absolute",
    top: "70px",
    boxShadow: "0px 1px 6px 1px rgba(0, 0, 0, 0.2)",
    color: "#666",
    padding: "20px",
    width: "165px",
    textTransform: "uppercase",
    fontSize: "13px",
    minHeight: "130px",
    backgroundColor: "#fff",
  };

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const openIncidentDialog = ({ name, disease, date }) => {
    navigate("/new-incident");

    // if (name) {
    //   setIncidentInput1(name);
    // }
    // if (disease) {
    //   setIncidentInput2(disease);
    // }
    // if (date) {
    //   setIncidentInput3(new Date(date));
    // }
    // setDialogOpen(true);
  };

  const sidebarStyles = {
    background:
      "linear-gradient(180deg, #2B3553 0%, #2B3553 29.69%, #2B3553 48.44%, #1A2032 100%)",
  };

  const sidebarTextStyles = {
    color: "#fff",
    lineHeight: "19px",
    fontSize: "14px",
  };

  const handleTabChange = (evt, tab) => {
    setCurrentTab(tab);

    navigate(tab);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const upperToolbarStyle = {
    background: "#FFF",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#F2F2F2",
    borderStyle: "solid",
    color: "#283555",
    fontSize: 12,
  };

  const onChangeIncidentText = (evt) => {
    setIncidentText(evt.target.value);
  };

  const onChangeMitigationText = (evt) => {
    setMitigationText(evt.target.value);
  };

  React.useEffect(() => {
    if (location && location.pathname !== currentTab) {
      setCurrentTab(location.pathname);
    }

    // if (!logoUrl) {
    //   getLogo();
    // }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            //width: { sm: `calc(100% - ${drawerWidth}px)` },
            // ml: { sm: `${drawerWidth}px` },
            // background: '#283555',
            background: "#1C54C1",
            color: "#fff",
            boxShadow: "none",
            zIndex: "1200",
          }}
        >
          <Toolbar style={upperToolbarStyle}>
            <div class="logocontainer">
              {middleNavbarImage ? (
                <a
                  href="https://proxximos.com"
                  style={{ border: 0, outline: 0 }}
                >
                  <img
                    src={middleNavbarImage}
                    style={logoStyle}
                    alt="Proxximos"
                  />
                </a>
              ) : (
                <></>
              )}
            </div>

            <div class="center-navbar-image" style={navbarCenterColumn}>
              {logoUrl ? (
                <a
                  href="https://proxximos.com"
                  style={{ border: 0, outline: 0 }}
                >
                  <img
                    src={logoUrl}
                    style={centerNavbarImageStyle}
                    alt="Sunburst Care Services"
                  />
                </a>
              ) : (
                <></>
              )}

              <Button
                aria-controls={locationMenuOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={locationMenuOpen ? "true" : undefined}
                onClick={handleLocationMenuClick}
              >
                <div id="location-menu-label" style={currentLocationStyle}>
                  <DownIcon style={downCaretStyle} />
                  <span style={currentLocationTextStyle}>
                    {currentLocation}
                  </span>
                </div>
              </Button>
              <Menu
                id="location-menu"
                anchorEl={locationMenuAnchorEl}
                open={locationMenuOpen}
                onClose={handleLocationMenuClose}
                MenuListProps={{
                  "aria-labelledby": "location-menu-label",
                }}
              >
                <MenuItem onClick={handleLocationMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleLocationMenuClose}>
                  My account
                </MenuItem>
                <MenuItem onClick={handleLocationMenuClose}>Logout</MenuItem>
              </Menu>
            </div>

            <div class="navbar-right" style={topNavBarRight}>
              <span style={upperNavbarIconContainerStyle}>
                <QuestionMarkIcon style={upperNavbarIconStyle} />
              </span>
              <span style={upperNavbarIconContainerStyle}>
                <SearchIcon style={upperNavbarIconStyle} />
              </span>
              <span style={upperNavbarIconContainerStyle}>
                <NotificationsIcon style={upperNavbarIconStyle} />
              </span>

              <Button
                aria-controls={userMenuOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={userMenuOpen ? "true" : undefined}
                onClick={handleUserMenuClick}
              >
                <div style={upperRightUserMenuStyle}>
                  <DownIcon style={downCaretStyle} />
                  <div style={upperAvatarContainerStyle}>
                    <Avatar
                      alt="My Profile"
                      src={`https://proxximosamplifybucket133936-expstage.s3.eu-west-2.amazonaws.com/users/${encodeURIComponent(
                        user.attributes.email
                      ).replace("%20", "+")}/avatar.png`}
                    />
                  </div>
                  <div style={navbarUserInfo}>
                    <div id="user-name" style={navbarUserInfoFirstLine}>
                      {user.attributes.name || "Test Name Here"}
                    </div>
                    <div style={navbarUserInfoSecondLine}>
                      {user.attributes.profile || "Placeholder Title"}
                    </div>
                  </div>
                </div>
              </Button>
              <Menu
                id="user-menu"
                anchorEl={userMenuAnchorEl}
                open={userMenuOpen}
                onClose={handleUserMenuClose}
                MenuListProps={{
                  "aria-labelledby": "user-name",
                }}
              >
                <MenuItem onClick={handleUserMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleUserMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AppBar position="fixed" sx={appBarStyles}>
              <Toolbar sx={toolbarStyle} variant="dense">
                <Box sx={tabBoxStyle}>
                  <Tabs
                    style={tabContainerStyle}
                    value={currentTab}
                    onChange={handleTabChange}
                    aria-label="Navbar"
                    indicatorColor="primary"
                    textColor="primary"
                  >
                    <Tab
                      value="/"
                      label="Home"
                      icon={<HomeIcon sx={tabIconStyle} />}
                      iconPosition="start"
                      style={lowerTabStyles}
                    />

                    <Tab
                      value="/infection-safe"
                      label={
                        <>
                          <Button
                            variant="text"
                            style={navbarDropdownStyle}
                            aria-controls={
                              infectionSafeMenuOpen ? "basic-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={
                              infectionSafeMenuOpen ? "true" : undefined
                            }
                            onClick={handleInfectionSafeMenuClick}
                          >
                            <span id="infection-safe-label">
                              Infection Safe
                            </span>
                            <DownIcon
                              style={{
                                ...downCaretStyle,
                                ...lowerNavDownCaretStyle,
                              }}
                            />{" "}
                          </Button>
                          <Menu
                            id="infection-safe-menu"
                            anchorEl={infectionSafeMenuAnchorEl}
                            open={infectionSafeMenuOpen}
                            onClose={handleInfectionSafeMenuClose}
                            MenuListProps={{
                              "aria-labelledby": "infection-safe-label",
                            }}
                          >
                            <MenuItem
                              onClick={(event) => {
                                event.stopPropagation();
                                navigate("/infection-safe/summary");
                                handleInfectionSafeMenuClose();
                              }}
                            >
                              Infection Control Summary
                            </MenuItem>
                            <MenuItem
                              onClick={(event) => {
                                event.stopPropagation();
                                navigate("/infection-safe/consequences");
                                handleInfectionSafeMenuClose();
                              }}
                            >
                              Infection Control Consequences
                            </MenuItem>
                          </Menu>
                        </>
                      }
                      iconPosition="start"
                      icon={<ExclamationMarkIcon sx={tabIconStyle} />}
                      style={lowerTabStyles}
                    />
                    <Tab
                      value="/team-safe"
                      label={
                        <>
                          <span id="team-safe-label">Team Safe</span>
                          <DownIcon
                            style={{
                              ...downCaretStyle,
                              ...lowerNavDownCaretStyle,
                            }}
                          />
                        </>
                      }
                      iconPosition="start"
                      icon={<PersonIcon sx={tabIconStyle} />}
                      style={lowerTabStyles}
                    />
                    <Tab
                      value="/resident-safe"
                      label={
                        <>
                          <span id="resident-safe-label">Resident Safe</span>
                          <DownIcon
                            style={{
                              ...downCaretStyle,
                              ...lowerNavDownCaretStyle,
                            }}
                          />
                        </>
                      }
                      iconPosition="start"
                      icon={<GroupsIcon sx={tabIconStyle} />}
                      style={lowerTabStyles}
                    />
                    <Tab
                      value="/asset-safe"
                      label={
                        <>
                          <span id="asset-safe-label">Asset Safe</span>
                          <DownIcon
                            style={{
                              ...downCaretStyle,
                              ...lowerNavDownCaretStyle,
                            }}
                          />
                        </>
                      }
                      iconPosition="start"
                      icon={<CubeIcon sx={tabIconStyle} />}
                      style={lowerTabStyles}
                    />
                    <Tab
                      value="/reports"
                      label="Reports"
                      iconPosition="start"
                      icon={<DocumentIcon sx={tabIconStyle} />}
                      style={{ ...lowerTabStyles, ...lastLowerTabStyle }}
                    />
                  </Tabs>
                </Box>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 0,
                /* width: { sm: `calc(100% - ${drawerWidth}px)` }*/
                // mt: "120px",
              }}
            >
              <Routes>
                <Route path="/" element={<HomeTemplate />} />
                <Route
                  path="/infection-safe/summary"
                  element={<InfectionControlSummary />}
                />
                <Route
                  path="/infection-safe/consequences"
                  element={<InfectionControlConsequences />}
                />
                <Route path="cases" element={<IncidentsListTab />} />
                <Route
                  path="case/:incidentId/detail"
                  element={<CaseDetail />}
                />
                <Route path="map" element={<LiveMap />} />
                <Route path="new-incident" element={<NewIncident />} />
              </Routes>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default withLDConsumer()(withAuthenticator(CarehomeMainContainer));
