import AmountInput from 'components/AmountInput/AmountInput';
import NormalBreadcrumb from 'components/NormalBreadcrumb/NormalBreadcrumb';
import NormalButton from 'components/NormalButton/NormalButton';
import { find, findIndex, get, pullAt } from 'lodash';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductActionType, ProductInfo } from 'type';
import Drift from 'drift-zoom';
import './style.scss';
import { Dropdown, Menu, message, Tooltip } from 'antd';

interface ProductDetailProps {
  // productId: string
}

const ProductDetail: FC<ProductDetailProps> = (
  {
    // productId
  }
) => {
  // 假数据
  const dataTest = [
    {
      id: '1',
      description: '电子科技大学财富又一城负一层家乐福超市',
    },
    {
      id: '2',
      description: '四川大学财富又一城负一层家乐福超市',
    },
    {
      id: '3',
      description: '中国人民大学财富又一城负一层家乐福超市',
    },
    {
      id: '4',
      description: '沙河大学财富又一城负一层家乐福超市',
    },
  ];

  const [merchantAddress, setMerchantAddress] = useState(
    dataTest.shift()! // 假定他一定存在，接口过来得改
  );

  const [listData, setListData] = useState(dataTest); //接口过来得改，准备接接口了

  const [amountValue, setAmountValue] = useState(1);

  const [loading, setLoading] = useState(false);

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

  // 加入购物车操作
  const handleOk = (e: any) => {
    setLoading(true);
    e.target.blur();
    const timer = setTimeout(() => {
      setLoading(false);
      message.success('加入成功');
      clearTimeout(timer);
    }, 1000);
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

  const handleListMerchantClick = (e: any) => {
    console.log(e);
    const targetIndex = findIndex(listData, { id: e.key });
    const resultData = [...listData, merchantAddress];
    setMerchantAddress(listData[targetIndex]);
    pullAt(resultData, targetIndex);
    setListData(resultData);
  };
  const ListMerchant = useMemo(
    () =>
      listData.map(val => {
        return <Menu.Item key={val.id}>{val.description}</Menu.Item>;
      }),
    [listData]
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
              <Tooltip
                overlayStyle={{ maxWidth: 'unset' }}
                title={merchantAddress.description}
                placement="bottom"
              >
                <span className="product-detail-merchant-address">
                  {merchantAddress.description}
                </span>
              </Tooltip>
              <Dropdown
                placement="bottom"
                arrow
                overlayClassName="product-detail-merchant-overlay"
                overlay={
                  <Menu onClick={handleListMerchantClick}>{ListMerchant}</Menu>
                }
              >
                <span className="product-detail-merchant-change">更换商场</span>
              </Dropdown>
            </div>
            <span className="product-detail-info-price">
              ￥{productDetail?.price.toLocaleString()}
              {productDetail?.basePrice && (
                <span className="product-detail-info-base-price">
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
            <NormalButton className={'shopping-button'} loading={loading} onClick={handleOk}>
              加入购物车
            </NormalButton>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
