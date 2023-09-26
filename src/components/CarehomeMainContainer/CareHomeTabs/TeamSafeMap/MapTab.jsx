import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BugIcon from "../../../BugIcon/BugIcon.jsx";
import KeyIcon from "../../../KeyIcon/KeyIcon";
import FloorplanSvg from "../../../FloorplanSvg/FloorplanSvg";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import dummyMetadata from "./dummy_metadata.json";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import SignalTowerIcon from "../../../SignalTowerIcon/SignalTowerIcon";
import RoomCleaningIcon from "../../../RoomCleaningIcon/RoomCleaningIcon";
import PersonIcon from "../../../PersonIcon/PersonIcon";
import DeadBatteryIcon from "../../../DeadBatteryIcon/DeadBatteryIcon.tsx";
import styles from "../../../../App.css";
// import Zoomable  from '../../Zoomable/Zoomable';
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PanZoom from "react-easy-panzoom";
import ZoomControllerUI from "./ControllerUI/ZoomControllerUI";
import PadControllerUI from "./ControllerUI/PadControllerUI";
import ResetControllerUI from "./ControllerUI/ResetControllerUI";
import RotationControllerUI from "./ControllerUI/RotationControllerUI";
import { color } from "./diseaseColor";

import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

const zoomIconStyle = {
  color: "#283555",
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
  backgroundColor: "#eaf0ff",
  marginTop: 25,
  marginRight: 27,
  display : "block",
  border : "none ",
  cursor : "pointer",
};




function MapTab() {
  //const [svgMap, setSvgMap] = React.useState();
  const panZoom = React.useRef();
  const [data, setData] = React.useState();
  const [markers, setMarkers] = React.useState();
  const svgRef = React.useRef();
  const [showUninfected, setShowUninfected] = React.useState(true);
  const [openTooltip, setOpenTooltip] = React.useState();
  const [positions, setPositions] = React.useState({});
  const closeTooltipRef = React.useRef();
  const [pathogenSelectionStates, setPathogenSelectionStates] = React.useState({
    "Staphylococcus Aureus": true,
    MRSA: true,
    "C.difficile": true,
    "Escherichia coli": true,
    "Klebsiella Spp": true,
    "Pseudomonas Aeruginosa": true,
  });

  const handleOpenTooltip = (id) => {
    if (openTooltip !== id) {
      setOpenTooltip(id);
    }
  };

  const HtmlTooltip = styled(({ className, id, ...props }) => {
    return (
      <Tooltip
        {...props}
        open={openTooltip === id}
        classes={{ popper: className }}
        TransitionProps={{ timeout: 0 }}
      />
    );
  })(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

  const updateMapPositions = () => {
    let newPositions = {};

    Object.keys(data).map((index) => {
      if (data[index].locations) {
        if (data[index].locations[0]) {
          newPositions = {
            ...newPositions,
            [index]: {
              x: data[index].locations[0].x,
              y: data[index].locations[0].y,
            },
          };
        } else if (data[index].nextSequence) {
          data[index].locations = [...data[index].nextSequence];
          const newCoords = data[index].nextSequence[0];
          data[index].nextSequence = [];

          if (newCoords) {
            newPositions = {
              ...newPositions,
              [index]: {
                x: newCoords.x,
                y: newCoords.y,
              },
            };
          }
        }
      }
    });

    setPositions(newPositions);
    // setMarkers(updatedMarkers);
  };

  const mapIcon = (index) => {
    const currentDate = new Date(
      new Date().toLocaleString("en", { timeZone: "Europe/London" })
    );
    const mapIconLastUpdatedDate = new Date(
      data[index].lastLocationTime
    ).getTime();
    if (currentDate - mapIconLastUpdatedDate > 30000) {
      return (
        <DeadBatteryIcon
          id={`deadbattery-${index}`}
          key={`deadbattery-${index}`}
          posX={data[index].x}
          posY={data[index].y}
          fill={"#000000"}
          style={{
            width: "60px",
            height: "64px",
          }}
        />
      );
    }
    if (dummyMetadata[index].type === "infected") {
      return (
        <>
          {pathogenSelectionStates[dummyMetadata[index].disease] ? (
            <BugIcon
              setOpenTooltip={(id) => handleOpenTooltip(id)}
              id={`bug-${index}`}
              key={`bug-${index}`}
              posX={data[index].x}
              posY={data[index].y}
              fill={color[dummyMetadata[index].disease]}
              style={{
                width: "110px",
                height: "110px",
              }}
            />
          ) : (
            <></>
          )}
        </>
      );
    }
    if (dummyMetadata[index].type === "uninfected" && showUninfected) {
      return (
        <PersonIcon
          setOpenTooltip={(id) => handleOpenTooltip(id)}
          id={`bug-${index}`}
          key={`bug-${index}`}
          posX={data[index].x}
          posY={data[index].y}
          style={{
            color: color["uninfected"],
            width: "110px",
            height: "110px",
          }}
        />
      );
    }

    if (dummyMetadata[index].type === "hub") {
      return (
        <SignalTowerIcon
          id={`bug-${index}`}
          key={`bug-${index}`}
          posX={data[index].x}
          posY={data[index].y}
          style={{ color: "green", width: "110px", height: "110px" }}
        />
      );
    }

    if (dummyMetadata[index].type === "key") {
      return (
        <KeyIcon
          id={`key-${index}`}
          key={`key-${index}`}
          posX={data[index].x}
          posY={data[index].y}
          style={{ width: "110px", height: "110px" }}
        />
      );
    }
    if (dummyMetadata[index].type === "room") {
      return (
        <RoomCleaningIcon
          id={`room-${index}`}
          key={`room-${index}`}
          posX={data[index].x}
          posY={data[index].y}
          style={{ color: "red", width: "110px", height: "110px" }}
        />
      );
    }
  };

  // const addBugsTracked = () => {
  //   // let mostRecent;
  //   const markersArray = [];
  //   let newPositions = {};

  //   setPositions(newPositions);

  //   setMarkers(markersArray);
  // }

  const fetchData = async () => {
    const rawData = await fetch(`${process.env.REACT_APP_RTLS_URL}/beacons`);

    const jsonData = await rawData.json();

    const newData = {};

    for (const row of jsonData) {
      const beaconId = row.id;
      newData[String(beaconId)] = row;
    }

    setData(newData);
  };

  React.useEffect(() => {
    if (!data) {
      fetchData();
    }
  });

  React.useEffect(() => {
    if (data) {
      setTimeout(fetchData, 2000);
    }
  }, [data]);

  const toggleUninfected = () => {
    setShowUninfected(!showUninfected);
  };

  function onZoomIn() {
    panZoom.current && panZoom.current.zoomIn(1);
  }

  function onZoomOut() {
    panZoom.current && panZoom.current.zoomOut(1);
  }

  function moveByRatio(x, y) {
    panZoom.current && panZoom.current.moveByRatio(x, y);
  }

  function center() {
    panZoom.current && panZoom.current.autoCenter();
  }

  function reset() {
    panZoom.current && panZoom.current.reset();
  }

  function rotateClockwise() {
    panZoom.current && panZoom.current.rotate((prevAngle) => prevAngle + 10);
  }

  function rotateCounterClockwise() {
    panZoom.current && panZoom.current.rotate((prevAngle) => prevAngle - 10);
  }

  return (
    <div style={{ display: "flex" }}>
      <div className="map-container" style={{backgroundColor:"white"}}>

        <div style={{
          position : "absolute",
          left : 30 , 
          top : 15 ,
          display : "block",
          zIndex : 5 ,
        }}>
          <button
                className="icon-container"
                style={zoomIconContainerStyle}
              >
                <ZoomInIcon
                  className="download-icon"
                  style={zoomIconStyle}
                  onClick={onZoomIn}
                />
          </button>
          <button
                className="icon-container"
                style={zoomIconContainerStyle}
              >
                <ZoomOutIcon
                  className="download-icon"
                  style={zoomIconStyle}
                  onClick={onZoomOut}

                />
          </button>
        </div>

        <div className="map-container-inner">
          <PanZoom ref={panZoom}>
            <div
              style={{
                position: "relative",
                transform: "scale(0.3)",
                left: "-150px",
                top: "-150px",
                marginTop: "200px",
                marginLeft: "300px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  // left: "-673px",
                  // top: "-400px",
                  transformOrigin: "0p 0px 0px",
                  // transform:
                  //   "transform: matrix(0.319005, 0, 0, 0.319005, 383.384, 8.17194)",
                }}
              >
                <FloorplanSvg
                  id={"floorplan"}
                  markers={markers}
                  reference={svgRef}
                  style={{ width: "2282px", height: "1518px" }}
                />
              </div>

              {data &&
                Object.keys(data).map((index) => {
                  return (
                    <>
                      {data[index] ? (
                        <div

                          style={{
                            position: "absolute",
                            left: data[index].x + "px",
                            top: data[index].y + "px",
                            transition: "all 2s linear",
                          }}
                        >
                          <HtmlTooltip
                            id={`bug-${String(index)}`}
                            leaveDelay={7000}
                            title={
                              <>
                                <div>
                                  {dummyMetadata[String(index)] &&
                                    dummyMetadata[String(index)].name &&
                                    `Name: ${
                                      dummyMetadata[String(index)].name
                                    }`}
                                </div>
                                <div>
                                  {dummyMetadata[String(index)] &&
                                    dummyMetadata[String(index)].disease &&
                                    `Disease: ${
                                      dummyMetadata[String(index)].disease
                                    }`}{" "}
                                </div>
                                <div>
                                  {dummyMetadata[String(index)] &&
                                    dummyMetadata[String(index)].date &&
                                    `Incident date: ${
                                      dummyMetadata[String(index)].date
                                    }`}
                                </div>
                              </>
                            }
                          >
                            <div>{mapIcon(index)}</div>
                          </HtmlTooltip>
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })}
            </div>
          </PanZoom>

        </div>
      </div>
    </div>
  );
}

export default MapTab;
