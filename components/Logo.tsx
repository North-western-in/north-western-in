'use client';

interface LogoProps {
  className?: string;
  size?: number; // Sizing helper for font size
}

export default function Logo({ className = '', size }: LogoProps) {
  // If size is provided, we can map it to a specific tailwind class or inline style
  // Otherwise, default to text-lg / text-xl
  const sizeStyle = size ? { fontSize: `${size * 0.45}px` } : undefined;

  return (
    <span
      className={`font-display font-extrabold tracking-wider bg-gradient-to-r from-gold-100 via-gold-400 to-gold-600 bg-clip-text text-transparent select-none whitespace-nowrap transition-all duration-300 ${className}`}
      style={sizeStyle}
    >
      NW Innovators
    </span>
  );
}
