import * as React from 'react';

import { cn } from '@/lib/utils';

interface CardProps extends React.ComponentProps<'div'> {
  hasImage?: boolean;
}

function Card({ className, hasImage, ...props }: CardProps) {
  return (
    <div
      data-slot='card'
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm',
        hasImage ? 'pb-6' : 'py-6',
        className,
      )}
      {...props}
    />
  );
}

interface CardHeaderProps extends React.ComponentProps<'div'> {
  hasImage?: boolean;
}

function CardHeader({ className, hasImage, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot='card-header'
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        !hasImage && 'px-6',
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot='card-title' className={cn('leading-none font-semibold', className)} {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot='card-description' className={cn('text-muted-foreground text-sm', className)} {...props} />;
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-action'
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  );
}

interface CardContentProps extends React.ComponentProps<'div'> {
  hasImage?: boolean;
}

function CardContent({ className, hasImage, ...props }: CardContentProps) {
  return <div data-slot='card-content' className={cn(!hasImage && 'px-6', className)} {...props} />;
}

interface CardFooterProps extends React.ComponentProps<'div'> {
  hasImage?: boolean;
}

function CardFooter({ className, hasImage, ...props }: CardFooterProps) {
  return (
    <div
      data-slot='card-footer'
      className={cn('flex items-center [.border-t]:pt-6', !hasImage && 'px-6', className)}
      {...props}
    />
  );
}

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
