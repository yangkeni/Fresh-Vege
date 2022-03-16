import { Breadcrumb } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
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
          <Breadcrumb.Item ><Link to={'/home'} >主页</Link></Breadcrumb.Item>
          {/* TODO: 标签改为有效地址 */}
          <Breadcrumb.Item ><Link to={'/home'} >{category}</Link></Breadcrumb.Item>
          {productName && <Breadcrumb.Item>{productName}</Breadcrumb.Item>}
        </Breadcrumb>
      </div>
    </section>
  );
};

export default NormalBreadcrumb;
