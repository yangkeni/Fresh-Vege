import { Card } from 'antd';
import React, { FC, MouseEvent } from 'react';
import { ShoppingOutlined, ExpandOutlined } from '@ant-design/icons';
import style from './style.module.scss';
import { ProductInfo } from 'type';

interface ProductCardProps {
  productInfo: ProductInfo;
  setShoppingProductInfo: (info: ProductInfo) => void;
  setShoppingState: (state: boolean) => void;
  className?: string;
}

const ProductCard: FC<ProductCardProps> = ({
  productInfo,
  setShoppingState,
  className,
}) => {
  const { Meta } = Card;

  const onShoppingClick = () => {
    setShoppingState(true);
  };
  const onExpandClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e.target);
  };
  return (
    <div className={`${style['product-card']} ${className ? className : ''}`}>
      <Card cover={<img src={productInfo.image} alt={productInfo.name} />} bordered size="small">
        <Meta
          title={productInfo.name}
          description={
            <span className={style.price}>
              ￥{productInfo.price.toLocaleString()}
              {productInfo.basePrice && (
                <span className={style['base-price']}>
                  ￥{productInfo.basePrice.toLocaleString()}
                </span>
              )}
            </span>
          }
        />
      </Card>
      <div className={style['product-action']}>
        <span onClick={onShoppingClick}>
          <ShoppingOutlined />
        </span>
        <span onClick={onExpandClick}>
          <ExpandOutlined />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
