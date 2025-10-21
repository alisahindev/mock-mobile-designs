import type { AudioState } from '@/hooks/useAudioPlayer';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Loader2Icon, PauseIcon, PlayIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import type { HelpfulPhrase } from '../types/assignment';

interface HelpfulPhraseItemProps {
  phrase: HelpfulPhrase;
  showTooltipOnFirst?: boolean;
  isFirst?: boolean;
}

export default function HelpfulPhraseItem({
  phrase,
  showTooltipOnFirst = true,
  isFirst = false,
}: HelpfulPhraseItemProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip on first item for 3 seconds
  useEffect(() => {
    if (showTooltipOnFirst && isFirst) {
      setShowTooltip(true);
      const timer = setTimeout(() => setShowTooltip(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showTooltipOnFirst, isFirst]);

  return (
    <Tooltip.Provider>
      <Tooltip.Root open={showTooltip} delayDuration={0}>
        <div className='relative group'>
          <div className='relative bg-white rounded-[15px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] p-4'>
            {/* Sol taraf - İkon ve içerik */}
            <div className='flex items-start gap-3'>
              {/* Ana içerik */}
              <div className='flex-1 min-w-0'>
                <h3 className='text-[14px] font-normal text-[#24252c] leading-normal mb-1'>{phrase.text}</h3>
                <p className='text-[11px] font-normal text-[#6e6a7c] leading-normal'>Helpful Phrases</p>
              </div>
              <RenderToggleButton />
            </div>
          </div>

          {showTooltip && (
            <Tooltip.Portal>
              <Tooltip.Content
                className='z-50 bg-white border border-gray-200 text-gray-800 text-xs px-4 py-3 rounded-lg shadow-lg animate-fade-in data-[state=delayed-open]:animate-fade-in data-[state=closed]:animate-fade-out hover:bg-gray-50 transition-all duration-300'
                sideOffset={12}
              >
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 bg-primary rounded-full animate-pulse' />
                  <span className='font-medium'>Dinle ve tekrar ederek pratik yap!</span>
                </div>
                <Tooltip.Arrow className='fill-white' />
              </Tooltip.Content>
            </Tooltip.Portal>
          )}
        </div>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

const RenderToggleButton = () => {
  const [state, setState] = useState<AudioState>('paused');

  const play = useCallback(() => {
    setState('playing');
  }, []);
  const pause = useCallback(() => {
    setState('paused');
  }, []);

  const toggle = useCallback(() => {
    if (state === 'playing') {
      pause();
    } else {
      play();
    }
  }, [state, play, pause]);

  return (
    <div className='bg-[#ffe4f2] rounded-[7px] shrink-0'>
      <div className='bg-pink-500 rounded p-2' onClick={toggle}>
        {state === 'paused' ? (
          <PlayIcon className='w-4 h-4 text-white fill-white' />
        ) : (
          <PauseIcon className='w-4 h-4 text-white fill-white' />
        )}
        {state === 'loading' ? <Loader2Icon className='w-4 h-4 text-white' /> : null}
      </div>
    </div>
  );
};
