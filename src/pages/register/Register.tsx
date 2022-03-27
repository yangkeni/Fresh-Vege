import React, { FC, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, message } from 'antd';
import NormalBreadcrumb from 'components/NormalBreadcrumb/NormalBreadcrumb';
import NormalButton from 'components/NormalButton/NormalButton';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';
import './style.scss';

const Register: FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  const [registerForm] = useForm();
  const navigate = useNavigate();
  const { validateFields } = registerForm;

  const handleButtonClick = (e: any) => {
    setLoading(true);
    e.target.blur();
    validateFields()
      .then(values => {
        console.log('数据处理');
        console.log(values);
        const timer = setTimeout(() => {
          message.success('注册成功');
          clearTimeout(timer);
          setLoading(false);
          navigate('/login');
        }, 1000);
      })
      .catch(err => {
        console.log(err);
        message.error('注册失败');
        setLoading(false);
      });
  };

  return (
    <>
      <NormalBreadcrumb categoryName="注册" />
      <div className="register-container">
        <h3 className="register-title">注册账户</h3>
        <Form
          layout='vertical'
          name="normal_register"
          className="register-form"
          form={registerForm}
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '用户名不能为空' }]}
            className="register-input-form"
          >
            <Input className="register-input" />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: '邮箱格式不正确',
              },
              {
                required: true,
                message: '请输入邮箱',
              },
            ]}
            className="register-input-form"
          >
            <Input className="register-input" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '密码不能为空' }]}
            className="register-input-form"
          >
            <Input.Password className="register-input" />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请再次输入密码进行确认',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次输入密码不一致'));
                },
              }),
            ]}
            className="register-input-form"
          >
            <Input.Password className="register-input" />
          </Form.Item>
          <Form.Item>
            <NormalButton
              className="register-button"
              content="注册"
              htmlType="submit"
              loading={loading}
              onClick={handleButtonClick}
            />
            <span className="go-register">
              已有账号？<Link to={'/login'}>现在登录</Link>
            </span>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
