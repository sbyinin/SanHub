import React from 'react';

// --- Primitives ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  isLoading,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0f1117] focus:ring-sky-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/10",
    outline: "border border-white/20 text-white hover:bg-white/5",
    glass: "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs rounded-full",
    md: "h-10 px-5 text-sm rounded-full",
    lg: "h-12 px-8 text-base rounded-full",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
};

export const Surface: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div 
    className={`bg-[hsl(var(--card)/0.6)] border border-[hsl(var(--border)/0.5)] backdrop-blur-xl rounded-2xl shadow-xl ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => (
  <input
    className={`w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all ${className}`}
    {...props}
  />
);

export const Badge: React.FC<{ children: React.ReactNode, variant?: 'default' | 'outline' }> = ({ children, variant = 'default' }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
    variant === 'default' 
      ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' 
      : 'border border-white/20 text-white/60'
  }`}>
    {children}
  </span>
);

export const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-light text-white tracking-tight">{title}</h2>
    {subtitle && <p className="text-white/40 text-sm mt-1">{subtitle}</p>}
  </div>
);
