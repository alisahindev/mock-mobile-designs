import { useCallback, useEffect, useRef, useState } from 'react';

interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: Date;
}

export default function Conversation() {
  const [isListening, setIsListening] = useState(false);
  const [isAISpeaking, setIsAISpeaking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'What would you like to order today?',
      isAI: true,
      timestamp: new Date(),
    },
  ]);
  const [showHint, setShowHint] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [waveformData, setWaveformData] = useState<number[]>(new Array(5).fill(0));
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Audio visualization functions
  const startAudioVisualization = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);

      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.8;
      microphone.connect(analyser);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      microphoneRef.current = microphone;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const updateVisualization = () => {
        if (!analyserRef.current || !isListening) return;

        analyserRef.current.getByteFrequencyData(dataArray);

        // Calculate average audio level
        const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
        const normalizedLevel = Math.min(average / 128, 1);
        setAudioLevel(normalizedLevel);

        // Update waveform data (5 bars)
        const barCount = 5;
        const step = Math.floor(dataArray.length / barCount);
        const newWaveformData = [];

        for (let i = 0; i < barCount; i++) {
          const start = i * step;
          const end = start + step;
          const slice = dataArray.slice(start, end);
          const average = slice.reduce((sum, value) => sum + value, 0) / slice.length;
          newWaveformData.push(Math.min(average / 128, 1));
        }

        setWaveformData(newWaveformData);

        if (isListening) {
          animationFrameRef.current = requestAnimationFrame(updateVisualization);
        }
      };

      updateVisualization();
    } catch (error) {
      console.error('Error accessing microphone:', error);
      // Fallback to simulated data
      simulateAudioVisualization();
    }
  }, [isListening]);

  const simulateAudioVisualization = useCallback(() => {
    const updateSimulation = () => {
      if (!isListening) return;

      // Simulate realistic audio levels with some randomness
      const baseLevel = 0.3 + Math.random() * 0.4;
      const variation = Math.sin(Date.now() * 0.01) * 0.2;
      const level = Math.max(0, Math.min(1, baseLevel + variation));

      setAudioLevel(level);

      // Simulate waveform data
      const newWaveformData = Array.from({ length: 5 }, (_, i) => {
        const base = 0.2 + Math.random() * 0.6;
        const variation = Math.sin(Date.now() * 0.005 + i) * 0.3;
        return Math.max(0, Math.min(1, base + variation));
      });

      setWaveformData(newWaveformData);

      if (isListening) {
        animationFrameRef.current = requestAnimationFrame(updateSimulation);
      }
    };

    updateSimulation();
  }, [isListening]);

  const stopAudioVisualization = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    if (microphoneRef.current) {
      microphoneRef.current.disconnect();
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
    }

    setAudioLevel(0);
    setWaveformData(new Array(5).fill(0));
  }, []);

  useEffect(() => {
    if (isListening) {
      startAudioVisualization();
    } else {
      stopAudioVisualization();
    }

    return () => {
      stopAudioVisualization();
    };
  }, [isListening, startAudioVisualization, stopAudioVisualization]);

  // Separate effect for AI speaking simulation
  useEffect(() => {
    if (isAISpeaking) {
      const interval = setInterval(() => {
        const level = 0.3 + Math.random() * 0.4;
        setAudioLevel(level);

        const newWaveformData = Array.from({ length: 5 }, (_, i) => {
          const base = 0.2 + Math.random() * 0.6;
          const variation = Math.sin(Date.now() * 0.01 + i) * 0.3;
          return Math.max(0, Math.min(1, base + variation));
        });
        setWaveformData(newWaveformData);
      }, 100);

      return () => clearInterval(interval);
    } else {
      setAudioLevel(0);
      setWaveformData(new Array(5).fill(0));
    }
  }, [isAISpeaking]);

  const handleMicrophoneToggle = () => {
    if (!isListening) {
      // Start listening
      setIsListening(true);
      setTimeout(() => {
        setIsListening(false);
        setIsAISpeaking(true);
        // Simulate AI response
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              id: Date.now().toString(),
              text: "I'd like the pasta",
              isAI: false,
              timestamp: new Date(),
            },
          ]);
          setIsAISpeaking(false);
        }, 2000);
      }, 3000);
    } else {
      // Stop listening
      setIsListening(false);
    }
  };

  const handleExit = () => {
    // Navigate back or close conversation
    window.history.back();
  };

  return (
    <div className='fixed inset-0 bg-background flex flex-col min-h-svh pb-(--bottom-nav-height)'>
      {/* Exit Button */}
      <button
        onClick={handleExit}
        className='absolute top-4 left-4 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors'
        aria-label='Exit conversation'
      >
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
          <line x1='18' y1='6' x2='6' y2='18'></line>
          <line x1='6' y1='6' x2='18' y2='18'></line>
        </svg>
      </button>

      {/* Speaking Indicator Animation Area */}
      <div className='flex-1 flex items-center justify-center px-6'>
        <div className='relative w-48 h-48 flex items-center justify-center'>
          {/* Dynamic Ripple effects based on audio level */}
          <div
            className='absolute inset-0 rounded-full bg-primary/20 transition-all duration-150'
            style={{
              transform: `scale(${1 + (isListening ? audioLevel : isAISpeaking ? 0.3 : 0) * 0.3})`,
              opacity: (isListening ? audioLevel : isAISpeaking ? 0.5 : 0) * 0.8 + 0.2,
            }}
          ></div>
          <div
            className='absolute inset-0 rounded-full bg-primary/10 transition-all duration-200'
            style={{
              transform: `scale(${1 + (isListening ? audioLevel : isAISpeaking ? 0.4 : 0) * 0.5})`,
              opacity: (isListening ? audioLevel : isAISpeaking ? 0.3 : 0) * 0.6 + 0.1,
            }}
          ></div>
          <div
            className='absolute inset-0 rounded-full bg-primary/5 transition-all duration-300'
            style={{
              transform: `scale(${1 + (isListening ? audioLevel : isAISpeaking ? 0.5 : 0) * 0.7})`,
              opacity: (isListening ? audioLevel : isAISpeaking ? 0.2 : 0) * 0.4 + 0.05,
            }}
          ></div>

          {/* Main circle with dynamic scaling */}
          <div
            className='relative w-32 h-32 rounded-full bg-primary flex items-center justify-center transition-all duration-150'
            style={{
              transform: `scale(${1 + (isListening ? audioLevel : isAISpeaking ? 0.2 : 0) * 0.2})`,
              boxShadow: `0 0 ${20 + (isListening ? audioLevel : isAISpeaking ? 0.3 : 0) * 30}px rgba(95, 51, 225, ${
                0.3 + (isListening ? audioLevel : isAISpeaking ? 0.2 : 0) * 0.4
              })`,
            }}
          >
            {/* Dynamic Waveform bars based on real audio data */}
            <div className='flex items-end space-x-1'>
              {waveformData.map((level, i) => (
                <div
                  key={i}
                  className='w-1 bg-white rounded-full transition-all duration-100'
                  style={{
                    height: `${
                      8 + (isListening ? level : isAISpeaking ? 0.3 + Math.sin(Date.now() * 0.01 + i) * 0.2 : 0) * 24
                    }px`,
                    opacity: 0.7 + (isListening ? level : isAISpeaking ? 0.5 : 0) * 0.3,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transcription Area */}
      <div className='flex-1 flex flex-col justify-end px-6 pb-6'>
        <div className='max-h-48 overflow-y-auto scrollbar-hide space-y-4'>
          {messages.map(message => (
            <div
              key={message.id}
              className={`text-center ${
                message.isAI ? 'text-lg font-bold text-foreground' : 'text-sm text-muted-foreground'
              }`}
            >
              <div className='inline-block'>
                {message.isAI && <span className='font-semibold mr-2'>AI:</span>}
                {!message.isAI && <span className='font-medium mr-2'>You:</span>}
                <span>{message.text}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Microphone Toggle */}
        <div className='flex justify-center items-center pt-8'>
          <button
            onClick={handleMicrophoneToggle}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              isListening ? 'bg-red-500 hover:bg-red-600 scale-110' : 'bg-primary hover:bg-primary/90'
            }`}
            aria-label={isListening ? 'Stop listening' : 'Start listening'}
          >
            {isListening ? (
              <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                <rect x='6' y='6' width='12' height='12' rx='2' />
              </svg>
            ) : (
              <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z' />
                <path d='M19 10v2a7 7 0 0 1-14 0v-2' />
                <line x1='12' y1='19' x2='12' y2='23' />
                <line x1='8' y1='23' x2='16' y2='23' />
              </svg>
            )}
          </button>
        </div>

        {/* Hint Button */}
        {showHint && (
          <div className='flex justify-end pt-4'>
            <button
              onClick={() => setShowHint(false)}
              className='text-xs text-muted-foreground hover:text-foreground transition-colors'
            >
              [? Hint]
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
