
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex w-full justify-between mb-8">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        
        return (
          <div key={index} className="flex flex-col items-center relative flex-1 step-indicator">
            <div 
              className={cn(
                "w-10 h-10 rounded-full border-2 flex items-center justify-center z-10",
                isActive ? "step-active" : 
                isCompleted ? "step-completed" : "step-upcoming"
              )}
            >
              {isCompleted ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className={cn(
              "mt-2 text-sm",
              isActive || isCompleted ? "text-white" : "text-gray-500"
            )}>
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
