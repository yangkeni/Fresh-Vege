import { Button } from 'antd';
import React, { FC } from 'react';
import style from './style.module.scss';

interface NormalButtonProps {
  content?: string;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}

const NormalButton: FC<NormalButtonProps> = ({
  content,
  loading,
  onClick,
  className,
  ...props
}) => {
  return (
    <Button
      className={`${style['normal-button']} ${className ? className : ''}`}
      loading={loading}
      onClick={onClick}
    >
      {content}
      {props.children}
    </Button>
  );
};

export default NormalButton;
