import React from 'react';

interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6; // Heading levels (h1 to h6)
  className?: string; // Optional custom class
  align?: 'left' | 'center' | 'right'; // Alignment options
}

const Heading: React.FC<HeadingProps> = ({ text, level = 1, className = '', align = 'left' }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements; // Dynamically set the heading tag (h1, h2, etc.)

  return (
    <Tag className={`text-${align} ${className}`}>
      {text}
    </Tag>
  );
};

export default Heading;
