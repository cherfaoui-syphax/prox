import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Radio from '@mui/material/Radio';

import Checkbox from '@mui/material/Checkbox';
import "./style.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



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

const inputLabelStyle = {
    color : "#283555" , 
    fontSize : "12px" ,
    marginBottom: "4px"
};

const inputStyle = {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius : "8px",
    fontSize : "14px" ,
    fontWeight : "bold" ,
    padding : "12px 15px 18px 13px" ,
    width : "82%" , 
    borderWidth : "0px" ,
    color: "#414254" 
};

const radioLabelStyle = {
    fontSize : "14px" ,
    fontWeight : "bold" ,
    color: "#414254" 

}

export default function AddNewCase() {

    const [radioValue, setRadioValue] = React.useState('a');

    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
    };

  return (
    <div>
      <Box style={containerStyle}>
          <Typography sx={goBackStyle}>
            <ArrowBackIosNewIcon sx={goBackArrowStyle} />
            Go back
          </Typography>


        <br></br>
        <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", color: "rgb(43 , 52 ,83)" , marginBottom: "29px" }}
        >
              Add New Infection Case
        </Typography>
        <Grid container>
            <Grid item xs = {3.8} > 
                <label for="name" style={inputLabelStyle}>Name of new infected case</label>
                <br />
                <input type="text" id="name" name="name" style={inputStyle} />
            </Grid>
            <Grid item xs = {3.8} > 
                <label for="status" style={inputLabelStyle}>Status</label>
                <br />
                <select id="status" name="status" style={inputStyle}>
                    <option value="Resident">Resident</option>
                    <option value="Doctor">Doctor</option>
                </select>
            </Grid>
            <Grid item xs = {1.8}>
            <label for="date" style={inputLabelStyle}>Date</label>
            <br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        
                      sx={{
                        maxWidth : "80%" ,
                        backgroundColor : "white" , 
                        borderRadius : "8px" ,
                        "& fieldset": { border: 'none', 
                        boxShadow : "none", 
                        margin : 0 ,

                     },
                        "& .MuiSvgIcon-root" : {color : "#8F9AB5"} , 
                        "& input" : {color : "#A2B0D1" , 
                        fontSize : "14px" ,}
                      }}
                    
                    
                    />
              
            </LocalizationProvider>
            </Grid>
            <Grid item xs = {1.8} >
                <label for="time" style={inputLabelStyle}>Time of onset</label>
                <br />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker 
                        sx={{
                            maxWidth : "80%" ,
                            backgroundColor : "white" , 
                            borderRadius : "8px" ,
                            "& fieldset": { border: 'none', 
                            boxShadow : "none", 
                            margin : 0 ,
    
                         },
                            "& .MuiSvgIcon-root" : {color : "#8F9AB5"} , 
                            "& input" : {color : "#A2B0D1" , 
                            fontSize : "14px" ,}
                          }}
                        clearable
                        ampm={false} />
                </LocalizationProvider>
            </Grid>
        </Grid>

        <div className="horizontal-line" style={{margin:"28px 0px 28px 0px"}}></div>

        <Grid container>
            <Grid item xs = {3.8} > 
                <label for="infection" style={inputLabelStyle}>Type of infection</label>
                <br />
                <select id="infection" name="infection" style={inputStyle}>
                    <option value="skin">Skin </option>
                    <option value="gastrointestinal">Gastrointestinal</option>

                </select>
            </Grid>
            <Grid item xs = {3.8} > 
                <label for="pathogen" style={inputLabelStyle}>Pathogen</label>
                <br />
                <select id="pathogen" name="pathogen" style={inputStyle}>
                    <option value="norovirus">Norovirus</option>
                    <option value="name2">Name 2</option>

                </select>
            </Grid>
            <Grid item xs = {1.8}>
               <div style={{paddingTop : "24px"}}>
                    <Radio
                        checked={radioValue === 'a'}
                        onChange={handleRadioChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                        sx={{
                            "& .MuiSvgIcon-root" : {
                                backgroundColor :  radioValue === 'a' ?  "#01C1D3" : "#EAEAEA"    ,
                                borderRadius :  "500px" ,
                                color : radioValue === 'a' ? "#FFFFFF" : "rgba(0 , 0 , 0 , 0 )"  , 
                            } 
                        }}
                    />
                    <label for="name" style={radioLabelStyle}>Suspected</label>
                </div>
            </Grid>
            <Grid item xs = {1.8}>
                <div  style={{paddingTop : "24px"}} >
                    <Radio
                        checked={radioValue === 'b'}
                        onChange={handleRadioChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'B' }}
                        sx={{
                            "& .MuiSvgIcon-root" : {
                                backgroundColor :  radioValue === 'b' ?  "#01C1D3" : "#EAEAEA"    ,
                                borderRadius :  "500px" ,
                                color : radioValue === 'b' ? "#FFFFFF" : "rgba(0 , 0 , 0 , 0 )"  , 
                                
                            } 
                        }}

                    />
                    <label for="name" style={radioLabelStyle}>Confirmed</label>
                </div>

            </Grid>

            
        </Grid>

        <div className="horizontal-line" style={{margin:"28px 0px 28px 0px"}}></div>
        <Grid container>
            <Grid item xs = {3.8} > 
                <label for="status" style={inputLabelStyle}>Action taken </label>
                <br />
                <select id="status" name="status" style={inputStyle}>
                    <option value="Resident">Enhanced use of PPE</option>
                    <option value="Doctor">Clean room</option>
                </select>
            </Grid>
            <Grid item xs = {3.8} > 

                <div style={{paddingTop : "24px"}}>
                    <Checkbox {...label} 
                        sx={{
                            
                            "& .MuiSvgIcon-root" : {color : "#84D95B" , fontSize:"28px"  }
                        }}
                    />
                    <label for="name" style={radioLabelStyle}>Action taken</label>
                </div>
            
            </Grid>
        </Grid>

        <div style={{
            width: "100%",
            marginTop: "97px",
            marginBottom: "97px",
        }}>
            <button style={{
                background: "#01C1D3 0% 0% no-repeat padding-box",
                borderRadius : "8px",
                fontSize : "13px" ,
                padding : "13px 44px 18px 44px" ,
                borderWidth : "0px" ,
                color: "white" ,
                display : "block",
                margin : "auto"
            }}>
                Save New Case And Show Infection Control Consequences

            </button>

        </div>


        

      </Box>

     
    </div>
  );
}
