// src/components/Hero.js
import React, { useState, useRef, useEffect } from 'react';
import styled, { useTheme, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faPlay,
  faPause,
  faStepBackward,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';

// Import images from inside src/Images
import MusicCircleImage from '../../Images/MusicCircle.png';
import MusicCircleWhite from '../../Images/MusicCircleWhite.png';
import studio51Logo from '../../Images/Studio51.png';
import studio51LogoWhite from '../../Images/Studio51LogoWhite.png';

// Import MP3 files from src/MP3
import track1 from './MP3/Acoustic Aphelion.mp3';
import track2 from './MP3/Ambience Basketball Game Girls Junior.mp3';



const tracks = [
  { title: "Acoustic Aphelion", src: track1 },
  { title: "Ambience Basketball Game Girls Junior", src: track2 },
  // ... add more tracks if needed
];

// Styled Components

const HeroSection = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  color: ${({ theme }) => theme.textColor};
`;

const FixedBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1500px;
  height: 1500px;
  background-image: url(${({ theme }) =>
    theme.mode === 'dark' ? MusicCircleImage : MusicCircleWhite});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
`;

// We make FullScreenIntro a relative container for absolutely positioned elements.
const FullScreenIntro = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 50%; /* Adjust as needed to vertically center the logo */
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const HeroLogo = styled.img`
  display: block;
  width: 700px;
  height: auto;
  @media (max-width: 768px) {
    width: 500px;
  }
  @media (max-width: 480px) {
    width: 400px;
  }
`;

// Player Controls Container positioned between the logo and chevron.
const PlayerControls = styled.div`
  position: absolute;
  top: 70%; /* Adjust this value to move the controls higher/lower */
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

const WaveformContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
  justify-content: center;
  width: 120px;
  height: 60px;
  margin-bottom: 0.5rem;
`;

const Bar = styled.div`
  width: 10px;
  background-color: ${({ theme }) => theme.waveformColor};
  border-radius: 2px;
`;

const TrackName = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textColor};
`;

const MusicControls = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const ScrollArrow = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 2;

  .chevron-icon {
    font-size: 24px;
    color: ${({ theme }) => theme.textColor};
    animation: ${bounce} 2s infinite;
  }
`;

const Hero = () => {
  const theme = useTheme();

  // State for playback and track selection
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [samples, setSamples] = useState(new Array(8).fill(0.5));

  // Use a ref for the audio element. Create on mount.
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current = new Audio(tracks[0].src);
    // Optionally, set volume, etc.
    audioRef.current.volume = 1;
  }, []);

  // Update the audio source when the track changes.
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = tracks[trackIndex].src;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error("Playback error:", err));
      }
    }
  }, [trackIndex, isPlaying]);

  // Play or pause the current track
  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.load(); // Ensure it reloads
      audioRef.current.play().then(() => setIsPlaying(true))
        .catch(err => console.error("Playback error:", err));
    }
  };

  // Go to the previous track
  const handlePrevious = () => {
    let newIndex = trackIndex - 1;
    if (newIndex < 0) newIndex = tracks.length - 1;
    setTrackIndex(newIndex);
  };

  // Go to the next track
  const handleNext = () => {
    let newIndex = trackIndex + 1;
    if (newIndex >= tracks.length) newIndex = 0;
    setTrackIndex(newIndex);
  };

  // Update simulated waveform while playing
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setSamples(prev => prev.map(() => Math.random() * 2 + 0.5));
      }, 200);
    } else {
      setSamples(new Array(8).fill(0.5));
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const logo = theme.mode === 'dark' ? studio51LogoWhite : studio51Logo;

  return (
    <HeroSection>
      <FixedBackground />
      <FullScreenIntro>
        <LogoWrapper>
          <HeroLogo src={logo} alt="Studio 51 Logo" />
        </LogoWrapper>

        {/* Player controls placed between the logo and the down chevron */}
        <PlayerControls>
          <WaveformContainer>
            {samples.map((height, index) => (
              <Bar key={index} style={{ height: `${height * 20}px` }} />
            ))}
          </WaveformContainer>
          <TrackName>{tracks[trackIndex].title}</TrackName>
          <MusicControls>
            <FontAwesomeIcon
              icon={faStepBackward}
              size="2x"
              onClick={handlePrevious}
              style={{ cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={isPlaying ? faPause : faPlay}
              size="2x"
              onClick={handlePlayPause}
              style={{ cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={faStepForward}
              size="2x"
              onClick={handleNext}
              style={{ cursor: "pointer" }}
            />
          </MusicControls>
        </PlayerControls>

        <ScrollArrow>
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </ScrollArrow>
      </FullScreenIntro>
    </HeroSection>
  );
};

export default Hero;