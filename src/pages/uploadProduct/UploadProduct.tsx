import { Alert, Form, Input, InputNumber } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import AmountInput from 'components/AmountInput/AmountInput';
import NormalBreadcrumb from 'components/NormalBreadcrumb/NormalBreadcrumb';
import UploadImage from 'components/UploadImage/UploadImage';
import React, { FC, useState } from 'react';
import { formatNumber } from 'utils';
import './style.scss';

const UploadProduct: FC<{}> = () => {
  const [uploadForm] = useForm();
  const { validateFields, setFieldsValue, getFieldValue } = uploadForm;

  const onValuesChange = (changedValues: any, allValues: any) => {
    console.log(changedValues, allValues);
  };

  // const onPriceChange = (e: any) => {
  //   const value = getFieldValue('productPrice');
  //   const priceValue = e.target.value;
  //   console.log(value)
  //   const reg = /^-?\d*(\.\d*)?$/;
  //   if (
  //     (!isNaN(priceValue) && reg.test(priceValue)) ||
  //     priceValue === '' ||
  //     priceValue === '-'
  //   ) {
  //     setFieldsValue({
  //       productPrice: formatNumber(priceValue),
  //     });
  //   } else {
  //     console.log('输入的不是数字');
  //     console.log(e)
  //     e.cancelable = true;
  //     e.preventDefault();
  //     e.stopPropagation();
  //   }
  // };
  // const onPriceBlur = () => {
  //   const value = getFieldValue('productPrice');
  //   let valueTemp = value;
  //   if (value.charAt(value.length - 1) === '.' || value === '-') {
  //     valueTemp = value.slice(0, -1);
  //   }
  //   onPriceChange();
  // };
  return (
    <>
      <NormalBreadcrumb categoryName={'上传商品'} />
      <div className="upload-content">
        <Alert
          description="当商品信息已经存在时，上传的商品信息将会与已有商品合并，并覆盖已有商品信息。"
          type="info"
          showIcon
          closable
        />
        <Form form={uploadForm} onValuesChange={onValuesChange}>
          <div className="upload-form-title">商品信息</div>
          <div className="upload-form-content">
            <Form.Item label="商品名称" name="productName">
              <Input className="product-name" placeholder="请输入商品名称" />
            </Form.Item>
            <Form.Item label="商品价格" name="productPrice">
              <Input
                placeholder="请输入商品价格"
                className="product-price"
                // onBlur={onPriceBlur}
              />
            </Form.Item>
            <Form.Item label="原价" name="productBasePrice">
              <Input
                placeholder="请输入商品价格"
                className="product-price"
                // onChange={onPriceChange}
                // onBlur={onPriceBlur}
              />
            </Form.Item>
            <Form.Item label="库存" name="productStock">
              <InputNumber min={0} max={999} controls={false} />
            </Form.Item>
            <Form.Item label="商品图片" name="productImage">
              <UploadImage />
            </Form.Item>
            <Form.Item label="商品描述" name="productDesc">
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="商品地址" name="productDetail">
              <Input.TextArea />
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default UploadProduct;
