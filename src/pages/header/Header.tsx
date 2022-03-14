import { Menu } from 'antd';
import React, { FC } from 'react';
import UserInfo from './userInfo/UserInfo';
import { ProductEnum } from "type";
import "./style.scss";

const Header: FC<{}> = () => {
  const { Item, SubMenu } = Menu;

  return (
    <header className='header'>
      <div className="logo">
        <img src="/image/logo-image/logo-transparent.png" alt="logo" />
      </div>
      <div className="func-zone">
        <Menu defaultSelectedKeys={['home']}	 mode="horizontal">
          <Item key={'home'}>
            主页
          </Item>
          <SubMenu key={ProductEnum.All} title="市场">
            <Item key={ProductEnum.Fruit}>水果</Item>
            <Item key={ProductEnum.Seafood}>海鲜</Item>
            <Item key={ProductEnum.Nut}>坚果</Item>
            <Item key={ProductEnum.Vegetable}>鲜蔬</Item>
            <Item key={ProductEnum.FreshMeat}>鲜肉</Item>
          </SubMenu>
          <Item key={'news'}>
            新闻  
          </Item>
          <Item key={'about'}>
            关于我们
          </Item>
          <Item key={'join'}>
            加入我们
          </Item>
        </Menu>
      </div>
      <UserInfo />
    </header>
    // <header className="header">
    //   <nav className="navbar navbar-expand-lg header__navbar">
    //     <div className="container">
    //       <div className="col-2 d-lg-none header__bars">
    //         <i className="fa fa-bars" />
    //       </div>
    //       <div className="col-5 col-lg-3 col-sm-4 header__col">
    //         <Link className="navbar-brand mr-0" to="/"><img src="" alt='' /></Link>
    //       </div>
    //       <div className="col-lg-7 header__col--none">
    //         <ul className="navbar-nav mr-auto">
    //           <li className="nav-item active">
    //             <NavLink className="nav-link" to="/">主页</NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/about">介绍</NavLink>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <NavLink className="nav-link dropdown-toggle" to="/product" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
    //               产品
    //             </NavLink>
    //             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //               <Link className="dropdown-item" to="/rau-cu">鲜蔬</Link>
    //               <Link className="dropdown-item" to="/hoa-qua">水果</Link>
    //               <Link className="dropdown-item" to="/cac-loai-hat">坚果</Link>
    //               <Link className="dropdown-item" to="/tuoi-song">新鲜食品</Link>
    //             </div>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/news">消息</NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/contact">接触</NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-4 col-lg-2 col-md-3 col-sm-3 header__col">
    //         <div className="icon text-center">
    //           <span className="icon__search">
    //             <i className="fas fa-search icon__search" title="搜索" />
    //             <form method="post" className="icon__form">
    //               <input type="text" placeholder="搜索 ..." className="button_gradient" />
    //               <button type="submit"><i className="fas fa-search" title="搜索" /></button>
    //             </form>
    //           </span>
    //           <span className="icon__login">
    //             <div className="logIn-signUp">
    //               <Link to='/login' className="button_gradient">登录</Link>
    //               <Link to='/sign-up'>登记</Link>
    //             </div>
    //             <i className="fas fa-user-plus" title="Đăng nhập/Đăng ký" />
    //           </span>
    //           <span title="Giỏ hàng" className="icon__cart">
    //             <Link className="fas fa-shopping-basket" to="/cart"><span></span></Link> {/*购物车站位 */}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    //   {/* Menu mobile */}
    //   <div id="mySideNav" className="mySideNav">
    //     <div className="mySideNav__logo">
    //       <img src="" alt='' />
    //       <i className="fa fa-times mySideNav__close" />
    //     </div>
    //     <div className="mySideNav__menu">
    //       <ul>
    //         <li><NavLink to='/'>主页</NavLink></li>
    //         <li><NavLink to='/about'>介绍</NavLink></li>
    //         <li><NavLink to='/product'>产品</NavLink></li>
    //         <li><NavLink to='/news'>消息</NavLink></li>
    //         <li><NavLink to='/contact'>接触</NavLink></li>
    //       </ul>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
