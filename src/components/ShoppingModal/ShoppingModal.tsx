import { message, Modal } from 'antd';
import AmountInput from 'components/AmountInput/AmountInput';
import NormalButton from 'components/NormalButton/NormalButton';
import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductActionType, ProductEnum, ProductInfo } from 'type';
import style from './style.module.scss';

interface ShoppingModalProps {
  showState: boolean;
  shoppingProductInfo?: ProductInfo;
  setShowState: (state: boolean) => void;
  wrapClassName?: string;
}

const ShoppingModal: FC<ShoppingModalProps> = ({
  showState,
  shoppingProductInfo = {
    id: 1,
    name: '美国水晶葡萄',
    price: 89.8,
    basePrice: 129.9,
    image: '/image/product-image/fruit/grape.webp',
    type: ProductEnum.Fruit,
  },
  setShowState,
  wrapClassName,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [amountValue, setAmountValue] = useState(1); //TODO: 从数据里面取
  const { image, name, price, basePrice } = shoppingProductInfo;
  const inputRef = useCallback(
    node => {
      node && node.focus();
    },
    [showState]
  );

  const handleOk = (e: any) => {
    setLoading(true);
    e.target.blur();
    const timer = setTimeout(() => {
      setLoading(false);
      message.success('加入成功');
      clearTimeout(timer);
    }, 1000);
    const shoppingProducts = {
      ...shoppingProductInfo,
      amount: amountValue,
    }
    dispatch({
      type: ProductActionType.Shopping,
      shoppingProducts,
    })
    setAmountValue(1);
    setLoading(false);
  };

  const handleCancel = () => {
    setAmountValue(1);
    setShowState(false);
  };

  return (
    <Modal
      visible={showState}
      onCancel={handleCancel}
      wrapClassName={`${style['shopping-modal-wrapper']} ${
        wrapClassName ? wrapClassName : ''
      }`}
      width={650}
      style={{ top: 100 }}
      footer={null}
      destroyOnClose
    >
      <div className={style['shopping-modal-content']}>
        <div className={style['shopping-modal-content-left']}>
          <img src={image} alt={name} />
          <div className={style.info}>
            <span className={style['info-name']}>{name}</span>
            <span className={style['info-price']}>
              ￥{price.toLocaleString()}
              {basePrice && (
                <span className={style['info-base-price']}>
                  ￥{basePrice.toLocaleString()}
                </span>
              )}
            </span>
          </div>
        </div>
        <div className={style['shopping-modal-content-right']}>
          <div className={style.amount}>
            <AmountInput
              inputRef={inputRef}
              value={amountValue}
              setValue={setAmountValue}
              min={1}
              max={99}
              wrapClassName={style['shopping-wrapper-input']}
            />
            <span className={style['total-price']}>
              总金额：<span>￥{(amountValue * price).toFixed(2)}</span>
            </span>
          </div>
          <NormalButton loading={loading} className={style['shopping-button']}  onClick={handleOk}>加入购物车</NormalButton>
        </div>
      </div>
    </Modal>
  );
};

export default ShoppingModal;
