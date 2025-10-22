import * as Popover from '@radix-ui/react-popover';
import { ArrowRight, MicIcon, StopCircleIcon } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: Date;
}

export default function Conversation() {
  const navigate = useNavigate();
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
  const [hintAvailable, setHintAvailable] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [waveformData, setWaveformData] = useState<number[]>(new Array(5).fill(0));
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const startHintTimer = () => {
    // Clear existing timer
    if (hintTimerRef.current) {
      clearTimeout(hintTimerRef.current);
    }

    // Start new timer for 5 seconds
    hintTimerRef.current = setTimeout(() => {
      setHintAvailable(true);
    }, 5000);
  };

  const clearHintTimer = () => {
    if (hintTimerRef.current) {
      clearTimeout(hintTimerRef.current);
      hintTimerRef.current = null;
    }
    setShowHint(false);
    setHintAvailable(false);
  };

  const handleMicrophoneToggle = () => {
    if (!isListening) {
      // Start listening
      setIsListening(true);
      clearHintTimer(); // Clear hint timer when user starts speaking
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
          startHintTimer(); // Start hint timer after AI finishes speaking
        }, 2000);
      }, 3000);
    } else {
      // Stop listening
      setIsListening(false);
    }
  };

  const handleExit = () => {
    // Clear hint timer when exiting
    clearHintTimer();
    // Navigate back or close conversation
    window.history.back();
  };

  const handleSuccess = () => {
    navigate('/success');
  };

  // Cleanup timer on component unmount
  useEffect(() => {
    return () => {
      if (hintTimerRef.current) {
        clearTimeout(hintTimerRef.current);
      }
    };
  }, []);

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
              <StopCircleIcon className='w-6 h-6 text-white' />
            ) : (
              <MicIcon className='w-6 h-6 text-white' />
            )}
          </button>
        </div>

        {/* Success Button */}
        <div className='flex justify-center items-center pt-4'>
          <button
            onClick={handleSuccess}
            className='inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl'
          >
            <span>Complete Conversation</span>
            <ArrowRight className='w-4 h-4' />
          </button>
        </div>

        {/* Hint Popover */}
        {hintAvailable && (
          <div className='pt-4 flex justify-end'>
            <Popover.Root open={showHint} onOpenChange={setShowHint}>
              <Popover.Trigger asChild>
                <button className='group relative inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-muted/50 rounded-md border border-transparent hover:border-border/50'>
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${showHint ? 'rotate-180' : ''}`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                  <span>💡 Hints</span>
                </button>
              </Popover.Trigger>

              <Popover.Portal>
                <Popover.Content
                  className='z-50 w-80 p-4 bg-background/95 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
                  side='top'
                  align='end'
                  sideOffset={8}
                >
                  <div className='space-y-3'>
                    <div className='flex items-center gap-2 mb-4'>
                      <div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
                      <p className='text-sm font-semibold text-foreground'>What can you say?</p>
                    </div>

                    <div className='grid gap-2'>
                      {/* Sipariş örneği */}
                      <div className='group p-3 bg-muted/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-200 hover:shadow-sm'>
                        <div className='flex items-start gap-3'>
                          <div className='w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5'>
                            <span className='text-xs font-bold text-primary'>1</span>
                          </div>
                          <div className='flex-1 min-w-0'>
                            <p className='text-xs font-medium text-muted-foreground mb-1'>To place an order</p>
                            <p className='text-sm text-foreground font-medium'>"I'd like to order a pizza"</p>
                          </div>
                        </div>
                      </div>

                      {/* Menü sorma örneği */}
                      <div className='group p-3 bg-muted/30 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-200 hover:shadow-sm'>
                        <div className='flex items-start gap-3'>
                          <div className='w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5'>
                            <span className='text-xs font-bold text-green-600'>2</span>
                          </div>
                          <div className='flex-1 min-w-0'>
                            <p className='text-xs font-medium text-muted-foreground mb-1'>To ask about the menu</p>
                            <p className='text-sm text-foreground font-medium'>"What's on the menu today?"</p>
                          </div>
                        </div>
                      </div>

                      {/* Fiyat sorma örneği */}
                      <div className='group p-3 bg-muted/30 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-200 hover:shadow-sm'>
                        <div className='flex items-start gap-3'>
                          <div className='w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5'>
                            <span className='text-xs font-bold text-blue-600'>3</span>
                          </div>
                          <div className='flex-1 min-w-0'>
                            <p className='text-xs font-medium text-muted-foreground mb-1'>To ask about prices</p>
                            <p className='text-sm text-foreground font-medium'>"What are the pizza prices?"</p>
                          </div>
                        </div>
                      </div>

                      {/* Yardım isteme örneği */}
                      <div className='group p-3 bg-muted/30 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-200 hover:shadow-sm'>
                        <div className='flex items-start gap-3'>
                          <div className='w-6 h-6 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5'>
                            <span className='text-xs font-bold text-orange-600'>4</span>
                          </div>
                          <div className='flex-1 min-w-0'>
                            <p className='text-xs font-medium text-muted-foreground mb-1'>To ask for recommendations</p>
                            <p className='text-sm text-foreground font-medium'>"What would you recommend?"</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='pt-2 border-t border-border/30'>
                      <p className='text-xs text-muted-foreground text-center'>
                        💡 You can start the conversation by saying one of these examples
                      </p>
                    </div>
                  </div>

                  <Popover.Arrow className='fill-background/95' />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        )}
      </div>
    </div>
  );
}
