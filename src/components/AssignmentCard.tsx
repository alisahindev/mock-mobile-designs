import { Calendar, CheckCircle, Clock, Star } from 'lucide-react';
import type { Assignment } from '../types/assignment';
import {
  getCompletionMessage,
  getMitigatedMessage,
  isVulnerableStudent,
  shouldShowSocialProof,
} from '../utils/socialProof';
import Badge from './ui/Badge';

// Progress Circle Component - using existing pattern from TaskRow
function ProgressCircle({ progress, size = 36 }: { progress: number; size?: number }) {
  const clamped = Math.max(0, Math.min(100, progress));
  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (clamped / 100) * circumference;

  // If completed (100%), show checkmark instead of progress circle
  if (clamped === 100) {
    return (
      <div
        className='relative bg-green-500 rounded-full flex items-center justify-center shadow-lg'
        style={{ width: size, height: size }}
        aria-label='Tamamlandı'
        role='img'
      >
        <CheckCircle className='w-5 h-5 text-white' />
      </div>
    );
  }

  return (
    <div className='relative' style={{ width: size, height: size }} aria-label={`${clamped}% tamamlandı`} role='img'>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className='block'>
        <circle cx={size / 2} cy={size / 2} r={radius} fill='none' stroke='var(--border)' strokeWidth='6' />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill='none'
          stroke='var(--primary)'
          strokeWidth='6'
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap='round'
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className='absolute inset-0 flex items-center justify-center'>
        <span className='text-xs text-foreground' aria-hidden='true'>
          {clamped}%
        </span>
      </div>
    </div>
  );
}

interface AssignmentCardProps {
  assignment: Assignment;
  onClick: () => void;
  userProfile?: {
    age?: number;
    hasSocialAnxiety?: boolean;
    isPerfectionist?: boolean;
    isFromCompetitiveEnvironment?: boolean;
    isLowerPerforming?: boolean;
  };
}

export default function AssignmentCard({ assignment, onClick, userProfile }: AssignmentCardProps) {
  const formatDueDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'short',
    });
  };

  const isOverdue = (dateString: string) => {
    const dueDate = new Date(dateString);
    const today = new Date();
    return dueDate < today && assignment.status !== 'completed';
  };

  const getProgressValue = (status: string) => {
    switch (status) {
      case 'not_started':
        return 0;
      case 'in_progress':
        return 50;
      case 'completed':
        return 100;
      default:
        return 0;
    }
  };

  return (
    <button
      onClick={onClick}
      className='w-full relative rounded-2xl shadow-sm border border-gray-100 p-2 hover:shadow-lg hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 group overflow-hidden min-h-[200px]'
      aria-label={`${assignment.title} görevini görüntüle`}
    >
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${assignment.imageUrl})`,
          filter: 'blur(1px)',
        }}
      />
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-linear-to-br from-white/80 via-white/60 to-white/40' />

      <div className='relative z-10 h-full flex flex-col'>
        {/* Top Row with Duration and Progress */}
        <div className='flex justify-between items-start mb-3'>
          <span className='inline-flex items-center gap-1 text-gray-700 bg-white/80 p-1 w-fit text-xs rounded-md backdrop-blur-sm shadow-sm border border-white/20'>
            <Clock className='w-3 h-3' aria-hidden='true' />
            {assignment.duration} dk
          </span>
          <ProgressCircle progress={getProgressValue(assignment.status)} size={36} />
        </div>
        {/* Header with Image and Title */}
        <div className='flex items-center gap-3 mb-3'>
          <div className='flex-1 min-w-0'>
            <h3 className='font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors text-xl leading-tight'>
              {assignment.title}
            </h3>
            <p className='text-sm text-muted-foreground line-clamp-2 mt-1'>{assignment.learningObjective}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className='flex-1 flex flex-col justify-between'>
          <div className='flex items-center gap-2 text-xs flex-wrap'>
            <Badge variant='warning' size='sm'>
              {assignment.category}
            </Badge>
            {assignment.dueDate && (
              <Badge
                variant={isOverdue(assignment.dueDate) ? 'error' : 'default'}
                size='sm'
                className='flex items-center gap-1'
              >
                <Calendar className='w-3 h-3' aria-hidden='true' />
                {formatDueDate(assignment.dueDate)}
              </Badge>
            )}
          </div>

          {/* Social Proof Section - Research-Based Implementation */}
          {assignment.socialProof &&
            shouldShowSocialProof({
              userAge: userProfile?.age || 15,
              completionRate: assignment.socialProof.completionRate,
              completedCount: assignment.socialProof.completedCount,
              totalClassSize: assignment.socialProof.totalClassSize,
            }) &&
            assignment.status !== 'completed' && (
              <div className='mt-3 pt-3 border-t border-white/30'>
                {/* Positive, Non-Comparative Message with Risk Mitigation */}
                <div className='mb-2'>
                  <p className='text-xs text-green-700 font-medium bg-green-50/80 px-2 py-1 rounded-md backdrop-blur-sm border border-green-200/50'>
                    {getMitigatedMessage(assignment.socialProof.message, isVulnerableStudent(userProfile || {}))}
                  </p>
                </div>

                {/* Peer Avatars and Completion Info */}
                <div className='flex items-center justify-between text-xs text-gray-600 flex-wrap gap-2'>
                  <div className='flex items-center gap-2 min-w-0 flex-1'>
                    <div className='flex -space-x-1 shrink-0'>
                      {assignment.socialProof.userAvatars.slice(0, 3).map((avatar, index) => (
                        <img
                          key={index}
                          src={avatar}
                          alt={`Sınıf arkadaşı ${index + 1}`}
                          className='w-5 h-5 rounded-full border-2 border-white shadow-sm'
                        />
                      ))}
                      {assignment.socialProof.userAvatars.length > 3 && (
                        <div className='w-5 h-5 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600'>
                          +{assignment.socialProof.userAvatars.length - 3}
                        </div>
                      )}
                    </div>
                    <span className='text-gray-600 truncate'>
                      {getCompletionMessage(
                        assignment.socialProof.completedCount,
                        assignment.socialProof.totalClassSize,
                      )}
                    </span>
                  </div>
                  <div className='flex items-center gap-1 shrink-0'>
                    <Star className='w-3 h-3 fill-yellow-400 text-yellow-400' aria-hidden='true' />
                    <span className='font-medium'>{assignment.socialProof.rating}</span>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </button>
  );
}
