import { cn } from '@/lib/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    variant?: 'default' | 'card' | 'minimal' | 'bordered';
    size?: 'sm' | 'md' | 'lg';
    colorClass?: string;
  }
>(({ className, variant = 'card', size = 'md', colorClass, ...props }, ref) => {
  const variantConfig = {
    default:
      'bg-white border border-slate-200/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-out',
    card: 'bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out',
    minimal:
      'bg-transparent border-b border-slate-200/60 rounded-none shadow-none hover:bg-slate-50/40 transition-all duration-200 ease-out',
    bordered:
      'bg-white border-2 border-slate-200/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-out',
  };

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn('overflow-hidden transition-all duration-300', variantConfig[variant], colorClass, className)}
      {...props}
    />
  );
});
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    icon?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'card' | 'minimal' | 'bordered';
    description?: string;
  }
>(({ className, children, icon, size = 'md', variant = 'card', description, ...props }, ref) => {
  const sizeConfig = {
    sm: {
      button: 'px-5 py-3.5 text-sm min-h-[48px] font-normal',
      content: 'px-5 pb-4 pt-3 text-sm leading-relaxed',
      title: 'text-sm',
    },
    md: {
      button: 'px-6 py-4.5 text-base min-h-[56px] font-normal',
      content: 'px-6 pb-5 pt-4 text-base leading-relaxed',
      title: 'text-base',
    },
    lg: {
      button: 'px-8 py-5.5 text-lg min-h-[64px] font-normal',
      content: 'px-8 pb-6 pt-5 text-lg leading-relaxed',
      title: 'text-lg',
    },
  };

  const variantConfig = {
    default: 'hover:bg-slate-50/80',
    card: 'hover:bg-white/60',
    minimal: 'hover:bg-slate-50/60',
    bordered: 'hover:bg-slate-50/40',
  };

  const currentSize = sizeConfig[size];
  const currentVariant = variantConfig[variant];

  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between text-left transition-all duration-300 ease-out',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2',
          'group active:scale-[0.99]',
          'relative overflow-hidden',
          currentSize.button,
          currentVariant,
          '[&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        <div className='flex items-center gap-3 flex-1 min-w-0'>
          {icon && (
            <span className={cn('shrink-0 transition-all duration-300 ease-out text-slate-600')} aria-hidden='true'>
              {icon}
            </span>
          )}
          <div className='flex flex-col'>
            {description && <span className='text-slate-500 text-[9px]'>{description}</span>}
            <span className={cn('text-slate-800 transition-colors duration-300 truncate', currentSize.title)}>
              {children}
            </span>
          </div>
        </div>

        <ChevronDown
          className={cn(
            'text-slate-500 transition-transform duration-300 ease-out',
            'group-data-[state=open]:rotate-180',
          )}
          aria-hidden='true'
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    size?: 'sm' | 'md' | 'lg';
  }
>(({ className, children, size = 'md', ...props }, ref) => {
  const sizeConfig = {
    sm: 'px-5 pb-4 pt-3 text-sm leading-relaxed',
    md: 'px-6 pb-5 pt-4 text-base leading-relaxed',
    lg: 'px-8 pb-6 pt-5 text-lg leading-relaxed',
  };

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className='overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
      {...props}
    >
      <div
        className={cn(
          'text-slate-600 leading-relaxed transition-colors duration-300',
          'border-t border-slate-100/80',
          sizeConfig[size],
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// Additional utility components
export function AccordionGroup({
  children,
  className = '',
  title,
  description,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className={cn('space-y-5', className)}>
      {(title || description) && (
        <div className='space-y-3'>
          {title && <h3 className='text-xl font-semibold text-slate-800 tracking-tight'>{title}</h3>}
          {description && <p className='text-base text-slate-600 leading-relaxed'>{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
