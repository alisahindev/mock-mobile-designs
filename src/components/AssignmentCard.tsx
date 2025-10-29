import { Clock, Tag, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ProgressRing } from '@/components/ui/progress-ring';
import { cn } from '@/lib/utils';
import { type Assignment } from '@/types/assignment';

interface AssignmentCardProps {
  assignment: Assignment;
  showSocialProof?: boolean;
  className?: string;
}

export function AssignmentCard({ assignment, showSocialProof = false, className }: AssignmentCardProps) {
  const isInProgress = assignment.status === 'in_progress';
  const progress = isInProgress ? 45 : 0; // Mock progress value

  const formatDueDate = (dueDate?: string) => {
    if (!dueDate) return null;
    const date = new Date(dueDate);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'short',
    });
  };

  return (
    <Card
      hasImage
      className={cn(
        'relative overflow-hidden transition-shadow hover:shadow-md',
        isInProgress && 'border-primary/50 bg-primary/5',
        className,
      )}
    >
      <Link to={`/assignments/${assignment.id}`}>
        {/* Senaryo Resmi Katmanı */}
        <div className='relative h-48 w-full overflow-hidden'>
          <img src={assignment.imageUrl} alt={assignment.title} className='h-full w-full object-cover' />
          <div className='absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent' />

          {/* "Devam Ediyor" Rozeti */}
          {isInProgress && (
            <div className='absolute left-3 top-3'>
              <Badge variant='secondary' className='bg-primary/90 text-primary-foreground'>
                Devam Ediyor
              </Badge>
            </div>
          )}

          {/* İlerleme Halkası */}
          {isInProgress && (
            <div className='absolute right-3 top-3'>
              <ProgressRing value={progress} size={48} strokeWidth={4} />
            </div>
          )}
        </div>

        <CardContent hasImage className='p-4 space-y-3'>
          {/* Başlık */}
          <h3 className='font-semibold text-lg leading-tight'>{assignment.title}</h3>

          {/* Öğrenme Hedefi */}
          <div className='flex items-start gap-2'>
            <Target className='mt-0.5 size-4 shrink-0 text-muted-foreground' />
            <p className='text-sm text-muted-foreground flex-1'>{assignment.learningObjective}</p>
          </div>

          {/* Sosyal Kanıt Mesajı */}
          {showSocialProof && assignment.socialProof?.shouldShow && assignment.socialProof.message && (
            <div className='rounded-md bg-primary/10 p-2 text-xs text-primary'>{assignment.socialProof.message}</div>
          )}

          {/* Meta Veri Rozetleri */}
          <div className='flex flex-wrap items-center gap-2'>
            <Badge variant='outline' className='text-xs'>
              <Tag className='mr-1 size-3' />
              {assignment.category}
            </Badge>
            {assignment.dueDate && (
              <Badge variant='outline' className='text-xs'>
                <Clock className='mr-1 size-3' />
                {formatDueDate(assignment.dueDate)}
              </Badge>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
