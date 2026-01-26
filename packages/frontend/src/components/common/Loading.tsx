import React from 'react';
import './common.css';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

const Loading: React.FC<LoadingProps> = ({
  message = 'Loading...',
  size = 'medium',
}) => {
  return (
    <div className={`loading loading--${size}`}>
      <div className="loading__spinner"></div>
      {message && <p className="loading__message">{message}</p>}
    </div>
  );
};

export default Loading;
