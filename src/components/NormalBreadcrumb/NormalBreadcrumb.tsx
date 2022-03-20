import { Breadcrumb } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ProductEnum } from 'type';
import style from './style.module.scss';

interface BreadCrumbProps {
  categoryName: string;
  categoryAddress?: ProductEnum;
  productName?: string;
}

const NormalBreadcrumb: FC<BreadCrumbProps> = ({ categoryName, categoryAddress, productName }) => {
  return (
    <section className={style.breadcrumb}>
      <h2 className={style['breadcrumb-header']}>
        {productName ? productName : categoryName}
      </h2>
      <div className={style['breadcrumb-content']}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={'/home'}>主页</Link>
          </Breadcrumb.Item>
          {categoryAddress ? (
            <Breadcrumb.Item>
              <Link to={`/merchant/${categoryAddress}`}>{categoryName}</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>{categoryName}</Breadcrumb.Item>
          )}
          {productName && <Breadcrumb.Item>{productName}</Breadcrumb.Item>}
        </Breadcrumb>
      </div>
    </section>
  );
};

export default NormalBreadcrumb;
