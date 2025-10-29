import { CheckCircle2, Clock, TrendingUp } from 'lucide-react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface ProgressData {
  speakingTime: {
    total: string; // "X sa Y dk"
    weeklyChange: string; // "bu hafta Z dk arttı!"
    graphData?: Array<{ date: string; value: number }>;
  };
  confidence: {
    trend: string; // "Düzenli olarak artıyor"
    graphData?: Array<{ date: string; value: number }>;
  };
  taskAchievement: {
    average: string; // "Ort: Z hedef/oturum"
    recentAchievements?: Array<{
      scenarioTitle: string;
      learningObjective: string;
    }>;
  };
}

interface ProgressAccordionProps {
  data: ProgressData;
  className?: string;
}

export function ProgressAccordion({ data, className }: ProgressAccordionProps) {
  return (
    <Accordion type='multiple' className={cn('w-full px-4', className)}>
      {/* Konuşma Süresi Akordiyonu */}
      <AccordionItem value='speakingTime'>
        <AccordionTrigger>
          <div className='flex items-center gap-2'>
            <Clock className='size-4' />
            <div className='flex-1 text-left'>
              <p className='font-medium'>Konuşma Süresi</p>
              <p className='text-xs text-muted-foreground'>
                {data.speakingTime.total} – {data.speakingTime.weeklyChange}
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className='space-y-2'>
            {data.speakingTime.graphData ? (
              <div className='h-32 rounded-md bg-secondary/50 p-4'>
                {/* TODO: Grafik gösterimi */}
                <p className='text-sm text-muted-foreground'>Grafik gösterimi yakında eklenecek</p>
              </div>
            ) : (
              <p className='text-sm text-muted-foreground'>Detaylı veriler yakında eklenecek</p>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Konuşma Güveni Akordiyonu */}
      <AccordionItem value='confidence'>
        <AccordionTrigger>
          <div className='flex items-center gap-2'>
            <TrendingUp className='size-4' />
            <div className='flex-1 text-left'>
              <p className='font-medium'>Konuşma Güveni</p>
              <p className='text-xs text-muted-foreground'>{data.confidence.trend}</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className='space-y-2'>
            {data.confidence.graphData ? (
              <div className='h-32 rounded-md bg-secondary/50 p-4'>
                {/* TODO: Grafik gösterimi */}
                <p className='text-sm text-muted-foreground'>Grafik gösterimi yakında eklenecek</p>
              </div>
            ) : (
              <p className='text-sm text-muted-foreground'>Detaylı veriler yakında eklenecek</p>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Görev Başarımı Akordiyonu */}
      <AccordionItem value='taskAchievement'>
        <AccordionTrigger>
          <div className='flex items-center gap-2'>
            <CheckCircle2 className='size-4' />
            <div className='flex-1 text-left'>
              <p className='font-medium'>Görev Başarımı</p>
              <p className='text-xs text-muted-foreground'>{data.taskAchievement.average}</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className='space-y-2'>
            {data.taskAchievement.recentAchievements && data.taskAchievement.recentAchievements.length > 0 && (
              <div className='space-y-3'>
                {data.taskAchievement.recentAchievements.map((achievement, index) => (
                  <div key={index} className='rounded-md border p-3'>
                    <p className='font-medium text-sm'>{achievement.scenarioTitle}</p>
                    <p className='text-xs text-muted-foreground mt-1'>{achievement.learningObjective}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
