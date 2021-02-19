import React, { createContext, useContext, useState } from 'react'
import { Container, Button, Overlay, Inner, Close } from './style/player'
import ReactDOM from 'react-dom'

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function A({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer ? ReactDOM.createPortal(
    <Overlay onClick={() => { setShowPlayer(false) }} {...restProps}>
      <Inner>
        <video id="netflix-player" controls>
          <source src={src} type="video/mp4" />
        </video>
        <Close />
      </Inner>
    </Overlay>,
    document.body
  ) : null;
};

Player.Button = function A({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return <Button onClick={() => setShowPlayer(showPlayer => !showPlayer)}>
    Play
  </Button>
};