import { X } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

import { BackButton } from '@/components/BackButton';
import { BottomNav } from '@/components/BottomNav';
import { ChatBubble } from '@/components/ChatBubble';
import { ReplayProgressBar } from '@/components/ReplayProgressBar';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const mockMessages = [
  {
    id: '1',
    speaker: 'ai' as const,
    text: 'Hello! How can I help you today?',
    translation: 'Merhaba! Bugün size nasıl yardımcı olabilirim?',
    audioUrl: '',
  },
  {
    id: '2',
    speaker: 'user' as const,
    text: 'I would like to order a coffee, please.',
    audioUrl: '',
  },
  {
    id: '3',
    speaker: 'ai' as const,
    text: 'Of course! What size would you like?',
    translation: 'Tabii ki! Hangi boyutta istersiniz?',
    audioUrl: '',
  },
];

export default function ReplayPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(0);
  const totalTime = 120; // 2 minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prev => {
        if (prev >= totalTime) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [totalTime]);

  return (
    <div className='flex min-h-screen flex-col pb-20'>
      {/* Başlık Çubuğu */}
      <div className='flex items-center justify-between px-4 py-3'>
        <BackButton />
        <h1 className='text-lg font-semibold'>Konuşma Tekrarı</h1>
        <Button variant='ghost' size='icon' onClick={() => navigate(-1)} className='rounded-full' aria-label='Kapat'>
          <X className='size-5' />
        </Button>
      </div>

      {/* İlerleme Çubuğu */}
      <ReplayProgressBar currentTime={currentTime} totalTime={totalTime} />

      {/* Sohbet Arayüzü */}
      <div className='flex-1 overflow-y-auto px-4 py-6 space-y-4'>
        {mockMessages.map(message => (
          <ChatBubble
            key={message.id}
            message={message.text}
            speaker={message.speaker}
            audioUrl={message.audioUrl}
            translation={message.translation}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
