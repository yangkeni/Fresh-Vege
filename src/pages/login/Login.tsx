import React, { FC, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, message } from 'antd';
import NormalBreadcrumb from 'components/NormalBreadcrumb/NormalBreadcrumb';
import NormalButton from 'components/NormalButton/NormalButton';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';
import './style.scss';

const Login: FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  const [loginForm] = useForm();
  const navigate = useNavigate();
  const { validateFields } = loginForm;

  const handleButtonClick = (e: any) => {
    setLoading(true);
    e.target.blur();
    validateFields()
      .then(values => {
        console.log('数据处理');
        console.log(values);
        const timer = setTimeout(() => {
          message.success('登录成功');
          clearTimeout(timer);
          setLoading(false);
          navigate('/home');
        }, 1000);
      })
      .catch(err => {
        console.log(err);
        message.error('登录失败');
        setLoading(false);
      });
  };

  return (
    <>
      <NormalBreadcrumb categoryName="登录" />
      <div className="login-container">
        <h3 className="login-title">登录账户</h3>
        <Form name="normal_login" className="login-form" form={loginForm}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '用户名不能为空' }]}
            className="login-input-form"
          >
            <Input
              className="login-input"
              prefix={<UserOutlined />}
              placeholder="请输入用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '密码不能为空' }]}
            className="login-input-form"
          >
            <Input.Password
              className="login-input"
              prefix={<LockOutlined />}
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <NormalButton
              className="login-button"
              content="登录"
              htmlType="submit"
              loading={loading}
              onClick={handleButtonClick}
            />
            <span className="go-register">
              没有账号？<Link to={'/register'}>现在注册</Link>
            </span>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
