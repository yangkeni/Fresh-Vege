import React, { FC } from 'react';
import './style.scss';

interface SectionDividerProps {
  title: string;
  onClick: () => void;
}

const SectionDivider: FC<SectionDividerProps> = ({ title, onClick }) => {
  return (
    <div className="section-divider">
      <h3 onClick={onClick}>{title}</h3>
      <img src="/image/background-image/section-title.png" alt="" />
    </div>
  );
};

export default SectionDivider;
