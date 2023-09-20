import React, { useState } from "react";
import CustomForm from "../../components/CustomForm/CustomForm";
import { Paper, Grid, Typography } from "@mui/material";
import IncidentsListTab from "../IncidentsListTab/IncidentsListTab";
import Cases from "../Cases/Cases";
import PossibleCasesAndContaminations from "../PossibleCasesAndContaminations/PossibleCasesAndContaminations";
import MapTab from "../MapTab/MapTab";
import { tabContentStyle } from "../styles/styles";
function CarehomeInfectionSafe() {
  const [showMap, setShowMap] = useState(true);

  const toggleShowMap = (evt, newValue) => {
    setShowMap(newValue);
  };

  return (
    <div style={{ padding: "70px 40px" }}>
      <Typography
        sx={{ margin: "48px 0px 25px", fontSize: "20px", fontWeight: 700 }}
        color="primary"
        variant="h4"
        component="h4"
      >
        Overview
      </Typography>

      <Grid container spacing={2} style={{ marginLeft: 0 }}>
        {" "}
        <Grid item xs={12} md={6} sx={{ height: "100%" }}>
          <Typography
            sx={{ margin: "48px 0px 25px", fontSize: "20px", fontWeight: 700 }}
            color="primary"
            variant="h4"
            component="h4"
          >
            Incidents Overview
          </Typography>
          <Paper style={tabContentStyle}></Paper>
        </Grid>
        <Grid item xs={12} md={6} sx={{ height: "100%" }}>
          <Typography
            sx={{ margin: "48px 0px 25px", fontSize: "20px", fontWeight: 700 }}
            color="primary"
            variant="h4"
            component="h4"
          >
            Confirmed cases top pathogens
          </Typography>

          <Paper style={tabContentStyle}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CarehomeInfectionSafe;
