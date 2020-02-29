import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  email: string;
  password: string;
}

const Login: React.FC<Props> = ({ email, password }) => {
  return (
    <div className="pg-login">
      <div className="pg-login__wrap">
        <div className="pg-login__wrap__title">
          <span>Login</span>
          {/* <p>New to Nordstrom? Create an account.</p> */}
        </div>
        <form className="pg-login__wrap__form">
          <label className="pg-login__wrap__form__email">
            <span className="email">Email</span>
            <div className="email-box">
              <input type="text" value={email} />
            </div>
          </label>
          <label className="pg-login__wrap__form__password">
            <span className="password">Password</span>
            <div className="password-box">
              <input type="password" value={password} />
            </div>
          </label>
          <div className="pw-find">
            <Link to="/">Forgot password?</Link>
          </div>
          <div className="login-checkbox">
            <label className="checkbox">
              <input type="checkbox" />
            </label>
            <span> Keep me signed in.</span>
          </div>

          <div className="btn-login">
            <Link to="/home">
              <span>Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
