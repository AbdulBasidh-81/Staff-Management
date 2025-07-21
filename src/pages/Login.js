import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/usersSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    setTimeout(() => {
      if (loggedInUser === null) {
        setError(true);
      }
    }, 100);
  };
  useEffect(() => {
    if (loggedInUser) {
      navigate('/dashboard');
    }
  }, [loggedInUser, navigate]);
  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <input type="text" placeholder="Username" {...register('username', { required: true })} />
        <div className="password-wrapper">
          <input type={showPassword ? 'text' : 'password'} placeholder="Password" 
          {...register('password', { required: true })} />

          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}
            title={showPassword ? 'Hide Password' : 'Show Password'} >
            {showPassword ? '🙎‍♂️' : '🤦‍♂️'} </span>
        </div>
        <button type="submit">Login</button>
        {error && <p className="error"><b>Invalid Usernamr or Password</b></p>}
      </form>
    </div>
  );
}
export default Login;