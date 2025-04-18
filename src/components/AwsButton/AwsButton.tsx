import React from 'react';
import '../../styles/awsButton.css';

interface AwsButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const AwsButton: React.FC<AwsButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  return (
    <button 
      className={`aws-btn ${className}`} 
      onClick={onClick}
      type={type}
    >
      <span className="aws-btn__content">
        {children}
      </span>
      <span className="aws-btn__wrapper">
        <span className="aws-btn__shadow"></span>
        <span className="aws-btn__edge"></span>
        <span className="aws-btn__front-edge"></span>
        <span className="aws-btn__front"></span>
      </span>
    </button>
  );
};

export default AwsButton;