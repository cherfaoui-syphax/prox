import React, { useRef, useState } from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import SvgIcon from '@mui/material/SvgIcon';

import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

import "../style.css"

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'



function SimpleLineChart( props) {
  // Sample data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [10, 20, 15, 25, 30],
        borderColor: 'rgba(169, 169, 169, 1)', // Grey color
        borderWidth: 2,
        pointRadius: 0, // Hide data points
      },
    ],
  };

  // Customize chart options to hide axis and labels
  const options = {
    responsive: true, // Enable responsive sizing
    aspectRatio: 8, // Set the aspect ratio (width-to-height) to 2:1

    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} {...props} />
    </div>
  );
}



const timeStye = {
  color : "#777F9E",
  fontSize : "12px",
  marginBottom : "13px" , 
  minWidth : "60px",
}

const buttonWrapperStyle= {
  backgroundColor: "#C9D3EB",
  padding: "8px 8px"
};

const iconStyle = {
  fontSize: "24px",
  color: "#283555"
}

const customSliderStyle = {
  '& .MuiSlider-thumb': {
      color: "#00828E",
  },
  '& .MuiSlider-track': {
      color: "#01C1D3", 
      height: "13px",
  },
  '& .MuiSlider-rail': {
      color: "#C9D3EB",
      height: "13px",

  },

};


function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(10);


  const handleTimeChange = (event, newValue) => {
    setCurrentTime(newValue);
  };
  
  const handleFastForward = () => {
    setCurrentTime(duration);
  }

  const handleFastRewind = () => {
    setCurrentTime(0);
  }

  const togglePlayPause = () => {
      setIsPlaying(!isPlaying);
  };








  return (
    <div style={{marginLeft : "10px" , marginRight:"22px",marginBottom : "34px" , marginTop:"5px"}}>
        <Typography 
          variant="body2" 
          style={{...timeStye,
            marginTop : "10px",
            marginLeft : "12px",
          }} >
          Proximity
        </Typography>

      <div className = "controls-ui" style={{display : "flex" , alignItems :"flex-end"}} >
        <div>
          <Tooltip title={isPlaying ? 'Pause' : 'Play'}>
            <IconButton onClick={togglePlayPause} style={buttonWrapperStyle}>
              {isPlaying ? <PauseIcon style={iconStyle} /> : <PlayArrowIcon style={iconStyle}  />}
            </IconButton>
          </Tooltip>
        </div>

        <div>
          <Tooltip title="rewind">
            <IconButton onClick={handleFastRewind} style={buttonWrapperStyle}>
                <FastRewindIcon style={iconStyle} />
            </IconButton>
          </Tooltip>
        </div>

        <div>
          <Typography variant="body2" style={timeStye} >
            {Math.floor(currentTime)}s / {Math.floor(duration)}s
          </Typography>
        </div>

          <div style={{ width: '100%' }} >

              <SimpleLineChart  
                  style={{
                  width: '95%',
                  height: '80px',
                  display: 'block',
                  margin: 'auto',
              }} />

            <Slider
              value={currentTime}
              onChange={handleTimeChange}
              min={0}
              max={duration}
              step={1}
              sx = {customSliderStyle}
            />

          </div>


        <div>
          <Typography variant="body2" style={timeStye} >
            {Math.floor(currentTime)}s / {Math.floor(duration)}s
          </Typography>
        </div>


        <div>
          <Tooltip title="fast forward">
            <IconButton onClick={handleFastForward} style={buttonWrapperStyle}>
                <FastForwardIcon style={iconStyle} />
            </IconButton>
          </Tooltip>
        </div>

      </div>
    </div>
  );
}

export default VideoPlayer;
