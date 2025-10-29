import { X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { HintButton } from '@/components/HintButton';
import { MicrophoneButton } from '@/components/MicrophoneButton';
import { SpeakingIndicator } from '@/components/SpeakingIndicator';
import { TimeWarningOverlay } from '@/components/TimeWarningOverlay';
import { TranscriptionArea } from '@/components/TranscriptionArea';
import { Button } from '@/components/ui/button';
import { getAssignmentById } from '@/data/assignments';

type SpeakingState = 'idle' | 'ai-speaking' | 'user-speaking' | 'listening';
type MicrophoneState = 'idle' | 'active' | 'auto-disabled';

export default function ConversationPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const assignment = id ? getAssignmentById(id) : null;

  const [speakingState, setSpeakingState] = useState<SpeakingState>('idle');
  const [micState, setMicState] = useState<MicrophoneState>('idle');
  const [messages, setMessages] = useState<
    Array<{ id: string; speaker: 'ai' | 'user'; text: string; timestamp: Date }>
  >([]);
  const [showTimeWarning, setShowTimeWarning] = useState(false);

  if (!assignment) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <p>Ödev bulunamadı</p>
      </div>
    );
  }

  const handleMicToggle = () => {
    if (micState === 'idle') {
      setMicState('active');
      setSpeakingState('listening');
    } else {
      setMicState('idle');
      setSpeakingState('idle');
    }
  };

  const handleExit = () => {
    if (window.confirm('Konuşmayı sonlandırmak istediğinize emin misiniz?')) {
      navigate(-1);
    }
  };

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      {/* Çıkış Düğmesi */}
      <div className='flex items-center justify-between px-4 py-3'>
        <Button variant='ghost' size='icon' onClick={handleExit} className='rounded-full' aria-label='Çıkış'>
          <X className='size-5' />
        </Button>
      </div>

      {/* Konuşma Göstergesi */}
      <SpeakingIndicator state={speakingState} />

      {/* Transkripsiyon Alanı */}
      <TranscriptionArea messages={messages} />

      {/* Zaman Uyarısı */}
      <TimeWarningOverlay message='Sohbeti bitiriyoruz...' show={showTimeWarning} />

      {/* Alt Kontrol Panel */}
      <div className='fixed bottom-0 left-0 right-0 border-t bg-background px-4 py-6'>
        <div className='flex items-center justify-center gap-4'>
          <HintButton onClick={() => console.log('İpucu')} />
          <MicrophoneButton state={micState} onToggle={handleMicToggle} />
        </div>
      </div>
    </div>
  );
}
