"use client";

import * as React from 'react';

import { cn } from '@/lib/utils';

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  className?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          ref={ref}
          data-slot="switch"
          className={cn("peer sr-only", className)}
          {...props}
        />
        <div className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out data-[state=checked]:bg-[#228BE6] data-[state=unchecked]:bg-[#373A40]" data-state={props.checked ? "checked" : "unchecked"}>
          <div
            data-slot="switch-thumb"
            className="pointer-events-none block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            data-state={props.checked ? "checked" : "unchecked"}
          />
        </div>
      </label>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
