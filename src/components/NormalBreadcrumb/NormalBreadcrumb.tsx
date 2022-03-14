import { Breadcrumb } from 'antd';
import React, { FC } from 'react';
import style from './style.module.scss';

interface BreadCrumbProps {
  category: string;
  productName?: string;
}

const NormalBreadcrumb: FC<BreadCrumbProps> = ({ category, productName }) => {
  return (
    <section className={style.breadcrumb}>
      <h2 className={style['breadcrumb-header']}>
        {productName ? productName : category}
      </h2>
      <div className={style['breadcrumb-content']}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>主页</Breadcrumb.Item>
          <Breadcrumb.Item href="">{category}</Breadcrumb.Item>
          {productName && <Breadcrumb.Item>{productName}</Breadcrumb.Item>}
        </Breadcrumb>
      </div>
    </section>
  );
};

export default NormalBreadcrumb;
