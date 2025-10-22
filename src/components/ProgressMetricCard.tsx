import { CheckCircle, Clock, Zap } from 'lucide-react';
import { useProgressData } from '../hooks/useProgressData';
import { cn } from '../lib/utils';
import { BottomSheetContent, Dialog, DialogTitle, DialogTrigger } from './ui/BottomSheet';
import EmptyState from './ui/EmptyState';

export type ProgressMetricVariant = 'speakingTime' | 'speakingConfidence' | 'taskAchievement';

interface ProgressMetricCardProps {
  variant: ProgressMetricVariant;
  isEmpty: boolean;
  className?: string;
}

const variantConfig = {
  speakingTime: {
    title: 'Speaking Time',
    icon: Clock,
    iconColor: 'text-blue-700',
    headerColor: 'bg-blue-50 border-blue-100',
    emptyIcon: '🎤',
    emptyPrimary: 'Complete your first assignments to see your progress!',
    emptyBenefit: "You'll see how much time you spend speaking and your speaking ratio here",
  },
  speakingConfidence: {
    title: 'Speaking Confidence',
    icon: Zap,
    iconColor: 'text-green-700',
    headerColor: 'bg-green-50 border-green-100',
    emptyIcon: '😊 💪',
    emptyPrimary: 'Rate your confidence after conversations to track your journey',
    emptyBenefit: 'See how your speaking confidence grows over time',
  },
  taskAchievement: {
    title: 'Task Achievement',
    icon: CheckCircle,
    iconColor: 'text-purple-700',
    headerColor: 'bg-purple-50 border-purple-100',
    emptyIcon: '🎯',
    emptyPrimary: "Complete assignments to see what you're learning!",
    emptyBenefit: "You'll see your learning objectives and goals achieved here",
  },
};

// Speaking Time Content Component
function SpeakingTimeContent() {
  const { totalSpeakingTime, speakingRatio, weeklyProgress } = useProgressData();

  return (
    <div className='space-y-6'>
      {/* Ana İstatistikler */}
      <div className='grid grid-cols-2 gap-4'>
        <div className='text-center p-4 bg-blue-50 rounded-xl'>
          <div className='text-2xl font-bold text-blue-600'>{totalSpeakingTime}</div>
          <div className='text-sm text-blue-600'>Dakika</div>
        </div>
        <div className='text-center p-4 bg-green-50 rounded-xl'>
          <div className='text-2xl font-bold text-green-600'>{speakingRatio}%</div>
          <div className='text-sm text-green-600'>Konuşma Oranı</div>
        </div>
      </div>

      {/* Haftalık Progress */}
      <div>
        <h4 className='font-semibold text-foreground mb-3'>Haftalık İlerleme</h4>
        <div className='space-y-2'>
          {weeklyProgress.map((week, index) => (
            <div key={index} className='flex justify-between items-center p-3 bg-slate-50 rounded-lg'>
              <span className='text-sm font-medium'>{week.week}</span>
              <div className='flex gap-4 text-sm text-muted-foreground'>
                <span>{week.speakingTime}dk</span>
                <span>{week.completed} tamamlandı</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Speaking Confidence Content Component
function SpeakingConfidenceContent() {
  const { averageConfidence, weeklyProgress } = useProgressData();

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 4) return 'text-green-600 bg-green-50';
    if (confidence >= 3) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 4.5) return 'Çok İyi';
    if (confidence >= 4) return 'İyi';
    if (confidence >= 3) return 'Orta';
    if (confidence >= 2) return 'Gelişmeli';
    return 'Başlangıç';
  };

  return (
    <div className='space-y-6'>
      {/* Mevcut Confidence */}
      <div className='text-center p-6 bg-slate-50 rounded-xl'>
        <div className={`text-3xl font-bold mb-2 ${getConfidenceColor(averageConfidence)}`}>
          {averageConfidence.toFixed(1)}/5
        </div>
        <div className='text-lg font-semibold text-foreground'>{getConfidenceText(averageConfidence)}</div>
        <div className='text-sm text-muted-foreground mt-1'>Ortalama Güven Seviyesi</div>
      </div>

      {/* Confidence Timeline */}
      <div>
        <h4 className='font-semibold text-foreground mb-3'>Güven Seviyesi Gelişimi</h4>
        <div className='space-y-3'>
          {weeklyProgress.map((week, index) => (
            <div key={index} className='flex justify-between items-center p-3 bg-slate-50 rounded-lg'>
              <span className='text-sm font-medium'>{week.week}</span>
              <div className='flex items-center gap-2'>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getConfidenceColor(week.confidence)}`}>
                  {week.confidence.toFixed(1)}
                </div>
                <span className='text-sm text-muted-foreground'>{getConfidenceText(week.confidence)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Task Achievement Content Component
function TaskAchievementContent() {
  const { completionRate, recentAchievements, totalAssignments, completedConversations } = useProgressData();

  return (
    <div className='space-y-6'>
      {/* Ana İstatistikler */}
      <div className='grid grid-cols-2 gap-4'>
        <div className='text-center p-4 bg-purple-50 rounded-xl'>
          <div className='text-2xl font-bold text-purple-600'>{completionRate}%</div>
          <div className='text-sm text-purple-600'>Tamamlanma</div>
        </div>
        <div className='text-center p-4 bg-orange-50 rounded-xl'>
          <div className='text-2xl font-bold text-orange-600'>{completedConversations}</div>
          <div className='text-sm text-orange-600'>Tamamlanan</div>
        </div>
      </div>

      {/* Son Başarılar */}
      <div>
        <h4 className='font-semibold text-foreground mb-3'>Son Başarılar</h4>
        <div className='space-y-2'>
          {recentAchievements.length > 0 ? (
            recentAchievements.map((achievement, index) => (
              <div key={index} className='flex justify-between items-center p-3 bg-slate-50 rounded-lg'>
                <div>
                  <div className='font-medium text-sm'>{achievement.title}</div>
                  <div className='text-xs text-muted-foreground'>{achievement.category}</div>
                </div>
                <div className='text-xs text-muted-foreground'>{achievement.date}</div>
              </div>
            ))
          ) : (
            <div className='text-center text-muted-foreground py-4'>
              <div className='text-2xl mb-2'>🎯</div>
              <div className='text-sm'>Henüz tamamlanan görev yok</div>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div>
        <div className='flex justify-between text-sm mb-2'>
          <span className='text-foreground'>Genel İlerleme</span>
          <span className='text-muted-foreground'>
            {completedConversations}/{totalAssignments}
          </span>
        </div>
        <div className='w-full bg-slate-200 rounded-full h-2'>
          <div
            className='bg-purple-500 h-2 rounded-full transition-all duration-300'
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ProgressMetricCard({ variant, isEmpty, className }: ProgressMetricCardProps) {
  const config = variantConfig[variant];
  const { totalSpeakingTime, averageConfidence, completionRate } = useProgressData();

  const getCardData = () => {
    switch (variant) {
      case 'speakingTime':
        return {
          value: `${totalSpeakingTime}dk`,
          label: 'Toplam Konuşma',
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
        };
      case 'speakingConfidence':
        return {
          value: `${averageConfidence.toFixed(1)}/5`,
          label: 'Güven Seviyesi',
          color: 'text-green-600',
          bgColor: 'bg-green-50',
        };
      case 'taskAchievement':
        return {
          value: `${completionRate}%`,
          label: 'Tamamlanma',
          color: 'text-purple-600',
          bgColor: 'bg-purple-50',
        };
    }
  };

  const cardData = getCardData();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            'w-full p-5 rounded-2xl border-0 shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] bg-white cursor-pointer transition-all duration-200 hover:shadow-[0px_8px_40px_0px_rgba(0,0,0,0.08)] active:scale-[0.98]',
            className,
          )}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', cardData.bgColor)}>
                <config.icon className={cn('w-6 h-6', config.iconColor)} />
              </div>
              <div>
                <h3 className='text-base font-semibold text-foreground'>{config.title}</h3>
                <p className='text-sm text-muted-foreground'>{isEmpty ? 'Henüz yeterli veri yok' : cardData.label}</p>
              </div>
            </div>
            <div className='text-right flex flex-col items-end gap-1'>
              {!isEmpty && (
                <div className={cn('text-2xl font-bold whitespace-nowrap', cardData.color)}>{cardData.value}</div>
              )}
              <div className='text-muted-foreground flex items-center gap-1'>
                <span className='text-xs whitespace-nowrap'>Detayları gör</span>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                  <path
                    d='M6 4L10 8L6 12'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <BottomSheetContent className='max-h-[85vh] overflow-y-auto'>
        {/* Header with gradient background */}
        <div className='sticky top-0 z-10 bg-white border-b border-slate-100'>
          <div className='px-6 py-4'>
            <div className='flex items-center gap-4'>
              <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', cardData.bgColor)}>
                <config.icon className={cn('w-6 h-6', config.iconColor)} />
              </div>
              <div className='flex-1'>
                <DialogTitle className='text-lg font-semibold text-foreground mb-1'>{config.title}</DialogTitle>
                <p className='text-sm text-muted-foreground'>{isEmpty ? 'Henüz yeterli veri yok' : cardData.label}</p>
              </div>
              {!isEmpty && (
                <div className={cn('text-right flex flex-col items-end', cardData.color)}>
                  <div className='text-3xl font-bold whitespace-nowrap'>{cardData.value}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='px-6 py-6'>
          {isEmpty ? (
            <EmptyState
              icon={config.emptyIcon}
              primaryMessage={config.emptyPrimary}
              benefitText={config.emptyBenefit}
            />
          ) : (
            <div>
              {variant === 'speakingTime' && <SpeakingTimeContent />}
              {variant === 'speakingConfidence' && <SpeakingConfidenceContent />}
              {variant === 'taskAchievement' && <TaskAchievementContent />}
            </div>
          )}
        </div>
      </BottomSheetContent>
    </Dialog>
  );
}
