import { cn } from '../../lib/utils';

const Button = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'default',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500',
    secondary: 'bg-earth-200 hover:bg-earth-300 text-earth-800 focus:ring-earth-400',
    outline: 'border border-earth-300 bg-transparent hover:bg-earth-50 text-earth-700 focus:ring-earth-400',
    ghost: 'bg-transparent hover:bg-earth-100 text-earth-700 focus:ring-earth-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
