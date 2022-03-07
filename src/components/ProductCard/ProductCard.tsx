import { Card } from 'antd';
import React, { FC, MouseEvent } from 'react';
import { ShoppingOutlined, ExpandOutlined } from '@ant-design/icons';
import style from './style.module.scss';

interface ProductCardProps {
  imgSrc: string;
  name: string;
  price: number;
  setShoppingState: (state: boolean) => void;
  basePrice?: number;
  className?: string;
}

const ProductCard: FC<ProductCardProps> = ({
  imgSrc,
  name,
  price,
  setShoppingState,
  basePrice,
  className,
}) => {
  const { Meta } = Card;

  const onShoppingClick = (e: MouseEvent<HTMLDivElement>) => {
    setShoppingState(true);
  };
  const onExpandClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e.target);
  };
  return (
    <div className={`${style['product-card']} ${className ? className : ''}`}>
      <Card cover={<img src={imgSrc} alt={name} />} bordered size="small">
        <Meta
          title={name}
          description={
            <span className={style.price}>
              ￥{price.toLocaleString()}
              {basePrice && (
                <span className={style['base-price']}>
                  ￥{basePrice.toLocaleString()}
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
