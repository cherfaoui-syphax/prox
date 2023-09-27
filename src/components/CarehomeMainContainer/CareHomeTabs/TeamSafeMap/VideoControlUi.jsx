import React, { useRef, useState } from 'react';
import { IconButton, Slider, Tooltip, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    videoRef.current.volume = newValue;
  };

  const handleTimeChange = (event, newValue) => {
    setCurrentTime(newValue);
    videoRef.current.currentTime = newValue;
  };

  const handleFullScreen = () => {
    if (!isFullScreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  return (
    <div>
      <div style={{display : "flex"}}>
        <Tooltip title={isPlaying ? 'Pause' : 'Play'}>
          <IconButton onClick={togglePlayPause}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </Tooltip>

        <Tooltip title={isMuted ? 'Unmute' : 'Mute'}>
          <IconButton onClick={toggleMute}>
            {isMuted ? <VolumeMuteIcon /> : volume === 0 ? <VolumeOffIcon /> : volume < 0.5 ? <VolumeDownIcon /> : <VolumeUpIcon />}
          </IconButton>
        </Tooltip>

        <Slider
          value={volume}
          onChange={handleVolumeChange}
          min={0}
          max={1}
          step={0.01}
          style={{ width: 100 }}
        />

        <Typography variant="body2" style={{ minWidth: 60 }}>
          {Math.floor(currentTime)}s / {Math.floor(duration)}s
        </Typography>

        <Slider
          value={currentTime}
          onChange={handleTimeChange}
          min={0}
          max={duration}
          step={1}
          style={{ width: '100%' }}
        />

        <Tooltip title={isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}>
          <IconButton onClick={handleFullScreen}>
            <FullscreenIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default VideoPlayer;
