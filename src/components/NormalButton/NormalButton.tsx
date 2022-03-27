import { Button } from 'antd';
import React, { FC } from 'react';
import style from './style.module.scss';

interface NormalButtonProps {
  content?: string;
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset";
  onClick?: (e?: any) => void;
  className?: string;
}

const NormalButton: FC<NormalButtonProps> = ({
  content,
  loading,
  htmlType,
  onClick,
  className,
  ...props
}) => {
  return (
    <Button
      className={`${style['normal-button']} ${className ? className : ''}`}
      loading={loading}
      onClick={onClick}
      htmlType={htmlType}
    >
      {content}
      {props.children}
    </Button>
  );
};

export default NormalButton;
