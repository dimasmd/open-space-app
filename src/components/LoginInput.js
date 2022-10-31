import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [id, onIdChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="login-input">
      <input data-test="username-input" type="text" value={id} onChange={onIdChange} placeholder="Username" />
      <input data-test="password-input" type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button data-test="login-button" type="button" onClick={() => login({ id, password })}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
