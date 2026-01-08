import { useState } from "react";
import type { RegisterCredentials } from "../types";
import { useForm } from "react-hook-form";
import "./RegisterPage.css";
import { authApi } from "../api";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {

  const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm({
      mode: 'onBlur',
      defaultValues: {
        email: '',
        password: '',
        confirmedPassword: ''
      }
    });

  const password = watch('password');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterCredentials) => {
    setLoading(true);
    setError(null)
    try {
      const response = await authApi.register(data);
      localStorage.setItem('authToken', response.jwt);
      navigate('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
  }
  };
  
  return (
    <div className="RegisterPage">
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="input-name">Email:</span>
        <input
          type="email"
          placeholder="email@example.com"
          {...register('email', { 
          required: 'Email is required',
          pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid format'}
          })} />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <span className="input-name">Password:</span>
        <input 
          type="password"
          {...register('password', { 
          required: 'Password is required',
          minLength: { value: 8, message: 'Password needs to be at least 8 characters long'},
          validate: {
            hasDigit: (value) => /\d/.test(value) || 'Needs a digit',
            hasUpperCase: (value) => /[A-Z]/.test(value) || 'Needs uppercase letter',
            hasSpecial: (value) => /[!@#$%^&*()\-_=+]/.test(value) || 'Needs special character'
          }
          })} />
        {errors.password && <span className="error">{errors.password.message}</span>}

        <span className="input-name">Confirm password:</span>
        <input
          type="password"
          {...register('confirmedPassword', { 
            required: 'Confirmation password is required',
            validate: (value) => value === password || 'Passwords must be the same'
          })} />
        {errors.confirmedPassword && <span className="error">{errors.confirmedPassword.message}</span>}

        <button type="submit">
          {loading ? 'Registering...' : 'Register'}
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  )
}