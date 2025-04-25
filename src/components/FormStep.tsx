
import React from 'react';
import { cn } from '@/lib/utils';

interface FormStepProps {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
}

const FormStep = ({ children, isActive, className }: FormStepProps) => {
  if (!isActive) return null;
  
  return (
    <div className={cn("animate-fade-in", className)}>
      {children}
    </div>
  );
};

export default FormStep;
