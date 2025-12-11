import { ReactNode } from 'react';
import { cn } from '../../utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('max-w-container mx-auto px-4 md:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
