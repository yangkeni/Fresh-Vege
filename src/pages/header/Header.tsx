import { Menu } from 'antd';
import React, { FC } from 'react';
import UserInfo from './userInfo/UserInfo';
import { ProductEnum } from 'type';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';

const Header: FC<{}> = () => {
  const { Item, SubMenu } = Menu;
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <Link to={'/'}>
          <img src="/image/logo-image/logo-transparent.png" alt="logo" />
        </Link>
      </div>
      <div className="func-zone">
        <Menu selectedKeys={[location.pathname]} mode="horizontal">
          <Item key={'/home'}>
            <Link to={'/'}>主页</Link>
          </Item>
          <SubMenu key={'/merchant'} title="市场">
            <Item key={`/merchant/${ProductEnum.All}`}>
              <Link to={`/merchant/${ProductEnum.All}`}>总览</Link>
            </Item>
            <Item key={`/merchant/${ProductEnum.Fruit}`}>
              <Link to={`/merchant/${ProductEnum.Fruit}`}>水果</Link>
            </Item>
            <Item key={`/merchant/${ProductEnum.Seafood}`}>
              <Link to={`/merchant/${ProductEnum.Seafood}`}>海鲜</Link>
            </Item>
            <Item key={`/merchant/${ProductEnum.Nut}`}>
              <Link to={`/merchant/${ProductEnum.Nut}`}>坚果</Link>
            </Item>
            <Item key={`/merchant/${ProductEnum.Vegetable}`}>
              <Link to={`/merchant/${ProductEnum.Vegetable}`}>蔬菜</Link>
            </Item>
            <Item key={`/merchant/${ProductEnum.FreshMeat}`}>
              <Link to={`/merchant/${ProductEnum.FreshMeat}`}>鲜肉</Link>
            </Item>
          </SubMenu>
          <Item key={'news'}>新闻</Item>
          <Item key={'/upload'}>
            <Link to={'/upload'}>上传商品</Link>
          </Item>
          <Item key={'join'}>加入我们</Item>
        </Menu>
      </div>
      <UserInfo />
    </header>
  );
};

export default Header;
