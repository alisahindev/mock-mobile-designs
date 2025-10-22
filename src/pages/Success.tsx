import { CheckCircle, Clock, Play, RotateCcw, Trophy } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import {
  getAudioUrl,
  getAzureAssessmentResult,
  getLatestConversationResult,
  type AzureAssessmentResult,
  type ConversationResult,
} from '../data/conversationResults';

interface MetricTooltipProps {
  isVisible: boolean;
  content: string;
  onClose: () => void;
}

function MetricTooltip({ isVisible, content, onClose }: MetricTooltipProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className='absolute top-12 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap'>
      {content}
      <div className='absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45'></div>
    </div>
  );
}

interface ImprovementCardProps {
  improvement: {
    id: string;
    studentSpeech: string;
    correctedSpeech: string;
    audioUrl: string;
    category: string;
    explanation: string;
  };
  onPlayAudio: (id: string) => void;
  onPractice: (id: string) => void;
  assessmentResult?: AzureAssessmentResult | null;
}

function ImprovementCard({ improvement, onPlayAudio, onPractice, assessmentResult }: ImprovementCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handlePlayAudio = () => {
    onPlayAudio(improvement.id);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'grammar':
        return 'text-blue-600 bg-blue-50';
      case 'pronunciation':
        return 'text-green-600 bg-green-50';
      case 'vocabulary':
        return 'text-purple-600 bg-purple-50';
      case 'fluency':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className='bg-white rounded-xl p-4 shadow-sm border border-gray-100'>
      <div className='space-y-3'>
        <div>
          <p className='text-sm text-gray-600 mb-1'>You said:</p>
          <p className='text-gray-800 italic'>"{improvement.studentSpeech}"</p>
        </div>

        <div>
          <p className='text-sm text-gray-600 mb-1 flex items-center gap-1'>✏️ Try:</p>
          <p className='text-green-700 font-medium'>"{improvement.correctedSpeech}"</p>
        </div>

        <div className='flex items-center gap-2'>
          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(improvement.category)}`}>
            {improvement.category}
          </span>
        </div>

        <div className='flex items-center gap-2'>
          <button
            onClick={handlePlayAudio}
            className='flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm font-medium'
          >
            <Play className='w-4 h-4' />
            Play Audio
          </button>

          <button
            onClick={() => onPractice(improvement.id)}
            className='flex items-center gap-2 px-3 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors text-sm font-medium'
          >
            <CheckCircle className='w-4 h-4' />
            Practice
          </button>
        </div>

        {assessmentResult && (
          <div className='mt-3 p-3 bg-gray-50 rounded-lg'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm font-medium text-gray-700'>Assessment Result</span>
              <span className={`text-sm font-bold ${getScoreColor(assessmentResult.overallScore)}`}>
                {assessmentResult.overallScore}%
              </span>
            </div>
            <p className='text-xs text-gray-600'>{assessmentResult.feedback}</p>
          </div>
        )}

        {showTooltip && (
          <div className='absolute top-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded'>
            Now try it yourself!
          </div>
        )}
      </div>
    </div>
  );
}

interface ConfidenceControlProps {
  selectedLevel?: 'low' | 'medium' | 'high';
  onSelect: (level: 'low' | 'medium' | 'high') => void;
}

function ConfidenceControl({ selectedLevel, onSelect }: ConfidenceControlProps) {
  const levels = [
    { key: 'low' as const, emoji: '😟', label: 'Not confident' },
    { key: 'medium' as const, emoji: '😐', label: 'Okay' },
    { key: 'high' as const, emoji: '😊', label: 'Great! confident' },
  ];

  return (
    <div className='space-y-3'>
      <p className='text-base text-gray-800'>How confident do you feel?</p>
      <div className='grid grid-cols-3 gap-4'>
        {levels.map(level => (
          <button
            key={level.key}
            onClick={() => onSelect(level.key)}
            className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all ${
              selectedLevel === level.key ? 'bg-primary/10 scale-105' : 'hover:bg-gray-50'
            }`}
          >
            <span className='text-3xl'>{level.emoji}</span>
            <span className='text-xs text-gray-600 text-center'>{level.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Success() {
  const navigate = useNavigate();
  const [conversationResult, setConversationResult] = useState<ConversationResult | null>(null);
  const [selectedConfidence, setSelectedConfidence] = useState<'low' | 'medium' | 'high' | undefined>();
  const [assessmentResults, setAssessmentResults] = useState<Record<string, AzureAssessmentResult>>({});
  const [showTimeTooltip, setShowTimeTooltip] = useState(false);
  const [showGoalsTooltip, setShowGoalsTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const result = getLatestConversationResult();
    setConversationResult(result);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} min ${secs} sec`;
  };

  const handlePlayAudio = useCallback((improvementId: string) => {
    const audioUrl = getAudioUrl(improvementId);
    if (audioUrl) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.play().catch(console.error);
    }
  }, []);

  const handlePractice = useCallback((improvementId: string) => {
    // Mock Azure assessment
    const result = getAzureAssessmentResult(improvementId);
    if (result) {
      setAssessmentResults(prev => ({
        ...prev,
        [improvementId]: result,
      }));
    }
  }, []);

  const handleReplay = () => {
    navigate('/replay');
  };

  const handleDone = () => {
    navigate('/');
  };

  if (!conversationResult) {
    return (
      <div className='fixed inset-0 bg-background flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-xl font-semibold text-foreground mb-2'>Loading...</h1>
          <p className='text-sm text-muted-foreground'>Preparing your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-background app-radial-bg pb-(--bottom-nav-height)'>
      {/* Global Header */}
      <Header userName='Livia Vaccaro' avatarUrl='https://avatar.iran.liara.run/public/41' />

      {/* Celebration Section */}
      <div className='px-4 py-6 relative'>
        <div className='text-center space-y-4'>
          <div className='flex justify-center'>
            <Trophy className='w-8 h-8 text-yellow-500' />
          </div>
          <div>
            <h1 className='text-2xl font-bold text-gray-800'>Awesome job!</h1>
            <p className='text-base text-gray-600'>You nailed that chat!</p>
          </div>

          <div className='space-y-2'>
            <button
              onClick={() => setShowTimeTooltip(!showTimeTooltip)}
              className='flex items-center justify-center gap-2 w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'
            >
              <Clock className='w-5 h-5 text-gray-600' />
              <span className='text-gray-800'>Spoke {formatTime(conversationResult.stats.sessionDuration)}</span>
              <span className='text-xs text-gray-500'>(tap for total)</span>
            </button>

            <button
              onClick={() => setShowGoalsTooltip(!showGoalsTooltip)}
              className='flex items-center justify-center gap-2 w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'
            >
              <CheckCircle className='w-5 h-5 text-green-600' />
              <span className='text-gray-800'>Met {conversationResult.stats.goalsMet} goals!</span>
              <span className='text-xs text-gray-500'>(tap for details)</span>
            </button>
          </div>
        </div>

        <MetricTooltip
          isVisible={showTimeTooltip}
          content={`${Math.floor(conversationResult.stats.totalDuration / 60)} min total! 🚀`}
          onClose={() => setShowTimeTooltip(false)}
        />

        <MetricTooltip
          isVisible={showGoalsTooltip}
          content={`Great progress! Keep it up! 🎯`}
          onClose={() => setShowGoalsTooltip(false)}
        />
      </div>

      {/* Content */}
      <div className='px-4 py-6 space-y-6'>
        {/* Things to Practice Section */}
        <div>
          <h2 className='text-lg font-bold text-gray-800 mb-4 flex items-center gap-2'>📚 Things to Practice</h2>

          <div className='space-y-4'>
            {conversationResult.improvements.map(improvement => (
              <ImprovementCard
                key={improvement.id}
                improvement={improvement}
                onPlayAudio={handlePlayAudio}
                onPractice={handlePractice}
                assessmentResult={assessmentResults[improvement.id]}
              />
            ))}
          </div>
        </div>

        {/* Confidence Control */}
        <ConfidenceControl selectedLevel={selectedConfidence} onSelect={setSelectedConfidence} />
      </div>

      {/* Bottom CTA */}
      <div className='bg-background border-t border-gray-200 px-4 py-4'>
        <div className='flex gap-2'>
          <button
            onClick={handleReplay}
            className='flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors'
          >
            <RotateCcw className='w-5 h-5' />
            Replay
          </button>

          <button
            onClick={handleDone}
            className='flex-1 flex items-center justify-center gap-2 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors'
          >
            <CheckCircle className='w-5 h-5' />
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
