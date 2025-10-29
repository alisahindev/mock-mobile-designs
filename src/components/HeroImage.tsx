import { cn } from '@/lib/utils';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function HeroImage({ src, alt, className }: HeroImageProps) {
  return (
    <div className={cn('relative h-64 w-full overflow-hidden', className)}>
      <img src={src} alt={alt} className='h-full w-full object-cover' />
    </div>
  );
}
