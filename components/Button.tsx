import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-medium transition-all duration-200 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-primary to-secondary-container text-on-primary rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl',
    secondary:
      'bg-surface-container text-on-surface border border-outline hover:bg-surface-container-high shadow-sm hover:shadow-md',
    outline:
      'border-2 border-primary text-primary hover:bg-primary/10 hover:text-on-primary',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
