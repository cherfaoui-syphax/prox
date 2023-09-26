import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MapTab from "./MapTab";
import "../style.css";
import Checkbox from '@mui/material/Checkbox';
import CircleCheckedFilled from '@mui/icons-material/CheckCircle';
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const buttonStyle = {
    padding: "9px 18px 9px 18px",
    margin: "auto",
    height: 38,
    width: "70%",
    display : "block"
  };

  const buttonTextStyle = {
    marginBottom: 1.5,
    color: "white",
    textDecoration: "underline",
    fontSize: 12,
    fontFamily: "Open Sans",
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
    paddingRight: "20px",
  };
  
  const searchWrapperButtonStyle = {
    color: "#8f9ab5",
    padding: 0,
  };
  
  const searchWrapperButtonContainerStyle = {
    position: "absolute",
    left: 19,
    top: 7,
    padding: 0,
  };

const radioLabelStyle = {
    fontSize : "14px" ,
    fontWeight : "bold" ,
    color: "#414254" ,


}

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
};

const goBackStyle = {
    color: "#8f9ab5",
    fontSize: 14,
    marginBottom: 1.5,
    display: "inline-flex",
    alignItems: "center",
  };
  



export default function LocateTeamMember() {


  return (
    <div>
      <Box style={containerStyle}>
          <Typography sx={goBackStyle}>
            {formattedDate}
          </Typography>
        <br></br>
        <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", color: "rgb(43 , 52 ,83)" , marginBottom: "29px" }}
        >
              Locate Team Member
        </Typography>



        


        <Grid container >
            <Grid item xs = {2.5}>
            <Card sx={{ width:"90%" }}>
                <CardContent>
                    <div className="left-card-title">Search Team Member</div>
                    <div class="search-wrapper" style={searchWrapperStyle}>

                    <input
                        type="text"
                        style={searchWrapperInputStyle}
                    />
                    <button style={searchWrapperButtonContainerStyle}>
                        <SearchRoundedIcon sx={searchWrapperButtonStyle} />
                    </button>
                            
                    </div>
                    <div className="horizontal-line"></div>


                    {Array.from({ length: 4 }, (_, index) => index).map(
                        (number) => (<>
                            
                                
                            <div style={{paddingTop : "24px"}}>
                                <Checkbox
                                    icon={<CircleUnchecked  />}
                                    checkedIcon={<CircleCheckedFilled />}
                                    sx={{       
                                        "& .MuiSvgIcon-root" : {color : "#84D95B" , fontSize:"28px"  } , 
                                    }}
                                />
                                <label for="name" style={radioLabelStyle}>Wael F.</label>
                            </div>

                        </>) ) }


                    <div className="horizontal-line"></div>

                    <button className="view-map-button" style={buttonStyle}>
                        <Typography sx={buttonTextStyle}>Search Now</Typography>
                    </button>

  
                </CardContent>
              </Card>

            </Grid>
            <Grid item xs = { 9.5 } >
                <div style={{
                height : "80%",
                width : "100%",
                }} >
                <MapTab></MapTab>

                </div>
                </Grid>
        </Grid>
        

      </Box>

     
    </div>
  );
}
