// src/pages/Home/Publications.js
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

// Import album images
import AuroraB from "./img/AuroraB.jpeg";
import EndreyvSmith from "./img/endreyvssmith.jpg";

// Import audio tracks
import track1 from "./MP3/Acoustic Aphelion.mp3";
import track2 from "./MP3/Ambience Basketball Game Girls Junior.mp3";

// Sample albums data
const albums = [
  { title: "Northern Lights", artist: "Aurora Borealis", img: AuroraB, track: track1 },
  { title: "Urban Echoes", artist: "Endrey vs Smith", img: EndreyvSmith, track: track2 },
  { title: "Serene Waves", artist: "Calm Beats", img: AuroraB, track: track1 },
  { title: "Cosmic Flow", artist: "Galaxy Sound", img: EndreyvSmith, track: track2 },
  { title: "Echo Chamber", artist: "The Echo Project", img: AuroraB, track: track1 },
  { title: "Lo-Fi Dreams", artist: "Mellow Vibes", img: EndreyvSmith, track: track2 },
  { title: "Synth Horizons", artist: "Synthscape", img: AuroraB, track: track1 },
  { title: "Chill & Relax", artist: "Zen Mode", img: EndreyvSmith, track: track2 },
  { title: "Deep Space Sounds", artist: "Astro Sound", img: AuroraB, track: track1 },
  { title: "Mystic Voices", artist: "Ethereal Choir", img: EndreyvSmith, track: track2 },
];

const PublicationsSection = styled.section`
  color: ${({ theme }) => theme.textColor};
  padding: 5rem 3rem;
  text-align: center;
  position: relative;
  z-index: 3;

  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
`;

const AlbumCard = styled.div`
  perspective: 1200px;
  width: 100%;
  height: 400px;
  cursor: pointer;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${({ flipped }) => flipped && "transform: rotateY(180deg);"}
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  transform: rotateY(0deg);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const AlbumImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const AlbumDetails = styled.div`
  text-align: center;
`;

const AlbumTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0.5rem 0;
`;

const ArtistName = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondaryColor};
`;

const PlayButton = styled.button`
  background: ${({ theme }) => theme.primaryColor};
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.secondaryBackground};
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  transform: rotateY(180deg);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

const BackText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondaryColor};
  text-align: center;
`;

const Publications = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [playingTrack, setPlayingTrack] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleFlip = (index) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handlePlayPause = (track, event) => {
    event.stopPropagation(); // Prevent flipping when clicking play
    if (playingTrack === track) {
      audio.pause();
      setPlayingTrack(null);
    } else {
      if (audio) audio.pause();
      const newAudio = new Audio(track);
      setAudio(newAudio);
      newAudio.play();
      setPlayingTrack(track);
    }
  };

  return (
    <PublicationsSection>
      <GridContainer>
        {albums.map((album, index) => (
          <AlbumCard key={index} onClick={() => handleFlip(index)}>
            <CardInner flipped={flippedCards[index]}>
              {/* Front Side */}
              <CardFront>
                <AlbumImage src={album.img} alt={album.title} />
                <AlbumDetails>
                  <AlbumTitle>{album.title}</AlbumTitle>
                  <ArtistName>{album.artist}</ArtistName>
                </AlbumDetails>
                <PlayButton onClick={(event) => handlePlayPause(album.track, event)}>
                  <FontAwesomeIcon icon={playingTrack === album.track ? faPause : faPlay} />
                </PlayButton>
              </CardFront>

              {/* Back Side */}
              <CardBack>
                <FontAwesomeIcon icon={faInfoCircle} size="3x" />
                <BackText>
                  This album features a unique mix of ambient and electronic beats, blending ethereal sounds with
                  deep textures.
                </BackText>
              </CardBack>
            </CardInner>
          </AlbumCard>
        ))}
      </GridContainer>
    </PublicationsSection>
  );
};

export default Publications;