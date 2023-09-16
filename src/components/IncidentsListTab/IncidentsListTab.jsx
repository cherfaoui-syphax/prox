import React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import dummyMetadata from "../MapTab/dummy_metadata.json";
import PersonIcon from "@mui/icons-material/Person";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { iconStyle } from "./styles";
import PlaceIcon from "@mui/icons-material/Place";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocalPrintshopIcon from "./PrinterLogo";
import moment from "moment";

function MapTab() {
  const [rows, setRows] = React.useState([]);
  const [queryValue, setQueryValue] = React.useState();
  const [rowsLoaded, setRowsLoaded] = React.useState(false);
  const [resultsFromDate, setResultsFromDate] = React.useState("all");
  const [data, setData] = React.useState();

  const fetchData = async () => {
    const resp = await fetch(
      `${process.env.REACT_APP_API_URL}/incidents?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTYwMDk3MzUxMywiZXhwIjoxNjAxNTc4MzEzfQ.OymFrLMMYgFAnYpveZPTgJVg6shCMhducqmZ21oYzY8&ward=2`
    );
    const { data } = await resp.json();
    setData(data);
  };

  React.useEffect(() => {
    if (!data) {
      fetchData();
    }
  });

  const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      "&.Mui-expanded": {
        fontWeight: theme.typography.fontWeightRegular,
      },
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
      "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        color: "var(--tree-view-color)",
      },
      [`& .${treeItemClasses.label}`]: {
        fontWeight: "inherit",
        color: "inherit",
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 0,
      [`& .${treeItemClasses.content}`]: {
        paddingLeft: theme.spacing(2),
      },
    },
  }));

  function StyledTreeItem(props) {
    const {
      bgColor,
      color,
      labelIcon: LabelIcon,
      labelInfo,
      labelText,
      ...other
    } = props;

    return (
      <StyledTreeItemRoot
        label={
          <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography
              variant="body2"
              sx={{ fontWeight: "inherit", flexGrow: 1 }}
            >
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        }
        style={{
          "--tree-view-color": color,
          "--tree-view-bg-color": bgColor,
        }}
        {...other}
      />
    );
  }

  StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
  };

  const handleDateFilterChange = (evt) => {
    setResultsFromDate(evt.target.value);
  };

  const fetchSearchResults = async () => {
    const query = queryValue ? `&query=${queryValue}` : "";
    const todaysDate = moment(new Date());
    let dateFilter;

    if (resultsFromDate === "all") {
      dateFilter = "";
    }

    if (resultsFromDate === "1 day") {
      dateFilter = `&resultsFrom=${todaysDate.subtract(1, "day").valueOf()}`;
    }

    if (resultsFromDate === "1 week") {
      dateFilter = `&resultsFrom=${todaysDate.subtract(1, "week").valueOf()}`;
    }

    if (resultsFromDate === "1 month") {
      dateFilter = `&resultsFrom=${todaysDate.subtract(1, "month").valueOf()}`;
    }

    const resp = await fetch(
      `${process.env.REACT_APP_API_URL}/incidents?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTYwMDk3MzUxMywiZXhwIjoxNjAxNTc4MzEzfQ.OymFrLMMYgFAnYpveZPTgJVg6shCMhducqmZ21oYzY8&ward=2${query}${dateFilter}`
    );
    const { data } = await resp.json();
    setData(data);
  };

  React.useEffect(() => {
    if (!rowsLoaded) {
      let rowEntries = [];
      Object.keys(dummyMetadata).map((entry, index) => {
        if (
          dummyMetadata[index].type === "infected" ||
          dummyMetadata[index].type === "room"
        ) {
          rowEntries.push({ id: String(index), ...dummyMetadata[index] });
        }
        return entry;
      });
      setRows(rowEntries);
      setRowsLoaded(true);
    }
  });

  React.useEffect(() => {
    fetchSearchResults();
  }, [queryValue]);

  React.useEffect(() => {
    fetchSearchResults();
  }, [resultsFromDate]);

  return (
    <div
      style={{
        position: "relative",
        marginTop: "130px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div
            className="search-field box-shadow rounded-sm"
            style={{ marginLeft: 10, marginBottom: 30 }}
          >
            <div className="search-icon-wrapper">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search by name, NHS ID or pathogen"
              value={queryValue}
              onChange={(evt) => {
                setQueryValue(evt.target.value);
              }}
              style={{
                outline: "none",
                height: "100%",
                width: "100%",
                border: "none",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div style={{ marginTop: 10, marginLeft: 20 }}>
            <Select
              sx={{ height: "30px" }}
              value={resultsFromDate}
              onChange={handleDateFilterChange}
            >
              <MenuItem value={"all"}>All cases</MenuItem>
              <MenuItem value={"1 day"}>Past 24 hours</MenuItem>
              <MenuItem value={"1 week"}>Past 7 days</MenuItem>
              <MenuItem value={"1 month"}>Past month</MenuItem>
            </Select>
          </div>
        </Grid>
      </Grid>
      <div className="capitalized incident-content rounded-sm with-margins padded subdued-text thin-header">
        <Grid container spacing={2} xs={10} md={10}>
          <Grid item xs={12} md={2}>
            Date
          </Grid>
          <Grid item xs={12} md={3}>
            Name
          </Grid>
          <Grid item xs={12} md={1}>
            Role
          </Grid>
          <Grid item xs={12} md={1}>
            Pathogen
          </Grid>
          <Grid item xs={12} md={5}>
            Contacts | contaminations
          </Grid>
        </Grid>
      </div>
      {data?.map((incident, index) => (
        <Grid container>
          <Grid item xs={10} md={10}>
            <div className="incident-box">
              <div className="incident-content rounded-sm with-margins padded box-shadow box-shadow-white">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={2}>
                    <div className="date">
                      {new Date(incident.date).toLocaleDateString("en-GB")}
                    </div>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <div className="name blue bold">
                      {incident.index.name}
                      <br />
                      {incident.nhs_id ? `(${incident.nhs_id})` : ""}
                    </div>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <div className="role">{incident.role}</div>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <div className="pathogen">{incident.pathogen}</div>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <div className="exposures">
                      {
                        <PersonIcon style={{ color: "black", ...iconStyle }}>
                          {" "}
                        </PersonIcon>
                      }
                      {incident &&
                        incident.exposures &&
                        incident.exposures.filter(
                          (exposure) => exposure.type === "person"
                        ).length}{" "}
                      <div
                        className="subdued-text"
                        style={{
                          width: 30,
                          textAlign: "center",
                          display: "inline-block",
                        }}
                      >
                        |
                      </div>
                      {
                        <PlaceIcon
                          style={{ color: "black", ...iconStyle }}
                        ></PlaceIcon>
                      }{" "}
                      {incident &&
                        incident.exposures &&
                        incident.exposures.filter(
                          (exposure) => exposure.type === "room"
                        ).length}
                    </div>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <a
                      className="name blue see-contacts bold"
                      href={`/case/${incident.incident_id}/detail`}
                    >
                      See contacts & contaminations{" "}
                      <KeyboardArrowRightIcon
                        style={iconStyle}
                      ></KeyboardArrowRightIcon>
                    </a>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} md={2}>
            <div className="incident-box">
              <div className="incident-content rounded-sm with-margins padded ">
                <a
                  className="printer name blue bold"
                  href={`/case/${incident.id}/print`}
                >
                  <LocalPrintshopIcon
                    style={{ ...iconStyle, width: "1.5em", height: "1.5em" }}
                  ></LocalPrintshopIcon>{" "}
                  Print
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default MapTab;
