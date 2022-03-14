import ProductCard from 'components/ProductCard/ProductCard';
import ShoppingModal from 'components/ShoppingModal/ShoppingModal';
import React, { FC, useMemo, useState } from 'react';
import { ProductEnum, ProductInfo } from 'type';
import style from './style.module.scss';

interface ListProductsProps {
  productType?: ProductEnum;
  listProductsInfo?: ProductInfo[];
  className?: string;
}

const ListProducts: FC<ListProductsProps> = ({
  productType,
  listProductsInfo,
  className,
}) => {
  const [shoppingShow, setShoppingShow] = useState(false);
  const [shoppingProductInfo, setShoppingProductInfo] = useState<ProductInfo>();

  //TODO: 这边应该最好是直接取后端选好的数据会更好一些，或者后端传过来的数据会以type分类
  const listProductsWithType = useMemo(() => {
    if (productType === ProductEnum.All) {
      return listProductsInfo?.map((val, index) => {
        return (
          <ProductCard
            key={index}
            productInfo={val}
            setShoppingProductInfo={setShoppingProductInfo}
            setShoppingState={setShoppingShow}
          />
        );
      });
    }
    return listProductsInfo?.map((val, index) => {
      return (
        val.type === productType && (
          <ProductCard
            key={index}
            productInfo={val}
            setShoppingProductInfo={setShoppingProductInfo}
            setShoppingState={setShoppingShow}
          />
        )
      );
    });
  }, [productType, listProductsInfo]);

  return (
    <>
      <div
        className={`${style['list-products-container']} ${
          className ? className : ''
        }`}
      >
        {listProductsWithType}
      </div>
      <ShoppingModal
        showState={shoppingShow}
        shoppingProductInfo={shoppingProductInfo}
        setShowState={setShoppingShow}
      />
    </>
  );
};

export default ListProducts;
