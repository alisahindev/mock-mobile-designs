import { useCallback, useState } from 'react';

export type AudioState = 'idle' | 'loading' | 'playing' | 'paused' | 'error';

interface UseAudioPlayerReturn {
  state: AudioState;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  currentTime: number;
  duration: number;
  error: string | null;
}

export function useAudioPlayer(audioUrl: string): UseAudioPlayerReturn {
  const [state, setState] = useState<AudioState>('idle');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Mock audio functionality - just for UI

  const play = useCallback(() => {
    setState('playing');
  }, []);

  const pause = useCallback(() => {
    setState('paused');
  }, []);

  const toggle = useCallback(() => {
    if (state === 'playing') {
      pause();
    } else {
      play();
    }
  }, [state, play, pause]);

  return {
    state,
    play,
    pause,
    toggle,
    currentTime,
    duration,
    error,
  };
}
