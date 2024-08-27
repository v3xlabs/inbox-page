/* eslint-disable no-undef */
/* eslint-disable sonarjs/no-duplicate-string */
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '../../utils/cva';

export const buttonVariants = cva(
    [
        'unstyled inline-flex items-center justify-center', // Layout
        'duration-150 ease-in-out [transition-property:_--bg-from,--bg-to]', // Transition
        'active:scale-95 active:brightness-95', // Active state
        'disabled:scale-100 disabled:cursor-not-allowed disabled:brightness-75', // Disabled state
    ],
    {
        variants: {
            size: {
                icon: 'size-10 rounded',
                none: '',
                sm: 'rounded px-3 py-1 text-sm font-medium',
                default: 'rounded px-4 py-2 text-base font-medium',
            },
            variant: {
                default: [
                    'text-text-inverse bg-primary', // Default
                    'not-disabled:hover:[--bg-from:#f43355] not-disabled:hover:[--bg-to:#ff6d0a]', // Hover
                    'focus-visible:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF3E8]', // Focus
                ],
                secondary: [
                    'text-text bg-secondary', // Default
                    'not-disabled:hover:text-[#ED3D50] not-disabled:hover:[--bg-from:#ffd067] not-disabled:hover:[--bg-to:#ff9b7c]', // Hover
                    'focus-visible:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E95666]', // Focus
                ],
                link: [
                    'bg-none text-text underline', // Default
                    'hover:text-[#E95666]', // Hover
                    'focus-visible:text-[#E95666] focus-visible:outline-none', // Focus
                ],
                ghost: [
                    'text-text', // Default
                    'not-disabled:hover:bg-[#FFDBCA]/80', // Hover
                    'disabled:text-text/80', // Disabled
                    'focus-visible:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E95666]', // Focus
                ],
                ghostOutline: [
                    'bg-[#FFDBCA]/80 text-text', // Default
                    'border-2 border-text', // Hover
                    'focus-visible:border-dashed focus-visible:outline-none', // Focus
                ],
            },
        },
        defaultVariants: {
            size: 'default',
            variant: 'default',
        },
    }
);

export interface ButtonProperties
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProperties>(
    (
        { className, variant, size, asChild = false, ...properties },
        reference
    ) => {
        const Comp = asChild ? Slot : 'button';

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={reference}
                {...properties}
            />
        );
    }
);

Button.displayName = 'Button';
