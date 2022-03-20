import ListProducts from 'components/ListProducts/ListProducts';
import NormalBreadcrumb from 'components/NormalBreadcrumb/NormalBreadcrumb';
import { find, get } from 'lodash';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductEnum, ProductInfo, ProductsProps } from 'type';

const MerchantRouter: FC<{}> = () => {
  // TODO: 筛选未完成
  const { type = ProductEnum.All } = useParams();
  const listProducts = useSelector(state =>
    get(state, 'listProductReducer.listProducts', {})
  ) as ProductsProps;
  const { navPills, tabPanes: listProductsInfo } = listProducts;
  //@ts-ignore
  const category = find(navPills, { tabName: type })?.showName;

  return (
    <>
      <NormalBreadcrumb categoryName={category} />
      <ListProducts
        productType={type as ProductEnum}
        listProductsInfo={listProductsInfo}
      />
    </>
  );
};

export default MerchantRouter;
