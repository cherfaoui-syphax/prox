import React, { useState } from "react";
import HomeTemplate from "../../components/HomeTemplate/HomeTemplate";
import LiveMap from "../../components/LiveMap/LiveMap";
import IncidentsListTab from "../../components/IncidentsListTab/IncidentsListTab";
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
  Notifications as NotificationsIcon
  } from '@mui/icons-material';
// import { Authenticator } from '@aws-amplify/ui-react';
import { Storage } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import InputBase from "@mui/material/InputBase";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import dummyMetadata from "../MapTab/dummy_metadata.json";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import NewIncident from "../NewIncident/NewIncident";
import { styled, alpha } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CaseDetail from "../CaseDetail/CaseDetail";
import MapTab from "../MapTab/MapTab";
import { withLDConsumer, useFlags } from 'launchdarkly-react-client-sdk';

const drawerWidth = 240;

function CarehomeMainContainer({ flags, ldClient, user, signOut }) {
  // const flags = useFlags();
  if (ldClient) {
    ldClient.identify({
      "kind": "user",
      "key": user.attributes.email,
      "name": user.attributes.email,
    });
  }

  console.log(flags);
  const navigate = useNavigate();
  const location = useLocation();
  const [logoUrl, setLogoUrl] = useState("https://proxximosamplifybucket133936-expstage.s3.eu-west-2.amazonaws.com/sunburst_care_services.png");
  const [middleNavbarImage, setMiddleNavbarImage] = useState("https://proxximosamplifybucket133936-expstage.s3.eu-west-2.amazonaws.com/proxximos_safer_care.png");
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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    border: "1px solid #e1e1e1",
    borderRadius: "5px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const tabStyles = {
    color: "#fff",
    display: "flex",
  };

  const buttonStyle = {
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 30,
    padding: "5px 25px",
    color: "#1C54C1",
    fontSize: 13,
  };

  const plusIconStyle = {
    fontSize: 23,
    lineHeight: 1,
    fontWeight: 100,
    margin: "-4px 0px 0px 7px",
  };

  const infoButtonStyle = {
    color: theme.palette.primary,
  };

  const topNavIcon = {
    fontSize: "20px",
    color: "#fff",
    padding: "0px",
    minWidth: "39px",
    margin: "0px",
  };

  const appBarStyles = {
      //width: { sm: `calc(100% - ${drawerWidth}px)` },
      mt: { sm: `127px` },
      background: "#fff",
      color: "#666",
      boxShadow: "0px 1px 10px 0px rgb(0 0 0 / 15%)",
      borderBottom: "1px solid #e3e3e3",
      display: "flex",
      alignContent: "center",
      justifyContent: "center"
  }

  const toolbarStyle = {
    height: 58,
    borderTopWidth: 1,
    borderTopColor: "#F2F2F2",
    borderRightStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
    borderBottomStyle: "solid",
  }

  const firstLowerTabStyle = {
    borderLeftWidth: 1,
    borderLeftColor: "#F2F2F2",
    borderLeftStyle: "solid",
  }

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
    paddingRight: 35,
    paddingLeft: 35,
    minWidth: 0,
    minHeight: 0,
    paddingTop: 0,
    paddingBottom: 0,
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
    padding: '6px',
    marginRight: '13px !important',
  }

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

  // const getLogo = async () => {
  //   const logo = await Storage.get("logo_transparent.png", { level: "public" });

  //   setLogoUrl(logo);
  // };

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

  const drawer = (
    <div className="drawer">
      <div class="logocontainer">
      {middleNavbarImage ? (
                <a
                  href="https://proxximos.com"
                  style={{ border: 0, outline: 0 }}
                >
                  <img src={middleNavbarImage} style={{ height: "62px", width: "266px" }} alt="Proxximos" />

                </a>
              ) : (
                <></>
              )}

      </div>
      <div class="center-navbar-image">
            {logoUrl ? (
                <a
                  href="https://proxximos.com"
                  style={{ border: 0, outline: 0 }}
                >
                  <img src={logoUrl} style={{ height: "90px", width: "308px" }} alt="Sunburst Care Services" />

                </a>
              ) : (
                <></>
              )}
      </div>
      <div class="navbar-right">
              <QuestionMarkIcon />
              <SarchIcon />
              <NotificationsIcon />
              <Avatar alt="My Profile" src={`https://proxximosamplifybucket133936-expstage.s3.eu-west-2.amazonaws.com/users/${encodeURIComponent(user.attributes.email).replace('%20','+')}/avatar.png`} />
      </div>

      {/* <Toolbar /> */}
      <List>
        {[
          { text: "Home", link: "/" },
          { text: "Cases", link: "cases" },
          { text: "Live map", link: "map" },
          { text: "Alerts", link: "alerts" },
          { text: "Mitigations", link: "mitigations" },
          { text: "Users", link: "users" },
          { text: "Register device", link: "register-device" },
          { text: "Report an illness", link: "report-illness" },
          { text: "Sign out" },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            {item.text === "Sign out" ? (
              <ListItemButton
                onClick={signOut}
                sx={[
                  activeNavLink === item.text
                    ? {
                        background: "rgba(0, 0, 0, 0.19)",
                      }
                    : {},
                  {
                    "&:hover": {
                      background: "rgba(193, 193, 194, 0.1)",
                    },
                  },
                ]}
              >
                {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                <ListItemText
                  primary={
                    <>
                      <span style={{ paddingRight: "20px" }}>
                        <strong>{item.text}</strong>
                      </span>
                      {item.text === "Alerts" && (
                        <Badge
                          badgeContent={<strong>{alertsQty}</strong>}
                          color="error"
                        />
                      )}
                      {item.text === "Mitigations" && (
                        <Badge
                          badgeContent={<strong>{mitigationsQty}</strong>}
                          color="error"
                        />
                      )}
                    </>
                  }
                  primaryTypographyProps={sidebarTextStyles}
                />
              </ListItemButton>
            ) : (
              <ListItemButton
                onClick={() => {
                  navigate(item.link);
                }}
                sx={[
                  activeNavLink === item.text
                    ? {
                        background: "rgba(0, 0, 0, 0.19)",
                      }
                    : {},
                  {
                    "&:hover": {
                      background: "rgba(193, 193, 194, 0.1)",
                    },
                  },
                ]}
              >
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText
                  primary={
                    <>
                      <span style={{ paddingRight: "20px" }}>{item.text}</span>
                      {item.text === "Alerts" && (
                        <Badge
                          badgeContent={<strong>{alertsQty}</strong>}
                          color="error"
                        />
                      )}
                      {item.text === "Mitigations" && (
                        <Badge
                          badgeContent={<strong>{mitigationsQty}</strong>}
                          color="error"
                        />
                      )}
                    </>
                  }
                  primaryTypographyProps={sidebarTextStyles}
                />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ display: "flex", position: "absolute", zIndex: 3, width: "100%" }}
      >
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            //width: { sm: `calc(100% - ${drawerWidth}px)` },
            // ml: { sm: `${drawerWidth}px` },
            // background: '#283555',
            background: "#1C54C1/",
            // background: "green",
            color: "#fff",
            boxShadow: "none",
            zIndex: "1200",
          }}
        >
          <Toolbar sx={{
            background: "#FFF",
            display: "inline-flex",
            justifyContent: "space-between",
            paddingTop: "15px",
            paddingBottom: "15px"
          }}>
            {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' }, color: '#666666'}}
        >
          <MenuIcon />
        </IconButton> */}

            <div class="logocontainer">
            {middleNavbarImage ? (
                <a
                  href="https://proxximos.com"
                  style={{ border: 0, outline: 0 }}
                >
                  <img src={middleNavbarImage} style={{ height: "62px", width: "266px" }} alt="Proxximos" />

                </a>
              ) : (
                <></>
              )}
            </div>

            <div class="center-navbar-image">
            {logoUrl ? (
                <a
                  href="https://proxximos.com"
                  style={{ border: 0, outline: 0 }}
                >
                  <img src={logoUrl} style={{ height: "90px", width: "308px" }} alt="Sunburst Care Services" />

                </a>
              ) : (
                <></>
              )}
            </div>

            <div style={topNavBarRight}>
                <Button
                  sx={{ ...infoButtonStyle, ...buttonStyle }}
                  variant="contained"
                  color="info"
                  onClick={openIncidentDialog}
                >
                  Add new case +
                </Button>
                <Button
                  sx={{ minWidth: "60px", width: "50px" }}
                  variant="text"
                  color="primary"
                >
                  <Avatar>DM</Avatar>
                </Button>
              </div>

            {/* <Box className="tabbox" sx={tabBoxStyle}>
              <div
                style={{ display: "flex" }}
                onMouseEnter={(evt) => {
                  setWardsHovered(true);
                }}
                onMouseLeave={(evt) => {
                  setWardsHovered(false);
                }}
              >
                <Tabs
                  style={tabContainerStyle}
                  value={currentTab}
                  onChange={() => {}}
                  aria-label="Navbar"
                  indicatorColor="primary"
                  textColor="primary"
                >
                </Tabs>
              </div>
              
            </Box> */}
          </Toolbar>
        </AppBar>
        {/* <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, ...sidebarStyles },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: sidebarStyles
        }}
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box> */}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AppBar
              position="fixed"
              sx={appBarStyles}
            >
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
                    <Tab value="/" label="Home" icon={<HomeIcon sx={tabIconStyle} />} iconPosition="start" style={{...firstLowerTabStyle, ...lowerTabStyles}} />
                    <Tab value="/infection-safe" label="Infection Safe" iconPosition="start" icon={<ExclamationMarkIcon sx={tabIconStyle} />} style={lowerTabStyles} />
                    <Tab value="/team-safe" label="Team Safe" iconPosition="start"  icon={<PersonIcon sx={tabIconStyle} />} style={lowerTabStyles} />
                    <Tab value="/resident-safe" label="Resident Safe" iconPosition="start"  icon={<GroupsIcon sx={tabIconStyle} />} style={lowerTabStyles} />
                    <Tab value="/asset-safe" label="Asset Safe" iconPosition="start"  icon={<CubeIcon sx={tabIconStyle} />} style={lowerTabStyles} />
                    <Tab value="/reports" label="Reports" iconPosition="start"  icon={<DocumentIcon sx={tabIconStyle} />} style={lowerTabStyles} />

                    {/* <Tab value="/cases" label="Cases" icon={} style={lowerTabStyles} />
                    <Tab
                      value="/reports"
                      label="Reports"
                      style={lowerTabStyles}
                    />
                    <Tab value="/map" label="Map" style={lowerTabStyles} /> */}
                  </Tabs>

                  {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
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
              {/* <Toolbar /> */}

              {/* {location && location.pathname !== "/new-infections" && (
            <div style={{justifyContent: 'flex-end', display: 'flex', marginBottom: '40px'}}>
              <Button sx={{fontSize: '20px'}} variant="contained" color="error" onClick={openIncidentDialog}>
                +
              </Button>
            </div>
          )} */}

              <Routes>
                <Route path="/" element={<HomeTemplate />} />
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
