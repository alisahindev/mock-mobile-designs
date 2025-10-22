import { ArrowLeft, Globe, Play, Volume2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAssignmentById } from '../data/assignments';

interface Message {
  id: string;
  type: 'ai' | 'student';
  content: string;
  timestamp: string;
  duration: number; // seconds
}

export default function Replay() {
  const location = useLocation();
  const navigate = useNavigate();
  const assignmentId = location.state?.assignmentId;
  const assignment = assignmentId ? getAssignmentById(assignmentId) : null;

  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMessageId, setCurrentMessageId] = useState<string | null>(null);
  const [translatedMessages, setTranslatedMessages] = useState<Record<string, string>>({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Mock conversation data
  const messages: Message[] = [
    {
      id: '1',
      type: 'ai',
      content: 'Hello! Welcome to our cafe. How can I help you today?',
      timestamp: '00:00',
      duration: 3,
    },
    {
      id: '2',
      type: 'student',
      content: "Hi! I'd like to order a coffee, please.",
      timestamp: '00:03',
      duration: 2,
    },
    {
      id: '3',
      type: 'ai',
      content: 'Great! What kind of coffee would you like? We have espresso, cappuccino, latte, and americano.',
      timestamp: '00:05',
      duration: 4,
    },
    {
      id: '4',
      type: 'student',
      content: "I'll have a cappuccino, please.",
      timestamp: '00:09',
      duration: 2,
    },
    {
      id: '5',
      type: 'ai',
      content: 'Perfect! Would you like anything else with your cappuccino? We have fresh pastries and sandwiches.',
      timestamp: '00:11',
      duration: 4,
    },
    {
      id: '6',
      type: 'student',
      content: "Yes, I'd like a croissant, please.",
      timestamp: '00:15',
      duration: 2,
    },
    {
      id: '7',
      type: 'ai',
      content: 'Excellent choice! That will be $8.50 total. How would you like to pay?',
      timestamp: '00:17',
      duration: 3,
    },
    {
      id: '8',
      type: 'student',
      content: "I'll pay with my card, please.",
      timestamp: '00:20',
      duration: 2,
    },
    {
      id: '9',
      type: 'ai',
      content: 'Perfect! Your order will be ready in about 5 minutes. Thank you for choosing our cafe!',
      timestamp: '00:22',
      duration: 4,
    },
  ];

  useEffect(() => {
    const total = messages.reduce((acc, msg) => acc + msg.duration, 0);
    setTotalTime(total);
  }, []);

  // Scroll tracking for progress bar
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
        const timeProgress = scrollPercentage * totalTime;
        setCurrentTime(Math.floor(timeProgress));
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [totalTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayMessage = (messageId: string) => {
    setCurrentMessageId(messageId);
    setIsPlaying(true);

    // Simulate playing the message
    setTimeout(() => {
      setIsPlaying(false);
      setCurrentMessageId(null);
    }, 2000);
  };

  const handleTranslate = (messageId: string, content: string) => {
    // Mock translation - in real app this would call translation API
    const mockTranslations: Record<string, string> = {
      '1': 'Merhaba! Kafemize hoş geldiniz. Bugün size nasıl yardımcı olabilirim?',
      '3': 'Harika! Ne tür kahve istersiniz? Espresso, cappuccino, latte ve americano var.',
      '5': 'Mükemmel! Cappuccino ile birlikte başka bir şey ister misiniz? Taze pastalar ve sandviçlerimiz var.',
      '7': 'Mükemmel seçim! Toplam 8.50 dolar olacak. Nasıl ödemek istersiniz?',
      '9': 'Mükemmel! Siparişiniz yaklaşık 5 dakika içinde hazır olacak. Kafemizi seçtiğiniz için teşekkürler!',
    };

    const translation = mockTranslations[messageId] || `Çeviri: ${content}`;
    setTranslatedMessages(prev => ({
      ...prev,
      [messageId]: translation,
    }));
  };

  const handleClose = () => {
    navigate(-1);
  };

  const getProgressPercentage = () => {
    return totalTime > 0 ? (currentTime / totalTime) * 100 : 0;
  };

  if (!assignment) {
    return (
      <div className='min-h-screen bg-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-xl font-semibold text-foreground mb-2'>Görev Bulunamadı</h1>
          <p className='text-sm text-muted-foreground mb-6'>Aradığınız görev mevcut değil.</p>
          <button
            onClick={handleClose}
            className='px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors'
          >
            Geri Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Header + Progress Bar Container */}
      <div className='fixed top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200'>
        {/* Header */}
        <header className='flex items-center justify-between px-4 py-4'>
          <button
            onClick={handleClose}
            className='w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20'
            aria-label='Geri dön'
          >
            <ArrowLeft className='w-6 h-6 text-foreground' />
          </button>
          <h1 className='text-lg font-semibold text-foreground'>Conversation Replay</h1>
          <div className='w-11' /> {/* Spacer for centering */}
        </header>

        {/* Progress Bar */}
        <div className='px-4 py-3'>
          <div className='w-full bg-gray-200 rounded-full h-1.5'>
            <div
              ref={progressRef}
              className='bg-primary h-1.5 rounded-full transition-all duration-300'
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
          <div className='flex justify-between text-xs text-muted-foreground mt-2'>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(totalTime)}</span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        ref={scrollRef}
        className='pt-[146px] px-4 py-4 space-y-4 min-h-screen'
        style={{ paddingBottom: 'calc(var(--bottom-nav-height) + 1rem)' }}
        aria-label='Konuşma geçmişi'
      >
        {messages.map(message => (
          <div key={message.id} className={`flex ${message.type === 'student' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.type === 'student' ? 'bg-primary text-white' : 'bg-gray-100 text-foreground'
              }`}
            >
              <p className='text-sm leading-relaxed'>{message.content}</p>

              {/* Translation */}
              {translatedMessages[message.id] && (
                <div className='mt-2 pt-2 border-t border-white/20'>
                  <p className='text-xs leading-relaxed opacity-75 font-light'>{translatedMessages[message.id]}</p>
                </div>
              )}

              <div className='flex items-center justify-between mt-2'>
                <span className='text-xs opacity-70'>{message.timestamp}</span>

                <div className='flex items-center gap-2'>
                  {message.type === 'ai' && (
                    <button
                      onClick={() => handleTranslate(message.id, message.content)}
                      className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20'
                      aria-label='Çevir'
                    >
                      <Globe className='w-4 h-4' />
                    </button>
                  )}

                  <button
                    onClick={() => handlePlayMessage(message.id)}
                    className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20'
                    aria-label='Ses çal'
                    disabled={isPlaying && currentMessageId === message.id}
                  >
                    {isPlaying && currentMessageId === message.id ? (
                      <Volume2 className='w-4 h-4 animate-pulse' />
                    ) : (
                      <Play className='w-4 h-4' />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
