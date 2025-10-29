import { Bot, MapPin, User } from 'lucide-react';

import { HelpfulPhraseItem } from '@/components/HelpfulPhraseItem';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { type AssignmentDetail } from '@/types/assignment';

interface ScenarioAccordionProps {
  detail: AssignmentDetail;
  defaultOpen?: string[];
}

export function ScenarioAccordion({ detail, defaultOpen = [] }: ScenarioAccordionProps) {
  return (
    <Accordion type='multiple' defaultValue={defaultOpen} className='w-full px-4'>
      {/* Ortam Akordiyonu */}
      <AccordionItem value='setting'>
        <AccordionTrigger>
          <div className='flex items-center gap-2'>
            <MapPin className='size-4' />
            <span>Ortam</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-sm text-muted-foreground'>{detail.setting}</p>
        </AccordionContent>
      </AccordionItem>

      <Separator />

      {/* Rolünüz Akordiyonu */}
      <AccordionItem value='studentRole'>
        <AccordionTrigger>
          <div className='flex items-center gap-2'>
            <User className='size-4' />
            <span>Rolünüz</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className='space-y-2'>
            <p className='font-medium'>{detail.studentRole.name}</p>
            <p className='text-sm text-muted-foreground'>{detail.studentRole.description}</p>
            {detail.studentRole.goals.length > 0 && (
              <div className='mt-3'>
                <p className='mb-2 text-sm font-medium'>Hedefleriniz:</p>
                <ul className='list-disc space-y-1 pl-5 text-sm text-muted-foreground'>
                  {detail.studentRole.goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>

      <Separator />

      {/* AI Rolü Akordiyonu */}
      <AccordionItem value='aiRole'>
        <AccordionTrigger>
          <div className='flex items-center gap-2'>
            <Bot className='size-4' />
            <span>AI Rolü</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className='space-y-2'>
            <p className='font-medium'>{detail.aiRole.name}</p>
            <p className='text-sm text-muted-foreground'>{detail.aiRole.description}</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <Separator />

      {/* Yardımcı İfadeler Akordiyonu */}
      <AccordionItem value='helpfulPhrases' defaultChecked>
        <AccordionTrigger>
          <div className='flex items-center gap-2'>
            <span>Yardımcı İfadeler</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className='space-y-2'>
            {detail.helpfulPhrases.map((phrase, index) => (
              <HelpfulPhraseItem key={phrase.id} phrase={phrase} showShadowingTip={index === 0} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
