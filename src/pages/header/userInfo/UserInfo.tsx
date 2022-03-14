import { ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import { get } from 'lodash';
import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const UserInfo: FC<{}> = () => {
  const listProducts = useSelector(state => 
    get(state, 'shoppingReducer.shoppingProducts')
  );
  const totalShoppingProducts = useMemo(() => {
    return listProducts.reduce((total: any, value: any) => {
      return total += Number(value.amount)
    }, 0)
  }, [listProducts]);

  return (
    <div className="user-info">
      <Avatar icon={<UserOutlined />} />
      <Badge count={totalShoppingProducts} offset={[-1,1]} color='rgb(145, 173, 65)' >
        <ShoppingOutlined />
      </Badge>
    </div>
  );
};
export default UserInfo;
