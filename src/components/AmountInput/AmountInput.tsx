import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
import React, { FC } from 'react';
import style from './style.module.scss';

interface AmountInputProps {
  value: number;
  setValue: (val: number) => void;
  min?: number;
  max?: number;
  inputRef?: (node: any) => void;
  wrapClassName?: string;
}

const AmountInput: FC<AmountInputProps> = ({
  inputRef,
  value,
  setValue,
  min,
  max,
  wrapClassName,
}) => {
  const onMinusClick = () => {
    if (min && value - 1 < min) {
      return min;
    }
    setValue(value - 1);
  };

  const onPlusClick = () => {
    if (max && value + 1 > max) {
      return max;
    }
    setValue(value + 1);
  };

  return (
    <div
      className={`${style['input-wrapper']} ${
        wrapClassName ? wrapClassName : ''
      }`}
    >
      <MinusCircleOutlined onClick={onMinusClick} />
      <InputNumber
        ref={inputRef}
        value={value}
        controls={false}
        className={style['number-input-box']}
      />
      <PlusCircleOutlined onClick={onPlusClick} />
    </div>
  );
};

export default AmountInput;
