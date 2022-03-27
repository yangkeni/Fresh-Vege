import { CloseCircleOutlined } from '@ant-design/icons';
import AmountInput from 'components/AmountInput/AmountInput';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductActionType, ProductInfo } from 'type';
import style from './style.module.scss';

interface CheckoutCardProps {
  product: ProductInfo & { amount: number };
  wrapClassName?: string;
}

const CheckoutCard: FC<CheckoutCardProps> = ({ product, wrapClassName }) => {
  const dispatch = useDispatch();
  const { image, name, price, amount, id } = product;
  const [amountValue, setAmountValue] = useState(amount);

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
    <div
      className={`${style['checkout-card-wrapper']} ${
        wrapClassName ? wrapClassName : ''
      }`}
    >
      <div className={style['checkout-card-content-left']}>
        <Link className={style['checkout-card-image']} to={`/products/${id}`}>
          <img src={image} alt={name} />
        </Link>
        <div className={style.info}>
          <span className={style['info-name']}>
            <Link to={`/products/${id}`}>{name}</Link>
          </span>
          <span className={style['info-price']}>
            ￥{price.toLocaleString()}
          </span>
        </div>
      </div>
      <div className={style['checkout-card-content-right']}>
        <AmountInput
          value={amountValue}
          setValue={setAmountValue}
          min={1}
          max={99}
          wrapClassName={style['checkout-card-wrapper-input']}
        />
        <span className={style['total-price']}>
          金额：<span>￥{(amountValue * price).toFixed(2)}</span>
        </span>

        <CloseCircleOutlined
          className={style['checkout-card-delete-icon']}
          onClick={handleCloseClick}
        />
      </div>
    </div>
  );
};

export default CheckoutCard;
