import React, { FC, useEffect, useState } from 'react';
import AmountInput from 'components/AmountInput/AmountInput';
import { Link } from 'react-router-dom';
import { ProductActionType, ProductInfo } from 'type';
import { useDispatch } from 'react-redux';
import style from './style.module.scss';
import { CloseCircleOutlined } from '@ant-design/icons';

interface ShoppingCartCardProps {
  product: ProductInfo & { amount: number };
}

const ShoppingCartCard: FC<ShoppingCartCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [amountValue, setAmountValue] = useState(product.amount);

  useEffect(() => {
    const shoppingProducts = {
      ...product,
      amount: amountValue,
    };
    dispatch({
      type: ProductActionType.ShoppingAmountUpdate,
      shoppingProducts,
    });
  }, [amountValue]);

  const handleCloseClick = () => {
    dispatch({
      type: ProductActionType.DeleteShoppingProduct,
      deleteProduct: product,
    });
  };

  return (
    <div className={style['shopping-product-info-card']}>
      <Link
        className={style['shopping-product-image']}
        to={`/products/${product.id}`}
      >
        <img src={product.image} alt={product.name} />
      </Link>
      <div className={style['shopping-product-detail']}>
        <h3 className={style['detail-title']}>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <span className={style['detail-price']} >
          ￥{product.price} <span>x {product.amount}</span>
        </span>
        <AmountInput
          value={amountValue}
          setValue={setAmountValue}
          min={1}
          max={99}
          wrapClassName={style['detail-input-amount']}
        />
      </div>
      <CloseCircleOutlined className={style['product-delete-icon']} onClick={handleCloseClick} />
    </div>
  );
};

export default ShoppingCartCard;
