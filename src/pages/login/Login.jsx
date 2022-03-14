import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Login extends Component {
  render() {
    return (
      <div>
        <section>
          <h2>登录帐户</h2>
          <p>
            <a>主页</a>
            <span>登录帐户</span>
          </p>
        </section>
        <section className="LoginSignUp">
          <div className="container">
            <div>
              <div>
                <form method="post" className="text-center mt-5">
                  <h1 className="LoginSignUp__header">登录帐户</h1>
                  <div className="login-social mt-3">
                    <a href="/" className="social-login--facebook m-1">
                      <img
                        style={{ width: 129, height: 37 }}
                        alt="facebook-login-button"
                        src="/images/btn/fb-btn.svg"
                      />
                    </a>
                    <a href="/" className="social-login--google m-1">
                      <img
                        style={{ width: 129, height: 37 }}
                        alt="facebook-login-button"
                        src="/images/btn/gp-btn.svg"
                      />
                    </a>
                  </div>
                  <div className="login-normal ">
                    <input
                      type="text"
                      className="form-control mt-3"
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      className="form-control mt-3"
                      placeholder="密码"
                    />
                    <button
                      type="submit"
                      className="button_gradient form-control mt-3"
                    >
                      登录
                    </button>
                    <p className="mt-3">
                      <a href="/">忘记密码</a>
                    </p>
                    <p className="login">
                      您没有帐户请注册
                      <Link to="/sign-up">&nbsp;这里</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
