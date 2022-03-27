import React, { FC, useMemo, useState } from 'react';
import { ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Popover } from 'antd';
import { get } from 'lodash';
import { useSelector } from 'react-redux';
import { ProductInfo } from 'type';
import ShoppingCartCard from 'components/ShoppingCartCard/ShoppingCartCard';
import NormalButton from 'components/NormalButton/NormalButton';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const UserInfo: FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const shoppingProducts = useSelector(state =>
    get(state, 'shoppingReducer.shoppingProducts')
  ) as (ProductInfo & { amount: number })[];

  const totalShoppingProductsAmount = useMemo(() => {
    return shoppingProducts.reduce(
      (total: any, value: ProductInfo & { amount: number }) => {
        return (total += Number(value.amount));
      },
      0
    );
  }, [shoppingProducts]);

  const totalShoppingProductsPrice: number = useMemo(() => {
    return shoppingProducts.reduce(
      (total: any, value: ProductInfo & { amount: number }) => {
        return (total += value.price * value.amount);
      },
      0
    );
  }, [shoppingProducts]);

  const shoppingProductsRender = useMemo(
    () =>
      shoppingProducts.map(val => {
        return <ShoppingCartCard product={val} />;
      }),
    [shoppingProducts]
  );

  const handleCheckButton = (e: any) => {
    setLoading(true);
    console.log(e.target)
    e.target.blur();
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/home', { replace: true });
      clearTimeout(timer);
    }, 500);
  };

  return (
    <div className="user-info">
      <Popover
        overlayClassName="user-info-tooltip"
        content={
          <>
            <NormalButton
              className="user-info-tooltip-login-button"
              onClick={() => {
                navigate('/login', { replace: true });
              }}
            >
              登录
            </NormalButton>
            <NormalButton
              className="user-info-tooltip-register-button"
              onClick={() => {
                navigate('/register', { replace: true });
              }}
            >
              注册
            </NormalButton>
          </>
        }
        placement="bottomRight"
      >
        <Avatar icon={<UserOutlined />} />
      </Popover>
      <Popover
        overlayClassName="shopping-products-basket-info"
        content={
          <>
            <div className="shopping-products-basket-info-content">
              {shoppingProductsRender}
            </div>
            <div className="shopping-products-basket-info-bottom">
              <span className="shopping-products-basket-total-price">
                总金额: <span>￥{totalShoppingProductsPrice.toFixed(2)}</span>
              </span>
              <NormalButton
                className="shopping-products-basket-shopping-button"
                loading={loading}
                onClick={handleCheckButton}
              >
                去结算
              </NormalButton>
            </div>
          </>
        }
        placement="bottomRight"
      >
        <Badge
          count={totalShoppingProductsAmount}
          offset={[-1, 1]}
          color="rgb(145, 173, 65)"
        >
          <ShoppingOutlined />
        </Badge>
      </Popover>
    </div>
  );
};
export default UserInfo;
