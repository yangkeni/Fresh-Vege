import React, { FC } from 'react';
import style from './style.module.scss';

interface ListCardProps {
  title: string;
  listContent: {
    name: string;
    to?: string;
  }[];
}

const ListCard: FC<ListCardProps> = ({ title, listContent }) => {
  return (
    <div className={style['list-card-container']}>
      <h3>{title}</h3>
      <ul className={style['list-content-container']}>
        {listContent.map((value) => {
          return (
            <li>
              <a href={value?.to}>{value.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ListCard;
