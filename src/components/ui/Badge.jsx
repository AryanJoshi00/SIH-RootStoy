import { cn, getStatusBadgeClass } from '../../lib/utils';

const Badge = ({ 
  children, 
  className = '', 
  variant = 'default',
  status = null,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
  
  const variants = {
    default: 'bg-earth-100 text-earth-800',
    success: 'bg-emerald-100 text-emerald-800',
    warning: 'bg-amber-100 text-amber-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800'
  };
  
  // If status is provided, use it to determine the variant
  const finalVariant = status ? getStatusBadgeClass(status) : variants[variant];
  
  return (
    <span
      className={cn(
        baseClasses,
        finalVariant,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
