import CheckoutCard from 'components/CheckoutCard/CheckoutCard';
import NormalBreadcrumb from 'components/NormalBreadcrumb/NormalBreadcrumb';
import NormalButton from 'components/NormalButton/NormalButton';
import { get } from 'lodash';
import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ProductInfo } from 'type';
import './style.scss';

const Checkout: FC<{}> = () => {
  const checkoutProducts = useSelector(state =>
    get(state, 'shoppingReducer.shoppingProducts')
  ) as (ProductInfo & { amount: number })[];

  const checkoutProductsRender = useMemo(
    () =>
      checkoutProducts.map(val => {
        return <CheckoutCard product={val} />;
      }),
    [checkoutProducts]
  );

  const totalCheckoutProductsPrice: number = useMemo(() => {
    return checkoutProducts.reduce(
      (total: any, value: ProductInfo & { amount: number }) => {
        return (total += value.price * value.amount);
      },
      0
    );
  }, [checkoutProducts]);

  return (
    <>
      <NormalBreadcrumb categoryName="购物车" />
      <div className="checkout-list">
        {checkoutProductsRender}
        <div className="checkout-list-bottom">
          <span className="checkout-list-total-price">
            总金额: <span>￥{totalCheckoutProductsPrice.toFixed(2)}</span>
          </span>
          <NormalButton className="checkout-list-checkout-button">
            结算
          </NormalButton>
        </div>
      </div>
    </>
  );
};

export default Checkout;
