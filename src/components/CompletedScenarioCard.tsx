import { Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ProgressRing } from '@/components/ui/progress-ring';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { type Assignment } from '@/types/assignment';

interface CompletedScenarioCardProps {
  assignment: Assignment;
  speakingTime?: string; // Format: "X dk Y sn"
  className?: string;
}

export function CompletedScenarioCard({ assignment, speakingTime, className }: CompletedScenarioCardProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Card hasImage className={cn('relative overflow-hidden transition-shadow hover:shadow-md', className)}>
      <Link to={`/completed/${assignment.id}`}>
        {/* Senaryo Resmi Katmanı */}
        <div className='relative h-48 w-full overflow-hidden'>
          <img src={assignment.imageUrl} alt={assignment.title} className='h-full w-full object-cover' />
          <div className='absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent' />

          {/* Konuşma Süresi Halkası */}
          {speakingTime && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='absolute right-3 top-3 cursor-pointer'>
                    <ProgressRing value={100} size={48} strokeWidth={4} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className='flex items-center gap-1'>
                    <Clock className='size-3' />
                    {speakingTime}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        <CardContent hasImage className='p-4 space-y-3'>
          {/* Başlık */}
          <h3 className='font-semibold text-lg leading-tight'>{assignment.title}</h3>

          {/* Meta Veri Rozetleri */}
          <div className='flex flex-wrap items-center gap-2'>
            {assignment.dueDate && (
              <Badge variant='outline' className='text-xs'>
                <Calendar className='mr-1 size-3' />
                {formatDate(assignment.dueDate)}
              </Badge>
            )}
            <Badge variant='outline' className='text-xs'>
              <Tag className='mr-1 size-3' />
              {assignment.category}
            </Badge>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
