import React, { FC, useState } from 'react';
import ListCard from 'components/ListCard/ListCard';
import { footInfo } from 'testData/footInfo';
import {
  EnvironmentTwoTone,
  MailTwoTone,
  PhoneTwoTone,
} from '@ant-design/icons';
import { Button, Input, message } from 'antd';
import NormalButton from 'components/NormalButton/NormalButton';
import './style.scss';



const Footer: FC<{}> = ({ }) => {
  const [loading, setLoading] = useState(false);
  const onButtonClick = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      message.success('订阅成功');
      clearTimeout(timer);
    }, 1000)
  }

  return (
    <>
      <div className="footer-top">
        <div className="promotion-container">
          <h3 className="promotion-title">不错过每一个大促</h3>
          <div className="promotion-form">
            <Input
              placeholder="输入你的电子邮箱"
              allowClear
              suffix={
                <NormalButton className="promotion-button" loading={loading} onClick={onButtonClick} >
                登记
                </NormalButton>
              }
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo"><img src="image/logo-image/logo-transparent.png" alt="logo" /></div>
        <div className="info-container">
          <div className="info-contact-container">
            <h3>联系我们</h3>
            <ul className="info-contact-content">
              <li>
                <EnvironmentTwoTone twoToneColor={'#91ad41'} />
                <span className="info-contact-text">
                  四川省成都市武侯区一环路南一段24号
                </span>
              </li>
              <li>
                <PhoneTwoTone twoToneColor={'#91ad41'} />
                <span className="info-contact-text">600-820-8820</span>
              </li>
              <li>
                <MailTwoTone twoToneColor={'#91ad41'} />
                <span className="info-contact-text">yangkeni@gmail.com</span>
              </li>
            </ul>
          </div>
          {footInfo.data.map(val => {
            return <ListCard title={val.title} listContent={val.listContent} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
