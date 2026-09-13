import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

export const buttonStyles = {
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50',
  size: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-[15px]',
    lg: 'px-7 py-4 text-base',
  },
  variant: {
    primary: 'bg-primary text-on-primary shadow-lg shadow-primary/25 hover:bg-primary-dim hover:shadow-xl hover:shadow-primary/30',
    secondary: 'border border-outline-variant bg-white text-on-surface shadow-sm hover:border-outline hover:bg-surface-container-low',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5',
    ghost: 'text-on-surface hover:bg-surface-container-high',
  },
} as const;

export function buttonClass(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', className = '') {
  return `${buttonStyles.base} ${buttonStyles.size[size]} ${buttonStyles.variant[variant]} ${className}`;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClass(variant, size, className)} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
