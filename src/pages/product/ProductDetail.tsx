import AmountInput from 'components/AmountInput/AmountInput';
import NormalBreadcrumb from 'components/NormalBreadcrumb/NormalBreadcrumb';
import NormalButton from 'components/NormalButton/NormalButton';
import { find, get } from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductActionType, ProductInfo, ProductsProps } from 'type';
import Drift from 'drift-zoom';
import './style.scss';
import { Avatar, List, Popover } from 'antd';

interface ProductDetailProps {
  // productId: string
}

const ProductDetail: FC<ProductDetailProps> = (
  {
    // productId
  }
) => {
  const [amountValue, setAmountValue] = useState(1);
  const [merchantAddress, setMerchantAddress] = useState('电子科技大学财富又一城负一层家乐福超市')
  const dispatch = useDispatch();
  const { id } = useParams();
  const listProducts = useSelector(state =>
    get(state, 'listProductReducer.listProducts.tabPanes', {})
  ) as ProductInfo[];
  // TODO: 直接打接口查了md，这尼玛要的数据太多了，先做个假数据吧
  const productDetail = find(
    listProducts,
    o => o.id === Number(id)
  ) as ProductInfo;
  useEffect(() => {
    new Drift(
      document.querySelector('.product-detail-image-trigger') as HTMLElement,
      {
        paneContainer: document.querySelector(
          '.product-detail-content'
        ) as HTMLElement,
      }
    );
  }, []);

  const handleOk = () => {
    const shoppingProducts = {
      ...productDetail,
      amount: amountValue,
    };
    dispatch({
      type: ProductActionType.Shopping,
      shoppingProducts,
    });
    setAmountValue(1);
  };

  // 假数据
  const data = [
    {
      id: '1',
      description: '电子科技大学财富又一城负一层家乐福超市',
    },
    {
      id: '2',
      description: '电子科技大学财富又一城负一层家乐福超市',
    },
    {
      id: '3',
      description: '电子科技大学财富又一城负一层家乐福超市',
    },
  ];

  const onListMerchantClick = (e: any) => {
    console.log(e.target)
  }

  const merchantContent = (
    <List
      dataSource={data}
      renderItem={item => (
        <List.Item 
        actions={[<span id={item.id} onClick={onListMerchantClick} >选择</span>]}>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );

  return (
    <>
      <NormalBreadcrumb category="水果" productName={productDetail?.name} />
      <div className="product-detail-wrapper">
        <section className="product-detail-container">
          <div className="product-detail-image">
            <img
              className="product-detail-image-trigger"
              src={`${productDetail?.image}?ch=DPR&dpr=2&border=1,ddd`}
              data-zoom={`${productDetail?.image}?ch=DPR&dpr=2`}
              alt={productDetail?.name}
            />
          </div>
          <div className="product-detail-content">
            <h3 className="product-detail-name">{productDetail?.name}</h3>
            <div className="product-detail-merchant">
              {merchantAddress}
              <Popover content={merchantContent} placement="top" overlayClassName='product-detail-popover' >
                <span>更换商场</span>
              </Popover>
            </div>
            <span className={'product-detail-info-price'}>
              ￥{productDetail?.price.toLocaleString()}
              {productDetail?.basePrice && (
                <span className={'product-detail-info-base-price'}>
                  ￥{productDetail.basePrice.toLocaleString()}
                </span>
              )}
            </span>
            <div className={'product-detail-amount'}>
              <AmountInput
                value={amountValue}
                setValue={setAmountValue}
                min={1}
                max={99}
              />
              <span className={'product-detail-total-price'}>
                总金额：
                <span>￥{(amountValue * productDetail?.price).toFixed(2)}</span>
              </span>
            </div>
            <NormalButton className={'shopping-button'} onClick={handleOk}>
              加入购物车
            </NormalButton>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
