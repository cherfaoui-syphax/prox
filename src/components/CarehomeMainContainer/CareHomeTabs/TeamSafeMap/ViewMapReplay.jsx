import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from '@mui/icons-material/Close';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardContent } from '@mui/material';
import MapTab from "./MapTab";
import VideoControlUi from "./VideoControlUi";
import PersonIcon from '@mui/icons-material/Person';

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

const topDateStyle = {
  color: "#8f9ab5",
  fontSize: 14,
  marginBottom: 1.5,
};

const mainContainerNavStyle = {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    marginBottom: 20,
    flexDirection: "row-reverse",
  };

const titleStyle = {
  color: "#283555",
  fontSize: 23,
  fontWeight: 700,
  marginLeft : "20px",
  marginBottom : "16px"
};

const buttonTextStyle = {
  marginBottom: 1.5,
  color: "white",
  textDecoration: "underline",
  fontWeight: 600,
  fontSize: 12,
  fontFamily: "Open Sans",
};

const buttonIconStyle = {
  fontSize: 20,
  marginLeft: "-9px",
  marginRight: "6px",
};

const buttonStyle = {
  padding: "9px 18px 9px 18px",
  margin: "0px 11px 0px 11px",
  height: 38,
};

const buttonGroupContainerStyle = {
  display: "inline-flex",
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
  padding: 0,
};

const searchWrapperButtonStyle = {
  color: "#8f9ab5",
  padding: 0,
};

const searchWrapperButtonContainerStyle = {
  position: "absolute",
  right: 19,
  top: 7,
  padding: 0,
};

const downloadLinkText = {
  marginBottom: 1.5,
  color: "white",
  textDecoration: "underline",
  fontWeight: 600,
  display: "inline-block",
  fontSize: 12,
};

const downloadIconStyle = {
  color: "white",
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
  backgroundColor: "#283555",
  marginTop: 2,
};

const downloadContainerStyle = {
  display: "inline-flex",
  alignItems: "center",
  position: "relative",
};

const containerStyle = {
    width: "90%",
    margin: "130px auto 0",
  };

  
const modalStyle = {
  position: 'absolute',
  top: '10%',
  left: '10%',
  width: "80%",
  height : "fit-content",
  paddingBottom : "20px",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  borderRadius: "21px",
  border : "none" 
};

const zoomIconStyle = {
  color: "white",
  fontSize: 31,
  background: "transparent",
  margin: 0,
  padding: 0,
};

const zoomIconContainerStyle = {
  position: "relative",
  width: 50,
  height: 50,
  padding: 10,
  backgroundColor: "#283555",
  marginTop: 25,
  marginRight: 27,
  display : "block",
  border : "none ",
  cursor : "pointer",
};

const zoomPositionStyle = {
  position : "absolute",
  right : "0px" , 
  top : "200px" ,
  display : "block",
  zIndex : 5 ,
} ;



export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Box style={containerStyle}> 
      <Button style= { { marginTop : 50 }} onClick={handleOpen}>Open modal</Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>


            <div style={mainContainerNavStyle}>
                <CloseIcon
                  onClick={handleClose}
                  style={{
                    fontSize: 41 ,
                    color : "#8F9AB5",
                    cursor : "pointer",
                }}></CloseIcon>
                <button className="add-new-infection-button" style={buttonStyle}>
                    <Typography sx={buttonTextStyle}>
                        See Next Contact
                    </Typography>
                </button>
                <div
                    className="button-group-container"
                    style={buttonGroupContainerStyle}
                >


                        <div 

                            style={{ display: "inline-flex"  ,
                            ...buttonStyle ,
                            padding : "8px 15px 0px 20px"}}  

                            className="view-map-button" 
                        >
                            <div style={{ ...downloadContainerStyle , color :"white" }}>
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
            </div>
            <Typography variant="h5" component="div" sx={titleStyle}>
                View Replay
            </Typography>
            <Grid container >
                <Grid item xs = {3}>
                    <Card sx={{ backgroundColor : "#EFF4FF" , width :"90%"}}>
                        <CardContent>
                        <div className="left-card-title">Name of Case</div>
                        <div style={{
                          display : "flex",
                          justifyContent : "space-between",
                          alignItems : "center"
                        }}>
                          <Typography variant="body2" sx={caseNameStyle}>
                              Elsa peter
                          </Typography>
                            <PersonIcon style={{
                              color :"white",
                              padding : "5px",
                              backgroundColor : "#E326DC",
                              borderRadius : "500px",
                              fontSize : "30px"
                            }}></PersonIcon>
                          
                          </div>

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
                        </CardContent>
                    </Card>


                    <Card sx={{ backgroundColor : "#EFF4FF" , width :"90%" , marginTop : "20px"}}>
                        <CardContent>
                          <div className="left-card-title">Name of contact</div>
                          <div style={{
                            display : "flex",
                            justifyContent : "space-between",
                            alignItems : "center"
                          }}>

                            <Typography variant="body2" sx={caseNameStyle}>
                                Peter whawell
                            </Typography>
                              <PersonIcon style={{
                                color :"white",
                                padding : "5px",
                                backgroundColor : "#FF892D",
                                borderRadius : "500px",
                                fontSize : "30px"
                              }}></PersonIcon>
                            
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

                            <div className="left-card-title">Date & Time</div>

                            <div className="left-card-content">Jun 30, 2021 10:00 AM</div>

                        </CardContent>
                    </Card>

                </Grid>

                <Grid item xs = {9}>

                    <div style={{
                        width : "100%",
                        height : "360px",
                        overflow : "hidden",
                        backgroundColor : "#EFF4FF",
                        borderRadius: "8px"
                    }} >
                        <MapTab
                          bgColor='#EFF4FF'
                          zoomIconStyle={zoomIconStyle}
                          zoomIconContainerStyle={zoomIconContainerStyle}
                          zoomPositionStyle={zoomPositionStyle}
                        ></MapTab>

                    </div>
                    <Card sx={{ backgroundColor : "#EFF4FF" , width :"100%" , marginTop : "20px"}}>
                      <CardContent>
                        <VideoControlUi></VideoControlUi>
                      </CardContent>
                    </Card>

                    
                </Grid>
            </Grid>

        </Box>
      </Modal>
    </div>
  );
}
