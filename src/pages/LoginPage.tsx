import { useForm } from "react-hook-form";
import "./LoginPage.css";
import { useState } from "react";
import type { LoginCredentials } from "../types";
import { authApi } from "../api";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({
      mode: 'onSubmit',
      defaultValues: {
        email: '',
        password: ''
      }
    });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const onSubmit = async (data: LoginCredentials) => {
    setLoading(true);
    setError(null)
    
    try {
      const response = await authApi.login(data);
      localStorage.setItem('authToken', response.jwt);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="LoginPage">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="input-name">Email:</span>
        <input
          type="email"
          placeholder="email@example.com"
          {...register('email', { 
          required: 'Email is required'
          })} />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <span className="input-name">Password:</span>
        <input 
          type="password"
          {...register('password', {
            required: 'Password is required'
          })} />
        {errors.password && <span className="error">{errors.password.message}</span>}

        <button type="submit">
          {loading ? 'Logging in' : 'Log in'}
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}