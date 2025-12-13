import { useRef, useState } from "react";

export const useSound = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  if (musicRef.current === null) {
    musicRef.current = new Audio("/sounds/background-music.mp3");
    musicRef.current.loop = true;
    musicRef.current.volume = 0.3;
  }

  if (clickSoundRef.current === null) {
    clickSoundRef.current = new Audio("/sounds/cat-button.mp3");
    clickSoundRef.current.volume = 0.5;
  }

  const playClick = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play();
    }
  };

  const toggleMusic = () => {
    if (musicRef.current) {
      if (isMusicPlaying) {
        musicRef.current.pause();
      } else {
        musicRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return {
    playClick,
    toggleMusic,
    isMusicPlaying,
  };
};
