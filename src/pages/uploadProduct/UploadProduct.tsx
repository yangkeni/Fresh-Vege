import { Alert, Form, Input, InputNumber, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import NormalBreadcrumb from 'components/NormalBreadcrumb/NormalBreadcrumb';
import NormalButton from 'components/NormalButton/NormalButton';
import UploadImage from 'components/UploadImage/UploadImage';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatNumber, parseFormatNumber } from 'utils';
import './style.scss';

const UploadProduct: FC<{}> = () => {
  const [uploadForm] = useForm();
  const { validateFields, setFieldsValue } = uploadForm;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onInputNumberChange = (e: unknown, fieldName: string) => {
    const newValue = e ? parseFormatNumber(e as string) : '0';
    setFieldsValue({
      [fieldName]: formatNumber(newValue),
    });
  };

  const handleButtonClick = (e: any) => {
    setLoading(true);
    e.target.blur();
    validateFields()
      .then(values => {
        console.log('数据处理');
        console.log(values);
        const timer = setTimeout(() => {
          message.success('上传成功');
          clearTimeout(timer);
          setLoading(false);
          navigate('/home');
        }, 1000);
      })
      .catch(err => {
        console.log(err);
        message.error('上传失败');
        setLoading(false);
      });
  };

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
        <Form form={uploadForm} layout="vertical">
          <div className="upload-form-title">商品信息</div>
          <div className="upload-form-content">
            <div className="image-upload">
              <Form.Item label="商品图片" name="productImage">
                <UploadImage />
              </Form.Item>
            </div>
            <div className="info-upload">
              <Form.Item label="商品名称" name="productName">
                <Input
                  className="upload-input product-name"
                  placeholder="请输入商品名称"
                />
              </Form.Item>
              <Form.Item label="商品价格" name="productPrice">
                <InputNumber
                  placeholder="请输入商品价格"
                  className="upload-input product-input-number"
                  onChange={e => onInputNumberChange(e, 'productPrice')}
                  controls={false}
                  min={0}
                  max={99999}
                />
              </Form.Item>
              <Form.Item label="原价" name="productBasePrice">
                <InputNumber
                  placeholder="请输入商品价格"
                  className="upload-input product-input-number"
                  onChange={e => onInputNumberChange(e, 'productBasePrice')}
                  controls={false}
                  min={0}
                  max={99999}
                />
              </Form.Item>
              <Form.Item label="库存" name="productStock">
                <InputNumber
                  placeholder="请输入库存数量"
                  className="upload-input product-input-number"
                  onChange={e => onInputNumberChange(e, 'productStock')}
                  min={0}
                  max={999}
                  controls={false}
                />
              </Form.Item>
              <Form.Item
                className="upload-input"
                label="商品描述"
                name="productDesc"
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                className="upload-input"
                label="商品地址"
                name="productDetail"
              >
                <Input.TextArea />
              </Form.Item>
            </div>
          </div>
          <Form.Item>
            <NormalButton
              className="upload-button"
              content="上传"
              htmlType="submit"
              loading={loading}
              onClick={handleButtonClick}
            />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default UploadProduct;
