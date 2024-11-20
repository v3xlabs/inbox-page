import { cx } from 'class-variance-authority';
import type { InputHTMLAttributes } from 'react';
import { forwardRef, useId } from 'react';

type InputProperties = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProperties>(
    ({ className, 'aria-label': ariaLabel, ...properties }, reference) => {
        const labelId = useId();

        return (
            <>
                <label
                    className="flex flex-col gap-1"
                    id={'l' + labelId}
                    htmlFor={'i' + labelId}
                >
                    <span className="text-sm text-text-secondary">
                        {ariaLabel}
                    </span>
                    <input
                        ref={reference}
                        aria-label={ariaLabel}
                        aria-labelledby={'l' + labelId}
                        id={'i' + labelId}
                        className={cx(
                            'text-base font-sans px-2 py-1',
                            className
                        )}
                        {...properties}
                    />
                </label>
            </>
        );
    }
);
