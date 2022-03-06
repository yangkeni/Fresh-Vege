import React, { FC } from 'react';
import style from './style.module.scss';

interface BannerCardProps {
  title: string;
  desc: string;
  to?: string;
  background?: {
    image: string;
    color: string;
  };
  className?: string;
}

const BannerCard: FC<BannerCardProps> = ({
  title,
  desc,
  to = '/',
  background,
  className,
}) => {
  return (
    <div
      className={`${className ? className : ''} ${style['banner-card']}`}
      style={{
        background: `${background?.color} url(${background?.image}) no-repeat right center`,
      }}
    >
      <div className={style['banner-card-content']}>
        <div className={style['banner-card-text-content']}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <a href={to}>look now</a>
        </div>
      </div>
    </div>
  );
};
export default BannerCard;
