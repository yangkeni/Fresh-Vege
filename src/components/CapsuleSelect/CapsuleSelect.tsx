import { Radio, RadioChangeEvent } from 'antd';
import React, { FC, useMemo } from 'react';
import { ProductEnum } from 'type';
import style from './style.module.scss';

interface CapsuleSelectProps {
  selectData: {
    tabName: ProductEnum;
    showName: string;
  }[];
  productType: ProductEnum;
  setProductType: (productType: ProductEnum) => void;
}

const CapsuleSelect: FC<CapsuleSelectProps> = ({ selectData, productType, setProductType }) => {
  const { Group, Button } = Radio;

  const handleRadioChange = (e: RadioChangeEvent) => {
    setProductType(e.target.value);
  }

  const radioData = useMemo(() => {
    return selectData?.map((val, index) => {
      return <Button key={index} value={val.tabName}>{val.showName}</Button>;
    });
  }, [selectData]);

  return (
    <div className={style['capsule-select']}>
      <Group size='large' buttonStyle='solid' value={productType} onChange={handleRadioChange} >{radioData}</Group>
    </div>
  );
};

export default CapsuleSelect;
