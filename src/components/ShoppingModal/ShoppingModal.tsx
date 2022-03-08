import { Modal } from 'antd';
import React, { FC } from 'react';
import { ProductInfo } from 'type';
import style from './style.module.scss';

interface ShoppingModalProps {
  showState: boolean;
  shoppingProductInfo?: ProductInfo;
  setShowState: (state: boolean) => void;
  wrapClassName?: string;
}

const ShoppingModal: FC<ShoppingModalProps> = ({
  showState,
  setShowState,
  wrapClassName,
}) => {

  const handleOk = () => {
    setShowState(false);
  };

  const handleCancel = () => {
    setShowState(false);
  };

  return (
    <Modal
      visible={showState}
      onOk={handleOk}
      onCancel={handleCancel}
      wrapClassName={`${style['shopping-modal-wrapper']} ${
        wrapClassName ? wrapClassName : ''
      }`}
      style={{ top: 100 }}
      footer={null}
    >
          <div className="shopping-modal-content">
          </div>
    </Modal>
  );
};

export default ShoppingModal;
