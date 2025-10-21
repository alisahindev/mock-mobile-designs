import { Calendar, Clock } from 'lucide-react';
import type { Assignment } from '../types/assignment';

// Progress Circle Component
interface ProgressCircleProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

function ProgressCircle({ progress, size = 40, strokeWidth = 3, className = '' }: ProgressCircleProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className='transform -rotate-90' aria-hidden='true'>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='none'
          className='text-gray-200'
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='none'
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className='text-green-500 transition-all duration-500 ease-in-out'
          strokeLinecap='round'
        />
      </svg>
      {/* Progress text */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <span className='text-xs font-semibold text-gray-700'>{Math.round(progress)}%</span>
      </div>
    </div>
  );
}

interface AssignmentCardProps {
  assignment: Assignment;
  onClick: () => void;
}

export default function AssignmentCard({ assignment, onClick }: AssignmentCardProps) {
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
      className='w-full relative rounded-2xl shadow-sm border border-gray-100 p-2 hover:shadow-lg hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 group overflow-hidden min-h-[160px]'
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
      <div className='absolute inset-0 bg-linear-to-br from-white/60 via-white/50 to-white/40' />

      <div className='relative z-10 h-full flex flex-col'>
        <span className='inline-flex items-center gap-1 text-gray-700 bg-white/80 p-1 w-fit text-xs rounded-md backdrop-blur-sm shadow-sm border border-white/20'>
          <Clock className='w-3 h-3' aria-hidden='true' />
          {assignment.duration} dk
        </span>
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
            <span className='p-1 rounded-md bg-amber-100/95 text-amber-800 font-medium backdrop-blur-sm shadow-sm border border-amber-200/30'>
              {assignment.category}
            </span>
            {assignment.dueDate && (
              <span
                className={`inline-flex items-center gap-1 p-1 rounded-md font-medium backdrop-blur-sm shadow-sm border ${
                  isOverdue(assignment.dueDate)
                    ? 'bg-red-100/95 text-red-800 border-red-200/30'
                    : 'bg-blue-100/95 text-blue-800 border-blue-200/30'
                }`}
              >
                <Calendar className='w-3 h-3' aria-hidden='true' />
                {formatDueDate(assignment.dueDate)}
              </span>
            )}
            <ProgressCircle
              progress={getProgressValue(assignment.status)}
              size={36}
              strokeWidth={2.5}
              className='shrink-0'
            />
          </div>
        </div>
      </div>
    </button>
  );
}
